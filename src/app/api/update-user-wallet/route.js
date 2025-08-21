import { requireAdmin } from "@/server/api-helpers/adminAuth";
import TransactionService from "@/server/service/transaction";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PATCH(req) {
  try {
    // requireAdmin(req.headers);
    const body = await req.json();
    const tx = new TransactionService();
    const data = await tx.UpdateUserWallet(body);
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e.message },
      { status: e.status || e.statusCode || 500 }
    );
  }
}
