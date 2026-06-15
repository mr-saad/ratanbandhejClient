"use server"

import { revalidatePath } from "next/cache"
import sanity from "../server/sanity"

export default async function editFormAction({ _id, username, address }) {
  try {
    const q = `*[_type=="user" && _id==$userId][0]`
    const res = await sanity.fetch(q, { userId: _id })
    if (res) {
      const res2 = await sanity
        .patch(_id)
        .set({
          username,
          address,
        })
        .commit()
      if (res2?._id) {
        revalidatePath("/profile")
        return { message: "Info Edited", ok: true }
      }
    }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
