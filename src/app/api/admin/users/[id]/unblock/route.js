// app/api/admin/users/[id]/unblock/route.js
import { NextResponse } from "next/server";
import AuthController from "@/server/service/index";
import { ensureDb } from "@/lib/ensureDb";

export const dynamic = "force-dynamic";

export async function PATCH(req, { params }) {
  //   const gate = await requireAdmin(req);
  //   if (!gate.ok) {
  //     return NextResponse.json({ message: gate.message }, { status: gate.status });
  //   }

  const { id } = params;

  await ensureDb();
  const authService = new AuthController();

  try {
    const { data } = await authService.AdminUnblockUser({ userId: id });
    return NextResponse.json(
      { message: "User unblocked", data },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: err?.message || "Failed" },
      { status: 500 }
    );
  }
}
