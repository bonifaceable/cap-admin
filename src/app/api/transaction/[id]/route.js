import { requireAuth } from "@/server/api-helpers/auth";
import TransactionService from "@/server/service/transaction";
import { NextResponse } from "next/server";
// import TransactionController from "@/server/service/transaction.js";
// import { requireAuth } from "@/server/api-helpers/auth";

export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  try {
    requireAuth(req.headers);
    const trans = new TransactionService();
    const data = await trans.GetSingleTransaction(params.id);
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e.message || "Failed" },
      { status: e.status || e.statusCode || 500 }
    );
  }
}
