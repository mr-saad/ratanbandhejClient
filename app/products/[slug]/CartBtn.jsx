"use client"
import { useEffect, useState } from "react"
import useCartBtn from "@/lib/hooks/useCartBtn"
import useRatanContext from "@/lib/hooks/useRatanContext"
import Button from "@/components/ui/Button"
import { Minus, Plus } from "lucide-react"

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
    <div className="mt-4">
      {mount ? (
        showCartBtn ? (
          <Button
            variant={"primary"}
            onClick={() => {
              addToCartBtn(prod)
            }}
          >
            <span className="flex items-center justify-center gap-1">
              <Plus />
              Add to Cart
            </span>
          </Button>
        ) : (
          <Button variant={"danger"} onClick={() => removeFromCartBtn(prod)}>
            <span className="flex items-center justify-center gap-1">
              <Minus />
              Remove from Cart
            </span>
          </Button>
        )
      ) : null}
    </div>
  )
}
