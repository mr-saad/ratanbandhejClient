"use client"
import orderAction from "@/lib/actions/order"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ColourSelector from "./ColourSelector"
import useRatanContext from "@/lib/hooks/useRatanContext"
import Image from "next/image"
import Head from "next/head"
import Card from "@/components/ui/Card"

export default function Checkout() {
  const [mount, setMount] = useState(false)

  const { cart, setCart, authLoad } = useRatanContext()

  const [loading, setLoading] = useState(false)
  const [isExisting, setExisting] = useState(false)

  const { replace } = useRouter()

  const [total, setTotal] = useState(0)
  useEffect(
    () => setTotal(cart.reduce((prev, item) => prev + item.price, 0)),
    [cart],
  )

  async function Submit(e) {
    e.preventDefault()
    setLoading(true)

    const data = new FormData(e.target)
    let colours = []
    cart.forEach(({ _id }, index) => {
      const cartItemClrs = document.querySelectorAll(`.cartItem-${index} .clr`)
      const cartItemQnts = document.querySelectorAll(`.cartItem-${index} .qnt`)
      colours.push({
        _id,
        colours: [...cartItemClrs].map((clr, index) => ({
          name: clr.value,
          quantity: cartItemQnts[index].value,
        })),
      })
    })
    const formData = {
      existing: data.get("existing"),
      note: data.get("note"),
    }
    const res = await orderAction({ formData, colours })

    if (!res.ok) {
      alert(res.message)
      setLoading(false)
    } else {
      replace("/orders")
      setCart([])
    }
  }

  const handleCheck = (e) => {
    setExisting(e.target.checked)
  }

  useEffect(() => {
    setMount(true)
  }, [])

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className="Container">
        <h1 className="heading">Checkout</h1>
        {mount && !authLoad ? (
          <form
            onSubmit={(e) => Submit(e)}
            className="grid items-start gap-5 md:grid-cols-2"
          >
            <div className="grid content-start gap-5">
              {cart.map((prod, index) => {
                // const prod = { _id, title, colours, price, slug, image }
                return (
                  <Card key={prod._id}>
                    <div className={`cartItem-${index} grid gap-4`}>
                      <div className="flex items-start gap-4">
                        <Image
                          placeholder="blur"
                          blurDataURL={prod.image.metadata.lqip}
                          alt={prod.title}
                          src={prod.image.path}
                          className="aspect-square rounded-md object-cover"
                          width={80}
                          height={80}
                        />
                        <div className="w-full">
                          <p className="highlight line-clamp-2">{prod.title}</p>
                          {prod.colours && (
                            <ColourSelector
                              _id={prod._id}
                              colours={prod.colours || ""}
                              price={prod.price}
                              setTotal={prod.setTotal}
                              cart={cart}
                              prod={prod}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            <Card className="sticky top-25">
              <div className="grid content-start gap-5">
                <div className="relative mb-4 flex gap-2">
                  <input
                    name="existing"
                    type="checkbox"
                    onChange={handleCheck}
                    id="existing"
                  />
                  <label htmlFor="existing" className="select-none">
                    Use My Existing Address
                  </label>
                </div>
                {!isExisting && (
                  <div className="relative mb-2">
                    <textarea
                      minLength={10}
                      maxLength={60}
                      name="address"
                      id="address"
                      placeholder=" "
                      className="input peer"
                      required
                    ></textarea>
                    <label htmlFor="address" className="floating-label">
                      Address<span className="text-xl text-red-600">*</span>
                    </label>
                  </div>
                )}
                <div className="relative">
                  <textarea
                    name="note"
                    id="note"
                    placeholder=" "
                    className="input peer"
                  ></textarea>
                  <label htmlFor="note" className="floating-label">
                    Additional Note
                  </label>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <div className="flex items-center gap-2">
                    <button disabled={loading} className="btn" type="submit">
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
                        "Confirm"
                      )}
                    </button>
                    <Link
                      className={`btn-secondary ${loading ? "pointer-events-none opacity-50" : ""}`}
                      href={"/cart"}
                    >
                      Back
                    </Link>
                  </div>
                  <p className="highlight grow text-right font-semibold">
                    Total:{" "}
                    {total.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>
            </Card>
          </form>
        ) : (
          "Please Wait"
        )}
      </div>
    </>
  )
}
