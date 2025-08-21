import AuthController from "@/server/service";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const auth = new AuthController();
    const { data } = await auth.Login(body);
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e.message || "Failed" },
      { status: e.statusCode || 500 }
    );
  }
}
