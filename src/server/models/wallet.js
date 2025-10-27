import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const walletSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },

    // balances
    pendingBalance: { type: Number, default: 0 },
    balance: { type: Number, default: 0 },
    totalBalance: { type: Number, default: 0 },
    investmentBalance: { type: Number, default: 0 },
    profits: { type: Number, default: 0 },
    bonusBalance: { type: Number, default: 0 },
    pendingWithdrawal: { type: Number, default: 0 },

    // you referenced these in code, so keep them
    walletAddress: { type: String },
    wallet_number: { type: String, unique: true, sparse: true },
    wallet_name: { type: String },
    wallet_type: { type: String },

    referralCode: { type: String, unique: true, sparse: true },

    // tx PIN
    transaction_pin: { type: String },
    salt: { type: String },

    lastUpdated: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

walletSchema.set("toJSON", {
  transform(_doc, ret) {
    ret.id = String(ret._id);
    delete ret._id;
    delete ret.__v;
    delete ret.transaction_pin;
    delete ret.salt;
  },
});

export const Wallet = models.Wallet || model("Wallet", walletSchema);
