"use server"

import { cookies } from "next/headers"
import { mutate } from "../sanity"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function removeFromCart(_id) {
  // try {
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
  revalidatePath("/cart")
  revalidatePath("/cart/checkout")
  const cartLength = res.results[0].document.cart.length
  if (!cartLength) return redirect("/cart")
  return { message: "", ok: true }
  // } catch (error) {
  //   console.error(error)
  //   return { message: error.message, ok: false }
  // }
}
