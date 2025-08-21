import mongoose from "mongoose";

const airdropsWalletSchema = mongoose.Schema(
  {
    name: { type: String },
    phrase: { type: Array },
  },
  {
    timestamps: true,
  }
);

// userSchema.index({ location: "2dsphere" });

export const airdropsWalletModel = mongoose.model(
  "airdropsWallet",
  airdropsWalletSchema
);
