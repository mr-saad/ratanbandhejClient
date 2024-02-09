"use client"
import Product from "@/components/Product"
import { useRatanContext } from "@/components/Provider"

export default function Favourites() {
  const { favourites } = useRatanContext()

  return favourites.length > 0 ? (
    favourites.map((props) => {
      return <Product key={props.slug} {...props} />
    })
  ) : (
    <p>Empty</p>
  )
}
