"use server"

import { mutate, query } from "../sanity"

export default async function removeFromCart(userId, _id) {
  try {
    const res = await mutate([
      {
        patch: {
          id: userId,
          unset: [`cart[_ref=="${_id}"]`],
        },
      },
    ])
    if (res?.transactionId) {
      const q = `*[_type=="product" && _id in *[_type=="user" && _id==$userId].cart[]._ref]{
          _id,
          title,
          type,
          price,
          colours,
          "slug":slug.current,
          "images":images[].asset->{url,metadata{lqip}}
          }`
      const cart = await query(q, { userId })
      return { message: "", ok: true, cart }
    } else return { message: "Unknown Error", ok: false }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
