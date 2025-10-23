// server/models/investment.ts
import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const investmentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    planId: {
      type: Schema.Types.ObjectId,
      ref: "Plan",
      required: true,
      index: true,
    },

    principal: { type: Number, required: true },
    percentAtPurchase: { type: Number, required: true }, // freeze the rate used for accruals
    terms: { type: String },

    approvedAt: { type: Date, required: true }, // when plan got “approved” for this user
    lastAccruedAt: { type: Date }, // accrual checkpoint (idempotency)
    accruedProfit: { type: Number, default: 0 },

    status: {
      type: String,
      enum: ["active", "matured", "cancelled"],
      default: "active",
      index: true,
    },
  },
  { timestamps: true }
);

investmentSchema.index({ status: 1, approvedAt: 1 });

export const Investment =
  models.Investment || model("Investment", investmentSchema);
