import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const PlanSchema = new Schema(
  {
    plan: { type: String, required: true, unique: true },
    amount: { type: Number, required: true }, // consider removing `unique` if multiple plans can share the same amount
    max: { type: Number, required: true }, // same note as above
    terms: { type: String, required: true },
    percent: { type: String, required: true },
    investmentReturn: { type: Number },
    date: { type: Date, default: Date.now },
    walletAddress: { type: String },
    status: { type: String, default: "approved" },
    benefits: { type: [String] },
  },
  { timestamps: true }
);

export const PlanModel = models.Plan || model("Plan", PlanSchema);
