"use client"
import Link from "next/link"
import { useRatanContext } from "../Provider"
import { usePathname } from "next/navigation"

export default function CartLink() {
  const { cart } = useRatanContext()
  const pathname = usePathname()

  const restofprops =
    cart.length !== 0
      ? pathname.includes("/cart")
        ? {
            fill: "#ffffff",
            stroke: "#ffffff",
          }
        : {
            fill: "#888",
            stroke: "#888",
          }
      : {
          fill: "none",
          stroke: "#888",
        }

  return (
    <Link
      prefetch
      className="justify-self-end"
      aria-label="favorites"
      href="/cart"
    >
      <div className="relative cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...restofprops}
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        {cart.length !== 0 && (
          <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-white text-center text-xs text-[#111]">
            {cart.length}
          </span>
        )}
      </div>
    </Link>
  )
}
