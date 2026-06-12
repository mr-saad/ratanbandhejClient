"use server"

import { revalidatePath } from "next/cache"
import { mutate } from "../server/sanity"

export default async function cancelOrder(_id) {
  try {
    const res = await mutate([
      {
        patch: {
          id: _id,
          set: {
            status: "Cancelled",
          },
        },
      },
    ])
    if (res?.transactionId) {
      revalidatePath("/orders")
      return { message: "", ok: true }
    } else {
      return { message: res.error.description, ok: false }
    }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
