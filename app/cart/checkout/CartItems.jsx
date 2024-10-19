"use client"
import { useCartBtn } from "@/app/products/[slug]/CartBtn"
import { useRatanContext } from "@/components/Provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function CartItems({ userId }) {
  const { removeFromCartBtn, loading } = useCartBtn()
  const { cart } = useRatanContext()
  const { replace } = useRouter()

  useEffect(() => {
    if (!cart.length) return replace("/cart")
  }, [cart])

  return cart.map((item) => {
    return (
      <div
        key={item._id}
        className="flex items-center justify-between gap-4 border-b pb-2 dark:border-white/10"
      >
        <p className="text-lg">{item.title}</p>
        <button
          className="stroke-[#888] transition hover:stroke-[#111] disabled:pointer-events-none disabled:opacity-50 dark:hover:stroke-white"
          // disabled={loading}
        >
          {loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          ) : (
            <svg
              onClick={() => removeFromCartBtn(userId, item._id)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="inherit"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 stroke-inherit"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          )}
        </button>
      </div>
    )
  })
}
