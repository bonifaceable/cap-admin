// src/app/api/create-offline-transaction/route.js
import { requireAdmin } from "@/server/api-helpers/adminAuth";
import TransactionService from "@/server/service/transaction";
import { NextResponse } from "next/server";
// import TransactionController from "@/server/service/transaction.js";
// import { requireAdmin } from "@/server/api-helpers/adminAuth";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    // Ensure the caller is an admin (checks ADMIN_SECRET signed token)
    // requireAdmin(req.headers);

    const body = await req.json();
    const {
      user_id,
      transactionType, // 'fund-deposit' | 'plan-purchase'
      amount,
      walletAddress = "",
      paymentMethod,
      status = "received", // 'pending' | 'received'
      plan, // if plan purchase
    } = body;

    if (!user_id || !transactionType || !amount) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const tx = new TransactionService();
    const result = await tx.AdminCreateTransaction({
      user_id,
      transactionType,
      amount: Number(amount),
      walletAddress,
      paymentMethod,
      status,
      plan,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e.message },
      { status: e.status || e.statusCode || 500 }
    );
  }
}
