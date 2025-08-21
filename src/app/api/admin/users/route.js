export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { ensureDb } from "@/lib/ensureDb";
import AuthController from "@/server/service";

export async function GET(req) {
  try {
    await ensureDb();

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") || "all";

    const authService = new AuthController();
    const users = await authService.AdminGetUsersByStatus(status);
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    const code = err.message === "Unauthorized" ? 401 : 400;
    return NextResponse.json({ message: err.message }, { status: code });
  }
}
