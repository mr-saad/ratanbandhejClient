"use client"
import orderAction from "@/lib/actions/order"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ColourSelector from "./ColourSelector"
import useRatanContext from "@/lib/hooks/useRatanContext"

export default function BookForm() {
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
  return mount && !authLoad ? (
    <form onSubmit={(e) => Submit(e)} className="grid gap-10 md:grid-cols-2">
      <div className="grid content-start gap-5">
        {cart.map(({ _id, title, colours, price, slug, image }, index) => {
          const prod = { _id, title, colours, price, slug, image }
          return (
            <div className={`cartItem-${index} grid gap-4`} key={_id}>
              <div className="flex items-center justify-between">
                <p className="highlight">{title}</p>
              </div>
              <ColourSelector
                _id={_id}
                colours={colours || ""}
                price={price}
                setTotal={setTotal}
                cart={cart}
                prod={prod}
              />
            </div>
          )
        })}
      </div>

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
          <div className="relative">
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
              Address
            </label>
          </div>
        )}
        <div className="relative mt-2">
          <textarea
            name="note"
            id="note"
            placeholder=" "
            className="input peer"
          ></textarea>
          <label htmlFor="note" className="floating-label">
            Additional Note (Optional)
          </label>
        </div>
        <div className="flex items-center justify-between">
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
          <p className="font-semibold">
            Total:
            {total.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </form>
  ) : (
    "Please Wait"
  )
}
