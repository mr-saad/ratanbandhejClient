"use server"

import { cookies } from "next/headers"
import { mutate } from "../sanity"
import { redirect } from "next/navigation"
import { jwtVerify } from "jose"

export default async function addToCart(_id) {
  try {
    const token = (await cookies()).get("ratanUser").value
    if (!token) return redirect("/sign-in")
    const encoder = new TextEncoder()
    const ver = await jwtVerify(token, encoder.encode(process.env.tokenKey))
    if (ver) {
      const res = await mutate([
        {
          patch: {
            id: ver.payload.userId,
            setIfMissing: { cart: [] },
            insert: {
              after: "cart[-1]",
              items: [
                {
                  _type: "product",
                  _ref: _id,
                },
              ],
            },
          },
        },
      ])
      if (res?.transactionId) return { message: "Success", ok: true }
      return { message: JSON.stringify(res), ok: false }
    }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
