import { requireAuth } from "@/server/api-helpers/auth";
import TransactionService from "@/server/service/transaction";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const user = requireAuth(req.headers);
    const body = await req.json();
    const trans = new TransactionService();
    await trans.CreateTransaction({ user_id: user._id, ...body });
    return NextResponse.json(
      { message: "Transaction created" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: e.message || "Failed" },
      { status: e.status || e.statusCode || 500 }
    );
  }
}
