"use client"
import Product from "@/components/Product"
import { useRatanContext } from "@/components/Provider"
import { useEffect, useState } from "react"

export default function Cart() {
  const [mount, setMount] = useState(false)
  const { cart } = useRatanContext()
  useEffect(() => setMount(true), [])

  return mount ? (
    cart.length > 0 ? (
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
  ) : (
    "Please Wait"
  )
}
