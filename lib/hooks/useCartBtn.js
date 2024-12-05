import { useState } from "react"
import addToCart from "../actions/addToCart"
import removeFromCart from "../actions/removeFromCart"
import { useRatanContext } from "./useRatanContext"

export const useCartBtn = () => {
  const { setCart } = useRatanContext()

  const [showCartBtn, setShowCartBtn] = useState(true)
  const [loading, setLoading] = useState(false)

  const addToCartBtn = async (prod) => {
    setCart((prev) => [...prev, prod])
    const res = await addToCart(prod._id)

    if (!res.ok) {
      alert(res.message)
      setCart((prev) => prev.filter((item) => item._id !== prod._id))
      setShowCartBtn(true)
    }
  }

  const removeFromCartBtn = async (prod) => {
    setCart((prev) => prev.filter((item) => item._id !== prod._id))
    setShowCartBtn(true)
    const res = await removeFromCart(prod._id)

    if (!res.ok) {
      alert(res.message)
      setCart((prev) => [...prev, prod])
      setShowCartBtn(false)
    } else {
      setShowCartBtn(true)
    }
    return res
  }

  return {
    loading,
    addToCartBtn,
    removeFromCartBtn,
    showCartBtn,
    setShowCartBtn,
  }
}
