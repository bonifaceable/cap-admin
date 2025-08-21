import PlanService from "@/server/service/plan.service";
import { NextResponse } from "next/server";

const service = new PlanService();

export async function PATCH(req, { params }) {
  try {
    // await requireAdmin(req)
    const body = await req.json();
    const updated = await service.Update({
      id: params.id,
      plan: body.plan,
      amount: body.amount !== undefined ? Number(body.amount) : undefined,
      max: body.max !== undefined ? Number(body.max) : undefined,
      terms: body.terms,
      percent: body.percent !== undefined ? Number(body.percent) : undefined,
      investmentReturn:
        body.investmentReturn !== undefined
          ? Number(body.investmentReturn)
          : undefined,
      walletAddress: body.walletAddress,
      status: body.status,
      benefits: body.benefits,
    });
    return NextResponse.json(updated, { status: 200 });
  } catch (e) {
    const code = e.statusCode || 500;
    return NextResponse.json(
      { message: e.message || "Something went wrong" },
      { status: code }
    );
  }
}

export async function DELETE(_req, { params }) {
  try {
    // await requireAdmin(_req)
    const deleted = await service.Delete(params.id);
    return NextResponse.json(deleted, { status: 200 });
  } catch (e) {
    const code = e.statusCode || 500;
    return NextResponse.json(
      { message: e.message || "Something went wrong" },
      { status: code }
    );
  }
}
