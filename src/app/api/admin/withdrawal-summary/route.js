export const dynamic = "force-dynamic";

import { ensureDb } from "@/lib/ensureDb";
import WithdrawalController from "@/server/service/withdrawal";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ensureDb();
    const controller = new WithdrawalController();
    const data = await controller.GetAllUsersWithdrawalsSummary();
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
