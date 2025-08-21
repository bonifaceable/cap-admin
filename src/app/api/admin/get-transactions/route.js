export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { ensureDb } from "@/lib/ensureDb";
import { requireAdmin } from "@/server/auth/requireAdmin";
import AdminController from "@/server/service/admin-services";
import WalletController from "@/server/service/wallet";
import TransactionService from "@/server/service/transaction";
// import AdminController from '@/server/controllers/admin.controller'

export async function GET(req) {
  try {
    await ensureDb();
    const me = requireAdmin(req);
    const tx = new TransactionService();
    const data = await tx.AdminGetAllTransactions();
    console.log(data, "data");
    return NextResponse.json(data);
  } catch (err) {
    const code = err.message === "Unauthorized" ? 401 : 400;
    return NextResponse.json({ message: err.message }, { status: code });
  }
}
