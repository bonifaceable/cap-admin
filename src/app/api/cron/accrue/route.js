// app/api/cron/accrue/route.ts
import { NextRequest, NextResponse } from "next/server";
// import { connectDB } from "@/server/db";
import { ensureDb } from "@/lib/ensureDb";
import { Investment } from "@/server/models/investment";
import { Wallet } from "@/server/models/wallet";
import { PlanModel } from "@/server/models/plan";
import { TransactionModel } from "@/server/models/transaction"; // you shared this model
import mongoose from "mongoose";

/** Require the cron secret header so only Vercel Cron can call this */
function assertCronAuth(req) {
  const header = req.headers.get("authorization");
  const expected = `Bearer ${process.env.CRON_SECRET}`;
  return header === expected;
}

/** Floor to whole 24h windows between two timestamps */
function wholeDaysSince(from, to) {
  const ms = to.getTime() - from.getTime();
  return Math.max(0, Math.floor(ms / (24 * 60 * 60 * 1000)));
}

/** Returns the effective daily rate as a decimal (e.g., 0.02 for 2% daily) */
function getDailyRate(percentMaybeStringOrNumber) {
  const num = typeof percentMaybeStringOrNumber === "string"
    ? parseFloat(percentMaybeStringOrNumber)
    : percentMaybeStringOrNumber;
  if (Number.isNaN(num)) return 0;
  return num / 100;
}

export async function GET(req) {
  if (!assertCronAuth(req)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureDb();
    const now = new Date();

    // Active investments only
    const investments = await Investment.find({ status: "active" }).lean();

    let totalCredited = 0;
    let touched = 0;

    for (const inv of investments) {
      // Use approvedAt as the start of profit counting
      const start = inv.lastAccruedAt ? new Date(inv.lastAccruedAt) : new Date(inv.approvedAt);
      const days = wholeDaysSince(start, now);
      if (days <= 0) continue;

      // Load the current plan (in case you need fallback rate)
      const plan = await PlanModel.findById(inv.planId).lean();
      if (!plan) continue;

      // Determine the daily rate (freeze at purchase if available)
      const dailyRate = getDailyRate(inv.percentAtPurchase ?? plan.percent);
      if (dailyRate <= 0) continue;

      // Simple interest for N elapsed whole days
      const profitDeltaRaw = inv.principal * dailyRate * days;
      const profitDelta = Math.round(profitDeltaRaw * 100) / 100; // 2 dp
      if (profitDelta <= 0) continue;

      // Update investment + wallet atomically per user using a session
      const session = await mongoose.startSession();
      try {
        session.startTransaction();

        await Investment.updateOne(
          { _id: inv._id },
          {
            $inc: { accruedProfit: profitDelta },
            $set: { lastAccruedAt: now }
          },
          { session }
        );

        await Wallet.updateOne(
          { user_id: inv.userId },
          {
            $inc: {
              profits: profitDelta,
              totalBalance: profitDelta
            },
            $set: { lastUpdated: now }
          },
          { session }
        );

        // Optional transaction record
        await TransactionModel.create(
          [
            {
              user_id: inv.userId,
              user_email: "", // fill if you store email elsewhere; otherwise consider removing from schema requirement
              user_name: "",  // same note as above
              transactionType: "profit-accrual",
              amount: profitDelta,
              walletAddress: "",  // if you store on wallet, you can populate first
              paymentMethod: "wallet",
              status: "received",
              plan: plan?.plan || undefined
            }
          ],
          { session }
        );

        await session.commitTransaction();
        session.endSession();

        totalCredited += profitDelta;
        touched += 1;
      } catch (e) {
        await session.abortTransaction();
        session.endSession();
        // Log and continue with other investments
        console.error("Accrual error for investment", String(inv._id), e);
      }
    }

    return NextResponse.json({ ok: true, touched, totalCredited });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: err?.message ?? "Unknown error" }, { status: 500 });
  }
}
