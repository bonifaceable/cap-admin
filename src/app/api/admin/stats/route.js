import StatsService from "@/server/service/stats.service";
import { NextResponse } from "next/server";
// import StatsService from "@/server/services/stats.service";
// import { requireAdmin } from '@/server/utils/auth' // hook this up if you have admin auth

const service = new StatsService();

export async function GET(req) {
  try {
    // await requireAdmin(req)
    const data = await service.getAdminOverview();
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    const status = e.statusCode || 500;
    return NextResponse.json(
      { message: e.message || "Something went wrong" },
      { status }
    );
  }
}
