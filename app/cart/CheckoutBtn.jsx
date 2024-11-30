"use client"
import { useRatanContext } from "@/components/Provider"
import Link from "next/link"

export default function CheckoutBtn() {
  const { cart } = useRatanContext()
  return cart.length ? (
    <Link href={"/cart/checkout"} prefetch shallow={true} className="btn">
      Checkout
    </Link>
  ) : null
}
