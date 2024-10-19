"use server"

import { revalidatePath } from "next/cache"
import client from "../sanity"

export default async function cancelOrder(_id) {
  try {
    const res = await client.delete(_id)
    if (res.results.length) {
      revalidatePath("/orders")
      return { message: "", ok: true }
    } else {
      return { message: "Unknown Error", ok: false }
    }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
