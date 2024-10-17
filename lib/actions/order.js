"use server"
import sanity from "@/lib/sanity"
import { Resend } from "resend"
const resend = new Resend(process.env.resend_apiKey)

export default async function orderAction(items, userId, formData, colours) {
  try {
    const user = await sanity.fetch(`*[_type=="user" && _id==$userId][0]`, {
      userId,
    })
    const reqs = items.map(({ _id }) => {
      return sanity.create(
        {
          _type: "order",
          username: user.username,
          user: {
            _ref: userId,
          },
          address:
            formData.get("existing") === "on"
              ? user.address
              : formData.get("address"),
          colours: colours.filter((item) => item._id === _id)[0].colours,
          note: formData.get("note"),
          product: {
            _ref: _id,
          },
        },
        { autoGenerateArrayKeys: true },
      )
    })
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
