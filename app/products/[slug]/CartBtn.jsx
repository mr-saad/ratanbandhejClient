"use client"
import { useEffect, useState } from "react"
import { useRatanContext } from "@/components/Provider"
import addToCart from "@/lib/actions/addToCart"
import removeFromCart from "@/lib/actions/removeFromCart"
import { useRouter } from "next/navigation"
import { getCart } from "@/lib/getCart"

export const useCartBtn = () => {
  const { push } = useRouter()

  const { setCart } = useRatanContext()

  const [showCartBtn, setShowCartBtn] = useState(true)
  const [loading, setLoading] = useState(false)

  const addToCartBtn = async (_id, userId) => {
    if (!userId) {
      return push("/sign-in")
    }
    setLoading(true)
    const res = await addToCart(userId, _id)
    if (!res.ok) alert(res.message)
    else {
      setCart(await getCart({ _id: userId }))
    }
    setLoading(false)
  }

  const removeFromCartBtn = async (_id, userId) => {
    setLoading(true)
    const res = await removeFromCart(userId, _id)
    if (!res.ok) alert(res.message)
    else {
      setCart(await getCart({ _id: userId }))
      setShowCartBtn(true)
    }
    setLoading(false)
  }

  return {
    loading,
    addToCartBtn,
    removeFromCartBtn,
    showCartBtn,
    setShowCartBtn,
  }
}

export default function CartBtn({ _id, userId }) {
  const [mount, setMount] = useState(false)
  const {
    setShowCartBtn,
    showCartBtn,
    loading,
    addToCartBtn,
    removeFromCartBtn,
  } = useCartBtn()

  const { cart } = useRatanContext()

  const isInCart = () => {
    cart.forEach((product) => {
      if (product._id === _id) {
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
            disabled={loading}
            className="btn w-full"
            onClick={() => {
              addToCartBtn(_id, userId)
            }}
          >
            <span className="flex items-center justify-center gap-1">
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
                <>
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
                </>
              )}
            </span>
          </button>
        ) : (
          <button
            disabled={loading}
            className="btn w-full !border-red-700 !bg-red-700 !text-white hover:!bg-transparent hover:!text-red-700"
            onClick={() => removeFromCartBtn(_id, userId)}
          >
            <span className="flex items-center justify-center gap-1">
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
                <>
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
                </>
              )}
            </span>
          </button>
        )
      ) : null}
    </>
  )
}
