import { requireAdmin } from "@/server/auth/requireAdmin";
import TransactionService from "@/server/service/transaction";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  try {
    requireAdmin(req.headers);
    const tx = new TransactionService();
    const data = await tx.GetSingleTransaction(params.id);
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e.message },
      { status: e.status || e.statusCode || 500 }
    );
  }
}
