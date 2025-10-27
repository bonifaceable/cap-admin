import { requireAdmin } from "@/server/auth/requireAdmin";
import TransactionService from "@/server/service/transaction";
import { NextResponse } from "next/server";
import { ensureDb } from "@/lib/ensureDb";

export const dynamic = "force-dynamic";

export async function PATCH(req, { params }) {
  try {
    await ensureDb();
    // requireAdmin(req.headers);
    const { status } = await req.json();
    const tx = new TransactionService();
    await tx.UpdateTransactionStatus({ transactionId: params.id, status });
    return NextResponse.json(
      { msg: `Transaction updated to ${status}` },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: e.message },
      { status: e.status || e.statusCode || 500 }
    );
  }
}
