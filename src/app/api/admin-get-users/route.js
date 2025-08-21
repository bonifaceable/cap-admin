import AuthController from "@/server/service";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const auth = new AuthController();
    const users = await auth.GetUsers();
    return NextResponse.json(users, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e.message },
      { status: e.statusCode || 500 }
    );
  }
}
