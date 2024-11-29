import { getCart } from "@/lib/getCart"
import BookForm from "./BookForm"

export const metadata = {
  title: "Checkout",
}

export default async function Checkout() {
  const cart = await getCart()
  return (
    <div className="Container">
      <h1 className="heading">Confirm Orders</h1>
      <BookForm cart={cart} />
    </div>
  )
}
