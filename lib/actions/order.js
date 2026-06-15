"use server"
import { Resend } from "resend"
import sanity from "../server/sanity"
const resend = new Resend(process.env.resend_apiKey)
import { orderSchema } from "../zodSchemas/orderSchema"
import { cookies } from "next/headers"
import { jwtVerify } from "jose"

export default async function orderAction(obj) {
  const { data, error } = orderSchema.safeParse(obj)
  if (error) {
    console.error(error)
    return { message: JSON.stringify(error.issues), ok: false }
  }
  try {
    const token = (await cookies()).get("ratanUser").value
    if (!token) return { message: "UnAuthorized", ok: false }
    const encoder = new TextEncoder()
    const ver = await jwtVerify(token, encoder.encode(process.env.tokenKey))
    if (ver) {
      const userId = ver.payload.userId
      const q = `*[_type=="user" && _id==$userId][0]{username,address}`
      const user = await sanity.fetch(q, { userId })

      const reqs = data.colours.map(({ _id, colours }) => {
        return sanity.create({
          _type: "order",
          username: user.username,
          user: {
            _ref: userId,
          },
          status: "Processing",
          address:
            data.formData.existing === "on"
              ? user.address
              : data.formData.address,
          colours,
          note: data.formData.note,
          product: {
            _ref: _id,
          },
        })
      })
      reqs.push(sanity.patch(userId).set({ cart: [] }))

      await Promise.all(reqs)

      const { error } = await resend.emails.send({
        from: `Saad Khatri (Ratan Bandhej) <onboarding@resend.dev>`,
        subject: `New Order From ${user.username}`,
        to: process.env.email,
        text: `Order from ${user.username}`,
        html: `<p>Order from ${user.username}</p>`,
      })
      if (error) {
        console.error(error)
        return { message: error.message, ok: false }
      }
      return { message: "Order Placed!", ok: true }
    }
    return { message: "UnAuthorized", ok: false }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
