import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const withdrawalSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    walletAddress: { type: String },
    paymentMethod: { type: String },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Withdrawal =
  models.Withdrawal || model("Withdrawal", withdrawalSchema);
