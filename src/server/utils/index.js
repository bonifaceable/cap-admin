// Server-only utilities for Next.js API routes

import bcrypt from "bcryptjs";
import crypto from "node:crypto";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";
import { configs } from "@/server/config";

// Pull only what we actually use here
const {
  APP_SECRET,
  ADMIN_APP_SECRET, // standardized name
  CLOUD_NAME,
  API_KEY,
  API_SECRET,
  APP_PASSWORD,
  USER_EMAIL,
  PAYSTACK_SECRET,
  NODE_ENV,
} = configs;

// ---------- Auth helpers ----------
export async function GenerateSalt() {
  return bcrypt.genSalt();
}

export async function HashPassword(password, salt) {
  return bcrypt.hash(password, salt);
}

export async function ValidatePassword(
  enteredPassword,
  savedPassword /*, salt */
) {
  // bcrypt.compare already uses the salt from the hash
  return bcrypt.compare(enteredPassword, savedPassword);
}

export function GenerateSignature(payload) {
  return jwt.sign(payload, APP_SECRET);
}

export function GenerateAdminSignature(payload) {
  console.log(ADMIN_APP_SECRET, payload, "admin secret...");
  return jwt.sign(payload, ADMIN_APP_SECRET);
}

// For Next.js Request object (App Router)
export async function ValidateSignature(req) {
  const header = req.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return null;
  const payload = jwt.verify(token, APP_SECRET);
  return payload;
}

// ---------- Misc helpers ----------
export function CreateVerificationString() {
  return crypto.randomBytes(20).toString("hex");
}

export function GenerateReferralCode(name = "") {
  const payoffWord = "coinex";
  const randomNumber = Math.floor(Math.random() * 10000);
  return `${payoffWord}${randomNumber}${String(name).replace(/\s/g, "")}`.toUpperCase();
}

export function getRandom(length) {
  const base = Math.pow(10, length - 1);
  return Math.floor(base + Math.random() * 9 * base);
}

export async function GenerateOpt() {
  return otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
  });
}

export function FormatData(data) {
  if (data) return { data };
  throw new Error("Data Not found!");
}

// ---------- Email ----------
export async function sendEmail(email, subject, html) {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      secure: true,
      auth: { user: USER_EMAIL, pass: APP_PASSWORD },
    });

    const info = await transporter.sendMail({
      from: "Capital Plus <no-reply@cryp-tech.com>",
      to: email,
      subject,
      html,
      text: "Serving you the best",
    });

    return { ok: true, messageId: info.messageId };
  } catch (err) {
    console.error("sendEmail error:", err);
    return { ok: false, error: err.message };
  }
}

// ---------- Cloudinary (buffer-based; no multer, no fs temp files) ----------
cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

// Upload a Buffer (use with `await req.formData()` in route handlers)
export function streamUpload(buffer, options = {}) {
  return new Promise((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(options, (err, result) => {
      if (err) return reject(err);
      resolve({ url: result.secure_url, public_id: result.public_id });
    });
    // Convert Buffer to readable stream
    import("node:stream")
      .then(({ Readable }) => {
        Readable.from(buffer).pipe(upload);
      })
      .catch(reject);
  });
}

// If you truly still need path-based upload (not recommended in serverless):
// export async function UploadImage(filePath) {
//   const res = await cloudinary.uploader.upload(filePath, { folder: 'chee-products' })
//   return { message: 'success', url: res.secure_url }
// }

// ---------- Paystack (using 'paystack' package you already have) ----------
// import Paystack from "paystack";
// const paystack = new Paystack(PAYSTACK_SECRET); // ignores NODE_ENV; that package autodetects

// amount is in Naira. Paystack expects kobo.
export async function initializePaystackPayment(amountNaira, email) {
  const amountInKobo = Math.round(Number(amountNaira) * 100);
  const response = await paystack.transaction.initialize({
    amount: amountInKobo,
    email,
  });
  return response;
}

export async function verifyPaystackPayment(reference) {
  return paystack.transaction.verify({ reference });
}
