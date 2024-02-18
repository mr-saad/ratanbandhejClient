"use client"
import Product from "@/components/Product"
import { useRatanContext } from "@/components/Provider"

export default function Favorites() {
  const { favorites } = useRatanContext()

  return favorites.length > 0 ? (
    favorites.map((props) => {
      return <Product key={props.slug} {...props} />
    })
  ) : (
    <p>Empty</p>
  )
}
