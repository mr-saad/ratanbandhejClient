"use server"

import { mutate, query } from "../sanity"

export default async function addToCart(userId, _id) {
  try {
    await mutate([
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
    return { message: "", ok: true }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
