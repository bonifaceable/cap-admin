export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { ensureDb } from "@/lib/ensureDb";
import { requireAdmin } from "@/server/auth/requireAdmin";
import PaymentWalletController from "@/server/service/paymentWallet";

export async function GET() {
  try {
    await ensureDb();
    const ctrl = new PaymentWalletController();
    const wallets = await ctrl.GetPaymentWallets();
    return NextResponse.json(wallets);
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

export async function POST(req) {
  try {
    await ensureDb();
    // const admin = requireAdmin(req);
    const body = await req.json();
    const ctrl = new PaymentWalletController();
    const created = await ctrl.CreateWallet({ ...body });
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
