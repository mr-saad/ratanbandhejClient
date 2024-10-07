import isAuthenticated from "@/lib/isAuthenticated"
import CartItems from "./CartItems"
import BookForm from "@/app/cart/checkout/BookForm"

export const metadata = {
  title: "Checkout",
}

export default async function Checkout() {
  const auth = await isAuthenticated()
  return (
    <div className="Container grid gap-5 md:grid-cols-2 md:gap-10">
      <div>
        <h1 className="heading">Confirm Orders</h1>
        <div className="grid gap-5">
          <CartItems userId={auth._id} />
        </div>
      </div>
      <BookForm auth={auth} />
    </div>
  )
}
