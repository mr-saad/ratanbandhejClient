"use client"
import Product from "@/components/Product"
import useRatanContext from "@/lib/hooks/UseRatanContext"
import { useEffect, useState } from "react"

export default function Cart() {
  const [mount, setMount] = useState(false)
  const { cart, authLoad } = useRatanContext()
  useEffect(() => setMount(true), [])

  return mount && !authLoad ? (
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
