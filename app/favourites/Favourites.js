"use client"
import { useContext } from "react"
import Product from "@/components/Product"
import { RatanContext } from "@/components/Provider"

export default function Favourites() {
  const { favourites } = useContext(RatanContext)

  return favourites.length > 0 ? (
    favourites.map((props) => {
      return <Product key={props.slug} {...props} />
    })
  ) : (
    <p className="highlight text-3xl">Empty</p>
  )
}
