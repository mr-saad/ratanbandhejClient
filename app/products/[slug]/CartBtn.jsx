"use client"
import { useEffect, useState } from "react"
import { useRatanContext } from "@/components/Provider"
import addToCart from "@/lib/actions/addToCart"
import removeFromCart from "@/lib/actions/removeFromCart"
import { useRouter } from "next/navigation"

export const useCartBtn = () => {
  const { setCart } = useRatanContext()
  const [showCartBtn, setShowCartBtn] = useState(true)
  const [loading, setLoading] = useState(false)

  const addToCartBtn = async (userId, _id) => {
    setLoading(true)
    const res = await addToCart(userId, _id)
    if (!res.ok) alert(res.message)
    else setCart(res.cart)
    setLoading(false)
  }

  const removeFromCartBtn = async (userId, _id) => {
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

export default function CartBtn({ userId, _id }) {
  const { push } = useRouter()
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

  const handleClick = () => {
    if (!userId) {
      return push("/sign-in")
    }
    addToCartBtn(userId, _id)
  }

  useEffect(() => {
    isInCart()
  }, [cart])

  return showCartBtn ? (
    <button disabled={loading} className="btn" onClick={handleClick}>
      Add to Cart
    </button>
  ) : (
    <button
      disabled={loading}
      className="btn"
      onClick={() => removeFromCartBtn(userId, _id)}
    >
      Remove from Cart
    </button>
  )
}
