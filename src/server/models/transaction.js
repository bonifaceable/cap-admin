import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const TransactionSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
      index: true,
      required: true,
    },
    user_email: { type: String, required: true, index: true },
    user_name: { type: String, required: true },
    transactionType: { type: String, required: true, index: true }, // fund-deposit, plan-purchase, etc.
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    walletAddress: { type: String, required: true },
    paymentMethod: { type: String, required: true }, // wallet | crypto | card
    status: {
      type: String,
      enum: ["pending", "received", "failed"],
      default: "pending",
      index: true,
    },
    plan: { type: String },
  },
  { timestamps: true }
);

TransactionSchema.index({ user_id: 1, status: 1, createdAt: -1 });

export const TransactionModel =
  models.Transaction || model("Transaction", TransactionSchema);
