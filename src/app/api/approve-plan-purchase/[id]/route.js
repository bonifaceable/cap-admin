import { requireAdmin } from "@/server/api-helpers/adminAuth";
import TransactionService from "@/server/service/transaction";
import { NextResponse } from "next/server";
// import TransactionController from "@/server/service/transaction.js";
// import { requireAdmin } from "@/server/api-helpers/adminAuth";

export const dynamic = "force-dynamic";

export async function PATCH(req, { params }) {
  try {
    requireAdmin(req.headers);
    const { status } = await req.json();
    const tx = new TransactionService();
    await tx.UpdatePlanPurchase({ transactionId: params.id, status });
    return NextResponse.json(
      { msg: `Plan updated to ${status}` },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: e.message },
      { status: e.status || e.statusCode || 500 }
    );
  }
}
