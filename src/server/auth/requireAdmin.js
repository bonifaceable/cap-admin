import jwt from 'jsonwebtoken'

export function requireAdmin(req) {
  const header = req.headers.get('authorization') || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null
  if (!token) throw new Error('Unauthorized')

  // Your admin tokens should be signed with ADMIN_APP_SECRET
  const decoded = jwt.verify(token, process.env.ADMIN_APP_SECRET)
  // Optionally enforce a claim, e.g. decoded.role === 'admin'
  return decoded
}
