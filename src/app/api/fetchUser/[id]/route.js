import AuthController from "@/server/service";
import { NextResponse } from "next/server";
// import AuthController from "@/server/service/index.js";
// import { requireAuth } from "@/server/api-helpers/auth";

export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  try {
    requireAuth(req.headers);
    const auth = new AuthController();
    const { data } = await auth.GetProfile({ id: params.id });
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e.message || "Failed" }, { status: e.status || e.statusCode || 500 });
  }
}
