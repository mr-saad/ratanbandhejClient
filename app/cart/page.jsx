import Cart from "./Cart"
import CheckoutBtn from "./CheckoutBtn"

export const metadata = {
  title: "Cart",
}

export default function CartPage() {
  return (
    <div className="Container">
      <div className="mb-5 flex items-center justify-between gap-5">
        <h1 className="heading mb-0! shrink-0">My Cart</h1>
        <hr className="w-full border-black/20 dark:border-white/20" />
        <CheckoutBtn />
      </div>
      <div className="3xl:grid-cols-5 grid gap-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        <Cart />
      </div>
    </div>
  )
}
