import jwt from "jsonwebtoken";

export function requireAdmin(headers) {
  const auth = headers.get("authorization") || headers.get("Authorization");
  if (!auth?.startsWith("Bearer ")) {
    const err = new Error("Unauthorized");
    err.status = 401;
    throw err;
  }
  const token = auth.split(" ")[1];
  try {
    // Must match your GenerateAdminSignature()
    const payload = jwt.verify(token, process.env.ADMIN_SECRET);
    return payload; // {_id, email}
  } catch {
    const err = new Error("Unauthorized");
    err.status = 401;
    throw err;
  }
}
