"use server"

import { cookies } from "next/headers"
import sanity from "../server/sanity"
import { jwtVerify } from "jose"

export default async function removeFromCart(_id) {
  try {
    const token = (await cookies()).get("ratanUser").value
    if (!token) return { message: "UnAuthorized", ok: false }
    const encoder = new TextEncoder()
    const ver = await jwtVerify(token, encoder.encode(process.env.tokenKey))
    if (ver) {
      const res = await sanity
        .patch(ver.payload?.userId)
        .unset([`cart[_ref=="${_id}"]`])
        .commit()
      if (res?._id) return { message: "Success", ok: true }
    }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
