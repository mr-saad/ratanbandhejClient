"use server"

import { revalidatePath } from "next/cache"
import { mutate, query } from "../server/sanity"

export default async function editFormAction({ _id, username, address }) {
  try {
    const q = `*[_type=="user" && _id==$userId][0]`
    const res = await query(q, { userId: _id })
    if (res) {
      const res2 = await mutate([
        {
          patch: {
            id: _id,
            set: {
              username,
              address,
            },
          },
        },
      ])
      if (res2?.transactionId) {
        revalidatePath("/profile")
        return { message: "", ok: true }
      }
      return {
        message: res.error,
        ok: false,
      }
    }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
