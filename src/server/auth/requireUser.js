import jwt from "jsonwebtoken";

export function requireUser(req) {
  const header = req.headers.get("authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) throw new Error("Unauthorized");
  return jwt.verify(token, process.env.APP_SECRET);
}
