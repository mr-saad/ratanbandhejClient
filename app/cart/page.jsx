"use client"
import Head from "next/head"
import Product from "@/components/Product"
import useRatanContext from "@/lib/hooks/useRatanContext"
import Link from "next/link"
import ProductGrid from "@/components/ui/ProductGrid"

export default function CartPage() {
  const { cart, authLoading } = useRatanContext()

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="Container">
        <div className="mb-5 flex items-center justify-between gap-5">
          <h1 className="heading mb-0! shrink-0">My Cart</h1>
          <hr className="w-full border-black/20 dark:border-white/20" />
          {cart.length ? (
            <Link href={"/cart/checkout"} prefetch className="btn">
              Checkout
            </Link>
          ) : null}
        </div>
        <ProductGrid>
          {!authLoading ? (
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
        </ProductGrid>
      </div>
    </>
  )
}
