// app/api/admin/users/[id]/status/route.js
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
  const body = await req.json();
  const { status } = body || {};

  const allowed = ["verified", "Active", "Pending", "unverified"];
  if (!allowed.includes(status)) {
    return NextResponse.json({ message: "Invalid status" }, { status: 400 });
  }

  await ensureDb();
  const authService = new AuthController();

  try {
    const { data } = await authService.AdminUpdateUserStatus({
      userId: id,
      status,
    });
    return NextResponse.json(
      { message: `User status set to ${status}`, data },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: err?.message || "Failed" },
      { status: 500 }
    );
  }
}
