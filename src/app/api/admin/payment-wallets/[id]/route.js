export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { ensureDb } from "@/lib/ensureDb";
import { requireAdmin } from "@/server/auth/requireAdmin";
import PaymentWalletController from "@/server/service/paymentWallet";

export async function PATCH(req, { params }) {
  try {
    await ensureDb();
    requireAdmin(req);
    const body = await req.json();
    const ctrl = new PaymentWalletController();
    const updated = await ctrl.UpdateWallet(params.id, body);
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await ensureDb();
    requireAdmin(req);
    const ctrl = new PaymentWalletController();
    const deleted = await ctrl.DeleteWallet(params.id);
    return NextResponse.json(deleted);
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
