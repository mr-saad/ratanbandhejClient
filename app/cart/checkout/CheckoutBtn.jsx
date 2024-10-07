"use client"

import { useRatanContext } from "@/components/Provider"
import Link from "next/link"

export default function CheckoutBtn() {
  const { cart } = useRatanContext()
  return (
    cart.length !== 0 && (
      <Link href={"/cart/checkout"} className="btn">
        Checkout
      </Link>
    )
  )
}
