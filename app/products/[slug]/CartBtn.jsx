"use client"
import { useEffect, useState } from "react"
import useCartBtn from "@/lib/hooks/useCartBtn"
import useRatanContext from "@/lib/hooks/useRatanContext"
import Button from "@/components/ui/Button"
import { ShoppingCart } from "lucide-react"

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
          <Button
            title="Add to Cart"
            variant={"primary"}
            onClick={() => {
              addToCartBtn(prod)
            }}
          >
            <span className="flex items-center justify-center gap-1">
              <ShoppingCart size={18} className="cursor-pointer fill-white" />
            </span>
          </Button>
        ) : (
          <Button
            title="Remove from Cart"
            variant={"secondary"}
            onClick={() => removeFromCartBtn(prod)}
          >
            <span className="flex items-center justify-center gap-1">
              <ShoppingCart
                size={18}
                className="cursor-pointer stroke-rose-700"
              />
            </span>
          </Button>
        )
      ) : null}
    </>
  )
}
