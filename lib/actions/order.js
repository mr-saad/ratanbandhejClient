"use server"
import sanity from "@/lib/sanity"
// import { Resend } from "resend"
// const resend = new Resend(process.env.resend_apiKey)

export default async function orderAction(items, userId, formData, colours) {
  try {
    // const ids = await sanity.fetch(`*[_type=="order"]{_id}`)
    // ids.forEach(async (id) => await sanity.delete(id._id))

    const user = await sanity.fetch(`*[_type=="user" && _id==$userId][0]`, {
      userId,
    })
    const reqs = items.map(async ({ _id }) => {
      sanity.create(
        {
          _type: "order",
          user: {
            _ref: userId,
          },
          address:
            formData.get("existing") === "on"
              ? user.address
              : formData.get("address"),
          colours,
          product: {
            _ref: _id,
          },
        },
        { autoGenerateArrayKeys: true },
      )
    })
    const res = await Promise.all(reqs)

    // let html = ""
    // JSON.stringify(newOrder)
    //   .replace(/{/g, "")
    //   .replace(/}/g, "")
    //   .replace(/"/g, "")
    //   .replace(/:/g, ": ")
    //   .split(",")
    //   .forEach(
    //     (str) => (html += `<p style="text-transform:capitalize;">${str}</p>`),
    //   )
    // const { error } = await resend.emails.send({
    //   from: `Saad Khatri (Ratan Bandhej) <saadkhatri@resend.dev>`,
    //   subject: `New Order From ${newOrder.username}`,
    //   to: process.env.email,
    //   html,
    // })
    // if (error) {
    //   console.error(error)
    //   return { message: error.message, ok: false }
    // }
    return { message: "Order Placed!", ok: true }
  } catch (error) {
    console.error(error)
    return { message: error.message, ok: false }
  }
}
