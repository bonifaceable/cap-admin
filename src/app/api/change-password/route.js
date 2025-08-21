import { requireAuth } from "@/server/api-helpers/auth";
import AuthController from "@/server/service";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { password } = await req.json();
    const user = requireAuth(req.headers);
    const auth = new AuthController();
    await auth.ChangePassword(user._id, password);
    return NextResponse.json(
      { message: "password updated successfully" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: e.message || "Failed" },
      { status: e.status || e.statusCode || 500 }
    );
  }
}
