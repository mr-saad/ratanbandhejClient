import { useState } from "react"
import addToCart from "../actions/addToCart"
import removeFromCart from "../actions/removeFromCart"
import useRatanContext from "./useRatanContext"
import { useRouter } from "next/navigation"

export default function useCartBtn() {
  const { setCart, auth } = useRatanContext()
  const { replace } = useRouter()

  const [showCartBtn, setShowCartBtn] = useState(true)

  const addToCartBtn = async (prod) => {
    if (!auth.status) {
      return replace("/sign-in")
    }
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
    addToCartBtn,
    removeFromCartBtn,
    showCartBtn,
    setShowCartBtn,
  }
}
