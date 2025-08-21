import { requireAuth } from "@/server/api-helpers/auth";
import AuthController from "@/server/service";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PATCH(req) {
  try {
    const user = requireAuth(req.headers);
    const payload = await req.json();
    const auth = new AuthController();
    await auth.UpdateUserProfile({ ...payload, userId: user._id });
    return NextResponse.json(
      { msg: "updated profile successfully updated" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: e.message || "Failed" },
      { status: e.status || e.statusCode || 500 }
    );
  }
}
