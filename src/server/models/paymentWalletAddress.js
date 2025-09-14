import mongoose from "mongoose";

const PaymentWalletAddressSchema = new mongoose.Schema(
  {
    label: { type: String, required: true }, 
    walletAddress: { type: String, required: true },
    qrCode: { type: String }, // optional QR code URL
    isActive: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// PaymentWalletAddressSchema.index({ currency: 1, network: 1 }, { unique: true });

// export const PaymentWalletAddress =
//   mongoose.models.PaymentWalletAddress ||
//   mongoose.model("PaymentWalletAddress", PaymentWalletAddressSchema);
export const PaymentWalletAddress =
  mongoose.models.PaymentWalletAddress ||
  mongoose.model("PaymentWalletAddress", PaymentWalletAddressSchema);
