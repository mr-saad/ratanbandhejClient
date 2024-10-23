import isAuthenticated from "@/lib/isAuthenticated"
import BookForm from "@/app/cart/checkout/BookForm"
import { redirect } from "next/navigation"

export const metadata = {
  title: "Checkout",
}

export default async function Checkout() {
  const auth = await isAuthenticated()
  if (!auth.status) redirect("/cart")
  return (
    <div className="Container">
      <h1 className="heading">Confirm Orders</h1>
      <BookForm auth={auth} />
    </div>
  )
}
