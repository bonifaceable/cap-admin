// src/server/utils/streamUpload.js
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "node:stream";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export function streamUpload(buffer, options = {}) {
  return new Promise((resolve, reject) => {
    const up = cloudinary.uploader.upload_stream(options, (err, res) => {
      if (err) return reject(err);
      resolve({ url: res.secure_url, public_id: res.public_id });
    });
    Readable.from(buffer).pipe(up);
  });
}

// app/api/update-profilePics/[id]/route.js
export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { ensureDb } from "@/lib/ensureDb";
import AuthService from "@/server/service/index";
import { streamUpload } from "@/server/utils/streamUpload";

export async function PATCH(req, { params }) {
  await ensureDb();
  const form = await req.formData();
  const file = form.get("image");
  if (!file || typeof file === "string")
    return NextResponse.json({ message: "No file" }, { status: 400 });
  const buffer = Buffer.from(await file.arrayBuffer());
  const { url } = await streamUpload(buffer, { folder: "profile" });
  const auth = new AuthService();
  await auth.UpdateProfilePics({ userId: params.id, profileImage: url });
  return NextResponse.json({ ok: true });
}
