"use server"

import { revalidatePath } from "next/cache"
import client from "../sanity"

export default async function editFormAction({
  _id,
  username,
  email,
  address,
}) {
  try {
    const res = await client.fetch(`*[_type=="user" && _id==$_id][0]`, { _id })
    if (res) {
      await client.patch(_id).set({ username, email, address }).commit()
      revalidatePath("/account")
      return { message: "", ok: true }
    }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
