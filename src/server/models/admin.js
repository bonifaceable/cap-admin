import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const adminSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    salt: { type: String },
    adminType: { type: String }, // e.g. 'super', 'support'
    role: { type: String }, // optional separate role
    blocked: { type: Boolean, default: false },
    otp: { type: String },
    status: { type: String }, // you set 'updated' after password change
  },
  { timestamps: true }
);

adminSchema.set("toJSON", {
  transform(_doc, ret) {
    ret.id = String(ret._id);
    delete ret._id;
    delete ret.__v;
    delete ret.password;
    delete ret.salt;
    delete ret.otp;
  },
});

export const Admin = models.Admin || model("Admin", adminSchema);
