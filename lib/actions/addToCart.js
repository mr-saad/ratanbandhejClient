"use server"

import { cookies } from "next/headers"
import { mutate } from "../sanity"
import { redirect } from "next/navigation"

export default async function addToCart(_id) {
  try {
    const userId = (await cookies()).get("userId").value
    if (!userId) return redirect("/sign-in")
    await mutate([
      {
        patch: {
          id: userId,
          setIfMissing: { cart: [] },
          insert: {
            after: "cart[-1]",
            items: [
              {
                _type: "product",
                _ref: _id,
                _key: Date.now().toString(),
              },
            ],
          },
        },
      },
    ])
    return { message: "", ok: true }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
