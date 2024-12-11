"use client"
import { useEffect, useState } from "react"
import useCartBtn from "@/lib/hooks/UseCartBtn"
import useRatanContext from "@/lib/hooks/UseRatanContext"

export default function CartBtn({ prod }) {
  const [mount, setMount] = useState(false)
  const { setShowCartBtn, showCartBtn, addToCartBtn, removeFromCartBtn } =
    useCartBtn()

  const { cart } = useRatanContext()

  const isInCart = () => {
    cart.forEach((product) => {
      if (product._id === prod._id) {
        setShowCartBtn(false)
      }
    })
  }

  useEffect(() => {
    isInCart()
  })
  useEffect(() => setMount(true), [])

  return (
    <>
      {mount ? (
        showCartBtn ? (
          <button
            className="btn w-full"
            onClick={() => {
              addToCartBtn(prod)
            }}
          >
            <span className="flex items-center justify-center gap-1">
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
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
              Add to Cart
            </span>
          </button>
        ) : (
          <button
            className="btn w-full !border-red-700 !bg-red-700 !text-white hover:!bg-transparent hover:!text-red-700"
            onClick={() => removeFromCartBtn(prod)}
          >
            <span className="flex items-center justify-center gap-1">
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
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
              </svg>
              Remove from Cart
            </span>
          </button>
        )
      ) : null}
    </>
  )
}
