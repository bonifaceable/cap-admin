let ready = false;
export async function ensureDb() {
  if (ready) return;
  const { connect_db } = await import("@/server/dba/connection"); // your existing connect_db
  await connect_db();
  ready = true;
}
