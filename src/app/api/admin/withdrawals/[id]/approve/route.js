import { ensureDb } from "@/lib/ensureDb";
import WithdrawalController from "@/server/service/withdrawal";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    await ensureDb();
    // const { withdrawalId } = await req.json();
    const withdrawalId = params.id;
    console.log(withdrawalId, "before controller");
    const controller = new WithdrawalController();

    const result = await controller.ApproveWithdrawal({ withdrawalId });
    return NextResponse.json(
      { message: "Withdrawal approved", result },
      { status: 200 }
    );
  } catch (e) {
    console.log(e, "message");
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
