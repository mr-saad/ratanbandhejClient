"use server"

import { revalidatePath } from "next/cache"
import sanity from "../server/sanity"

export default async function cancelOrder(_id = "") {
  try {
    const res = await sanity
      .patch(_id)
      .set({
        status: "Cancelled",
      })
      .commit()

    if (res) {
      revalidatePath("/orders")
      return { message: "Order Cancelled", ok: true }
    }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
