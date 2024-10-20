import isAuthenticated from "@/lib/isAuthenticated"
import BookForm from "@/app/cart/checkout/BookForm"

export const metadata = {
  title: "Checkout",
}

export default async function Checkout() {
  const auth = await isAuthenticated()
  return (
    <div className="Container">
      <h1 className="heading">Confirm Orders</h1>
      <BookForm auth={auth} />
    </div>
  )
}
