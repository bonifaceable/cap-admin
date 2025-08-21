import PlanService from "@/server/service/plan.service";
import { NextResponse } from "next/server";
// import PlanService from '@/server/services/plan.service'

const service = new PlanService();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") || undefined;
    // const data = await service.List({ status });
    const data = await service.List();
    console.log(data, "data plans");
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
