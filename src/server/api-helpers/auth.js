import jwt from "jsonwebtoken";

export function requireAuth(headers) {
  const auth = headers.get("authorization") || headers.get("Authorization");
  if (!auth?.startsWith("Bearer ")) {
    const err = new Error("Unauthorized");
    err.status = 401;
    throw err;
  }
  const token = auth.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.APP_SECRET);
    return payload; // {_id, email}
  } catch {
    const err = new Error("Unauthorized");
    err.status = 401;
    throw err;
  }
}
