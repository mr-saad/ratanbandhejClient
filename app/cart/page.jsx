import { getCart } from "@/lib/getCart"
import CheckoutBtn from "./checkout/CheckoutBtn"
import Product from "@/components/Product"

export const metadata = {
  title: "Cart",
}

export default async function CartPage() {
  const cart = await getCart()

  return (
    <div className="Container">
      <div className="mb-5 flex items-center justify-between gap-5">
        <h1 className="heading !mb-0 shrink-0">My Cart</h1>
        <hr className="w-full border-[#888]" />
        <CheckoutBtn />
      </div>
      <div className="grid grid-cols-1 gap-10 gap-y-5 md:grid-cols-3">
        {cart.length > 0 ? (
          cart.map((props) => {
            return (
              <Product
                key={props.slug}
                image={props.images ? props.images[0] : ""}
                {...props}
              />
            )
          })
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  )
}
