import Cart from "./Cart"
import CheckoutBtn from "./checkout/CheckoutBtn"

export const metadata = {
  title: "Cart",
}

export default function CartPage() {
  return (
    <div className="Container">
      <div className="mb-5 flex items-center justify-between gap-5">
        <h1 className="heading !mb-0 shrink-0">My Cart</h1>
        <hr className="w-full border-[#888]" />
        <CheckoutBtn />
      </div>
      <div className="grid grid-cols-1 gap-10 gap-y-5 md:grid-cols-3">
        <Cart />
      </div>
    </div>
  )
}
