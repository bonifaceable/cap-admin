// /server/services/referral.service.js
import mongoose from "mongoose";
import { User } from "@/server/models/user";
import { Wallet } from "@/server/models/wallet";
import { ReferralPayout } from "@/server/models/referralPayout";
import { sendEmail } from "@/server/utils";
import { AlertTemplate } from "@/server/message-template/alert-template";

/**
 * Pay the referrer once on the referred user's first successful credit.
 * - Works for both "deposit" and "plan" sources
 * - 10% of credited amount (from env, defaults to 10)
 * - Credits referrer's bonusBalance
 * - Idempotent via ReferralPayout unique index
 *
 * Call this AFTER you have credited the user's wallet.
 *
 * @param {Object} opts
 * @param {string|ObjectId} opts.userId             // referred user
 * @param {number} opts.amount                      // credited amount
 * @param {"deposit"|"plan"} opts.source            // audit hint
 * @param {import("mongoose").ClientSession?} opts.session
 */
export async function handleFirstDepositReferralPayout({
  userId,
  amount,
  source,
  session = null,
}) {
  const pct = Number(process.env.REFERRAL_BONUS_PCT ?? 10); // 10%
  const cap = Number(process.env.REFERRAL_BONUS_CAP ?? Number.MAX_SAFE_INTEGER);
  const bonusAmount = Math.min((pct / 100) * Number(amount), cap);

  if (!bonusAmount || bonusAmount <= 0) {
    return { ok: false, reason: "bonus_not_configured_or_zero" };
  }

  const useSession = !!session;
  const localSession = useSession ? session : await mongoose.startSession();

  try {
    if (!useSession) localSession.startTransaction();

    // Load referred user with referrer
    const user = await User.findById(userId).session(localSession);
    if (!user) {
      if (!useSession) await localSession.commitTransaction();
      return { ok: false, reason: "referred_user_not_found" };
    }
    if (!user.referredBy) {
      if (!useSession) await localSession.commitTransaction();
      return { ok: true, reason: "no_referrer" };
    }

    // Try to insert audit row; unique index enforces one-time payout.
    // If this insert fails with duplicate key, we already paid.
    let payoutDoc;
    try {
      [payoutDoc] = await ReferralPayout.create(
        [
          {
            referredUserId: user._id,
            referrerUserId: user.referredBy,
            depositAmount: Number(amount),
            bonusAmount,
            source,
          },
        ],
        { session: localSession }
      );
    } catch (e) {
      const dup =
        String(e?.code) === "11000" || /duplicate key/i.test(e?.message || "");
      if (dup) {
        if (!useSession) await localSession.commitTransaction();
        return { ok: true, reason: "already_paid" };
      }
      throw e;
    }

    // Credit referrer bonusBalance
    const referrerWallet = await Wallet.findOne({
      user_id: user.referredBy,
    }).session(localSession);
    if (!referrerWallet) {
      // Roll back audit insert if we cannot pay
      await localSession.abortTransaction();
      return { ok: false, reason: "referrer_wallet_not_found" };
    }

    await Wallet.findOneAndUpdate(
      { user_id: user.referredBy },
      {
        $inc: { bonusBalance: Number(bonusAmount) },
        $set: { lastUpdated: new Date() },
      },
      { new: true, session: localSession }
    );

    // Send email to referrer (non-blocking; do not fail the transaction for mail)
    try {
      const referrer = await User.findById(user.referredBy).session(
        localSession
      );
      if (referrer?.email) {
        const message = AlertTemplate({
          userName: referrer.name,
          transactionType: "Referral Bonus",
          creditAmount: bonusAmount,
        });
        // subject can be anything friendly
        await sendEmail([referrer.email], "Referral Bonus Credited", message);
      }
    } catch (mailErr) {
      // log only
      console.error("Referral email error:", mailErr?.message || mailErr);
    }

    if (!useSession) await localSession.commitTransaction();

    return { ok: true, reason: "paid", bonusAmount, payoutId: payoutDoc?._id };
  } catch (err) {
    if (!useSession) await localSession.abortTransaction();
    console.error("Referral payout error:", err);
    return { ok: false, reason: "exception", error: err?.message };
  } finally {
    if (!useSession) localSession.endSession();
  }
}
