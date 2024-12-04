"use server"

import { cookies } from "next/headers"
import { mutate } from "../sanity"

export default async function removeFromCart(_id) {
  try {
    const userId = (await cookies()).get("userId").value
    if (!userId) return { message: "Unauthorized", ok: false }
    const res = await mutate([
      {
        patch: {
          id: userId,
          unset: [`cart[_ref=="${_id}"]`],
        },
      },
    ])
    if (res?.transactionId) return { message: "Success", ok: true }
    return { message: JSON.stringify(res), ok: false }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
