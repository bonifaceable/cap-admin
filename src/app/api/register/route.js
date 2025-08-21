import AuthController from "@/server/service";
import WalletController from "@/server/service/wallet";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const auth = new AuthController();
    const wallet = new WalletController();

    const { data } = await auth.SignUp(body);

    await wallet.CreateUserWallet({
      user_id: data?.id,
      name: data?.name,
    });

    return NextResponse.json(
      {
        userEmail: data.email,
        message: "An Email sent to your account please verify",
        token: data.token,
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: e.message || "Failed" },
      { status: e.statusCode || 500 }
    );
  }
}
