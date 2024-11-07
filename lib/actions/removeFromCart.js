"use server"

import { mutate } from "../sanity"

export default async function removeFromCart(userId, _id) {
  try {
    await mutate([
      {
        patch: {
          id: userId,
          unset: [`cart[_ref=="${_id}"]`],
        },
      },
    ])
    return { message: "", ok: true }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
