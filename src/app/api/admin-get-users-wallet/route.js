import { NextResponse } from "next/server";
import WalletController from "@/server/service/wallet";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const wallet = new WalletController();
    const data = await wallet.GetUsersWallet();
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e.message },
      { status: e.statusCode || 500 }
    );
  }
}
