import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // store ONLY hash
    // viewPass: { type: String }, // ❌ avoid storing plaintext passwords
    profileImage: { type: String },
    country: { type: String },
    referredBy: { type: Schema.Types.ObjectId, ref: "User" },
    salt: String,
    otp: { type: String }, // use this for resets/verify
    address: { type: String },
    state: { type: String },
    birthday: { type: String },
    gender: { type: String, enum: ["male", "female"] },
    status: { type: String, enum: ["Pending", "Active"], default: "Pending" },
    purchasedPlans: [{ type: Schema.Types.ObjectId, ref: "Plan" }],
    blocked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.set("toJSON", {
  transform(_doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.password;
    delete ret.salt;
    delete ret.otp;
  },
});

export const User = models.User || model("User", userSchema);
