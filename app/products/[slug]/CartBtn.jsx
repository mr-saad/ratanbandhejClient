"use client"
import { useEffect, useState } from "react"
import { useRatanContext } from "@/components/Provider"
import addToCart from "@/lib/actions/addToCart"
import removeFromCart from "@/lib/actions/removeFromCart"
import { useRouter } from "next/navigation"

export const useCartBtn = () => {
  const { push } = useRouter()

  const {
    setCart,
    auth: { _id: userId },
  } = useRatanContext()

  const [showCartBtn, setShowCartBtn] = useState(true)
  const [loading, setLoading] = useState(false)

  const addToCartBtn = async (_id) => {
    if (!userId) {
      push("/sign-in")
    }
    setLoading(true)
    const res = await addToCart(userId, _id)
    if (!res.ok) alert(res.message)
    else setCart(res.cart)
    setLoading(false)
  }

  const removeFromCartBtn = async (_id) => {
    setLoading(true)
    const res = await removeFromCart(userId, _id)
    if (!res.ok) alert(res.message)
    else {
      setCart(res.cart)
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

export default function CartBtn({ _id }) {
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

  return (
    <>
      {showCartBtn ? (
        <button
          disabled={loading}
          className="btn"
          onClick={() => {
            addToCartBtn(_id)
          }}
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
            "Add to Cart"
          )}
        </button>
      ) : (
        <button
          disabled={loading}
          className="btn"
          onClick={() => removeFromCartBtn(_id)}
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
            "Remove from Cart"
          )}
        </button>
      )}
    </>
  )
}
