// src/server/dba/connection.js
import mongoose from 'mongoose'
const MONGODB_URI = process.env.MONGODB_URI
if (!MONGODB_URI) throw new Error('MONGODB_URI missing')

let cached = global._mongoose || (global._mongoose = { conn: null, promise: null })

export async function connect_db() {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then(m => m)
  }
  cached.conn = await cached.promise
  return cached.conn
}

// src/lib/ensureDb.js
let ready = false
export async function ensureDb() {
  if (ready) return
  const { connect_db } = await import('@/server/dba/connection')
  await connect_db()
  ready = true
}
