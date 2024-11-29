// "use client"
import Product from "@/components/Product"
// import { useRatanContext } from "@/components/Provider"
import { getCart } from "@/lib/getCart"

export default async function Cart() {
  const cart = await getCart()
  // const { cart } = useRatanContext()
  return cart.length > 0 ? (
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
  )
}
