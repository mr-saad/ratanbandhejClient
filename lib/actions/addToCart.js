"use server"

import { mutate, query } from "../sanity"

export default async function addToCart(userId, _id) {
  try {
    const res = await mutate([
      {
        patch: {
          id: userId,
          setIfMissing: { cart: [] },
          insert: {
            after: "cart[-1]",
            items: [
              {
                _type: "product",
                _ref: _id,
                _key: Date.now().toString(),
              },
            ],
          },
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
          "images":images[].asset->{path,metadata{lqip}}
          }`
      const cart = await query(q, { userId })
      return { message: "", ok: true, cart }
    } else return { message: "Unknown Error", ok: false }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
