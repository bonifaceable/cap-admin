export const runtime = 'nodejs'
import { NextResponse } from 'next/server'
import { ensureDb } from '@/lib/ensureDb'
import AdminController from '@/server/service/admin-services'
// import AdminController from '@/server/controllers/admin.controller'

export async function POST(req) {
  try {
    await ensureDb()
    const { email, password } = await req.json()
    const admin = new AdminController()
    const { data } = await admin.Login({ email, password })
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}
