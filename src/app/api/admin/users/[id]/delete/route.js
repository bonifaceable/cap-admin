// app/api/admin/users/[id]/block/route.js
import { NextResponse } from "next/server";
import AuthController from "@/server/service/index";
import { ensureDb } from "@/lib/ensureDb";

export const dynamic = "force-dynamic";

export async function PATCH(req, { params }) {
  const { id } = params;
  // const { reason } = await req.json();
  console.log("Deleting user with id:", id);

  await ensureDb();
  const authService = new AuthController();

  try {
    const data = await authService.DeleteUserAccount(id);
    return NextResponse.json(
      { message: "User Deleted", data },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: err?.message || "Failed" },
      { status: 500 }
    );
  }
}
