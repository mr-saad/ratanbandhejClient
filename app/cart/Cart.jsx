"use client"
import { useRatanContext } from "@/components/Provider"
import dynamic from "next/dynamic"

const Product = dynamic(() => import("@/components/Product"), { ssr: false })

export default function Cart() {
  const { cart } = useRatanContext()
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
