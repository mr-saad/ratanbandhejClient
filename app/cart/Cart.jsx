"use client"
import Product from "@/components/Product"
import { useRatanContext } from "@/components/Provider"

export default function Cart() {
  const { cart } = useRatanContext()
  return cart.length > 0 ? (
    cart.map((props, index) => {
      return (
        <Product
          key={props.slug}
          image={props.images[0]}
          index={index}
          {...props}
        />
      )
    })
  ) : (
    <p>Empty</p>
  )
}
