import { NextResponse } from "next/server";
// import WalletController from "@/server/service/wallet.js";
// import { requireAuth } from "@/server/api-helpers/auth";
import { configs } from "@/server/config";
import { requireAuth } from "@/server/api-helpers/auth";
import WalletController from "@/server/service/wallet";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    const user = requireAuth(req.headers);
    const wallet = new WalletController();
    const data = await wallet.GetWallet({ user_id: user._id });
    const referralLink = `${configs.FRONTEND_URL}sign-up?ref=${data?.data.referralCode}`;
    return NextResponse.json(referralLink, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e.message || "Failed" },
      { status: e.status || e.statusCode || 500 }
    );
  }
}
