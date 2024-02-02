"use server"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { getXataClient } from "./xata"

const xata = getXataClient()

export default async function orderAction(formData) {
  cookies().set("userId", formData.get("userId"), {
    secure: true,
    expires: Date.now() + 60 * 60 * 24 * 1000 * 365,
  })

  await xata.db.Orders.create({
    UserId: formData.get("userId"),
    Username: formData.get("username"),
    "E-Mail": formData.get("email"),
    Phone: formData.get("phone"),
    Address: formData.get("address"),
    Color: formData.get("color"),
    ProductName: formData.get("productName"),
    ProductId: formData.get("productId"),
    ProductPrice: formData.get("productPrice"),
  })
  redirect("/orders")
}
