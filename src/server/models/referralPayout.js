import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const referralPayoutSchema = new Schema(
  {
    referredUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // one-time per referred user
      index: true,
    },
    referrerUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    depositAmount: { type: Number, required: true },
    bonusAmount: { type: Number, required: true },
    source: { type: String, enum: ["deposit", "plan"], required: true },
    paidAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const ReferralPayout =
  models.ReferralPayout || model("ReferralPayout", referralPayoutSchema);
