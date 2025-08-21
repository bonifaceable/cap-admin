import PlanService from "@/server/service/plan.service";
import { NextResponse } from "next/server";
// import PlanService from "@/server/services/plan.service";
// import { requireAdmin } from '@/server/utils/auth'

const service = new PlanService();

export async function POST(req) {
  try {
    // await requireAdmin(req)
    const body = await req.json();
    const created = await service.Create({
      plan: body.plan,
      amount: Number(body.amount),
      max: Number(body.max),
      terms: body.terms,
      percent: Number(body.percent),
      investmentReturn:
        body.investmentReturn !== undefined
          ? Number(body.investmentReturn)
          : undefined,
      walletAddress: body.walletAddress,
      benefits: body.benefits,
    });
    return NextResponse.json(created, { status: 200 });
  } catch (e) {
    const code = e.statusCode || 500;
    return NextResponse.json(
      { message: e.message || "Something went wrong" },
      { status: code }
    );
  }
}
