"use server"

import { cookies } from "next/headers"
import sanity from "../server/sanity"
import { redirect } from "next/navigation"
import { jwtVerify } from "jose"

export default async function addToCart(_id) {
  try {
    const token = (await cookies()).get("ratanUser").value
    if (!token) return redirect("/sign-in")
    const encoder = new TextEncoder()
    const ver = await jwtVerify(token, encoder.encode(process.env.tokenKey))
    if (ver) {
      const res = await sanity
        .patch(ver.payload?.userId)
        .setIfMissing({ cart: [] })
        .append("cart", [{ _type: "product", _ref: _id }])
        .commit({ autoGenerateArrayKeys: true })
      if (res._id) return { message: "Success", ok: true }
    }
  } catch (error) {
    console.error(error)
    return { message: error?.message, ok: false }
  }
}
