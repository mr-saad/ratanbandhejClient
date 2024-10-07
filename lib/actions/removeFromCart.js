"use server"

import client from "../sanity"

export default async function removeFromCart(userId, _id) {
  try {
    const res = await client
      .patch(userId)
      .unset([`cart[_ref=="${_id}"]`])
      .commit()
    if (res._id) {
      const cart = await client.fetch(
        `*[_type=="product" && _id in *[_type=="user" && _id==$_id].cart[]._ref]{
          _id,
          title,
          type,
          price,
          colours,
          "slug":slug.current,
          "images":images[].asset->{url,metadata{lqip}}
      }`,
        { _id: userId },
      )
      return { message: "", ok: true, cart }
    } else return { message: "Unknown Error", ok: false }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
