"use server"
import { cookies } from "next/headers"
import { query } from "./sanity"

export default async function isAuthenticated() {
  const userId = (await cookies()).get("userId")?.value
  const registeredAcc = (await cookies()).get("registeredAcc")?.value

  if (userId) {
    const q = `*[_type=="user"&&_id==$userId][0]`
    const res = await query(q, { userId })
    if (res)
      return {
        status: true,
        verified: true,
        _id: res._id,
        username: res.username,
        email: res.email,
      }
  } else {
    if (registeredAcc) {
      const q = `*[_type=="user"&&_id==$userId][0]`
      const res = await query(q, { userId })
      if (res) {
        if (res?.verified) {
          return {
            status: false,
            verified: true,
            _id: res._id,
            username: res.username,
            email: res.email,
          }
        } else {
          return { status: false, verified: false, email: res?.email }
        }
      } else {
        return { status: false, verified: false, noAcc: true }
      }
    }
    return { status: false, verified: false, noAcc: true }
  }
}
