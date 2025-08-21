import WalletController from "@/server/service/wallet";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(_req, { params }) {
  try {
    const wallet = new WalletController();
    const data = await wallet.GetSingleUsersWallet(params.id);
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e.message },
      { status: e.statusCode || 500 }
    );
  }
}
