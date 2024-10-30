"use server"
import { Resend } from "resend"
import { mutate, query } from "../sanity"
const resend = new Resend(process.env.resend_apiKey)
import { orderSchema } from "../zodSchemas/orderSchema"

export default async function orderAction(obj) {
  const { data, error } = orderSchema.safeParse(obj)
  if (error) {
    console.error(error)
    return { message: JSON.stringify(error.issues), ok: false }
  }
  try {
    const q = `*[_type=="user" && _id==$userId][0]{username,address}`
    const user = await query(q, { userId: data.userId })
    const reqs = data.colours.map(({ _id, colours }) => {
      // const processedColours = colours.filter((item) => item._id === _id)[0]
      //   .colours
      colours.forEach((clr) => {
        clr["_key"] = Date.now().toString()
      })

      return mutate([
        {
          create: {
            _type: "order",
            username: user.username,
            user: {
              _ref: data.userId,
            },
            address:
              data.formData.existing === "on"
                ? user.address
                : data.formData.address,
            colours,
            note: data.formData.note,
            product: {
              _ref: _id,
            },
          },
        },
      ])
    })
    reqs.push(
      mutate([
        {
          patch: {
            id: data.userId,
            set: { cart: [] },
          },
        },
      ]),
    )
    await Promise.all(reqs)

    const { error } = await resend.emails.send({
      from: `Saad Khatri (Ratan Bandhej) <saadkhatri@ratanbandhej.shop>`,
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
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
