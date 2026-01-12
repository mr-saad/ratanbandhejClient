"use client"
import cn from "@/lib/cn"
import useRatanContext from "@/lib/hooks/useRatanContext"
import Link from "next/link"

export default function CartLink() {
  const { cart } = useRatanContext()

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
          className={cn(
            "cartLink stroke-black",
            cart.length !== 0 ? "fill-black" : "fill-none",
          )}
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        {cart.length !== 0 && (
          <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-rose-900 text-center text-xs text-white">
            {cart.length}
          </span>
        )}
      </div>
    </Link>
  )
}
