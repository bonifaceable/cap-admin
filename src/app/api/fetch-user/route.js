import { requireAuth } from "@/server/api-helpers/auth";
import AuthController from "@/server/service";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const user = requireAuth(req.headers);
    const auth = new AuthController();
    const { data } = await auth.GetProfile({ id: user._id });
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e.message || "Failed" },
      { status: e.status || e.statusCode || 500 }
    );
  }
}
