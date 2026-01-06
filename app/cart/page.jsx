"use client"
import { useEffect, useState } from "react"
import Head from "next/head"
import Product from "@/components/Product"
import useRatanContext from "@/lib/hooks/useRatanContext"
import CheckoutBtn from "./CheckoutBtn"

export default function CartPage() {
  const [mount, setMount] = useState(false)
  const { cart, authLoad } = useRatanContext()
  useEffect(() => setMount(true), [])

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="Container">
        <div className="mb-5 flex items-center justify-between gap-5">
          <h1 className="heading mb-0! shrink-0">My Cart</h1>
          <hr className="w-full border-black/20 dark:border-white/20" />
          <CheckoutBtn />
        </div>
        <div className="3xl:grid-cols-5 grid gap-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
          {mount && !authLoad ? (
            cart.length > 0 ? (
              cart.map((props) => {
                return (
                  <Product
                    key={props.slug}
                    image={props.images ? props.images[0] : ""}
                    {...props}
                  />
                )
              })
            ) : (
              <p>Empty</p>
            )
          ) : (
            "Please Wait"
          )}
        </div>
      </div>
    </>
  )
}
