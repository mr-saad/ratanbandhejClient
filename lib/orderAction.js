"use server"
import { cookies } from "next/headers"
import sanity from "@/lib/sanity"
import { Resend } from "resend"
const resend = new Resend(process.env.resend_apiKey)

export default async function orderAction(formData) {
  try {
    cookies().set("userId", formData.get("userId"), {
      secure: true,
      expires: new Date(Date.now() + 60 * 60 * 24 * 1000 * 365),
    })
    // const ids = await sanity.fetch(`*[_type=="order"]{_id}`)
    // ids.forEach(async (id) => await sanity.delete(id._id))

    const newOrder = await sanity.create({
      _type: "order",
      userId: formData.get("userId"),
      username: formData.get("username"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      colour: formData.get("color"),
      productName: formData.get("productName"),
      productId: formData.get("productId"),
      price: formData.get("productPrice"),
    })

    let html = ""
    JSON.stringify(newOrder)
      .replace(/{/g, "")
      .replace(/}/g, "")
      .replace(/"/g, "")
      .replace(/:/g, ": ")
      .split(",")
      .forEach(
        (str) => (html += `<p style="text-transform:capitalize;">${str}</p>`),
      )
    const { error } = await resend.emails.send({
      from: `Saad Khatri (Ratan Bandhej) <saadkhatri@resend.dev>`,
      subject: `New Order From ${newOrder.username}`,
      to: process.env.email,
      html,
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
