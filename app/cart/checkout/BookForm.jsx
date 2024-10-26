"use client"
import { useRatanContext } from "@/components/Provider"
import orderAction from "@/lib/actions/order"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ColourSelector from "./ColourSelector"

export default function BookForm({ auth: { _id: userId } }) {
  const [loading, setLoading] = useState(false)
  const [isExisting, setExisting] = useState(false)

  const { cart, setCart } = useRatanContext()
  const { push, replace } = useRouter()
  useEffect(() => {
    if (!cart.length) replace("/cart")
  }, [cart.length, replace])

  const [total, setTotal] = useState(
    cart.reduce((prev, item) => prev + item.price, 0),
  )

  const Submit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    let clrData = []
    cart.forEach(({ _id }, index) => {
      const cartItemClrs = document.querySelectorAll(`.cartItem-${index} .clr`)
      const cartItemQnts = document.querySelectorAll(`.cartItem-${index} .qnt`)
      clrData.push({
        _id,
        colours: [...cartItemClrs].map((clr, index) => ({
          name: clr.value,
          quantity: cartItemQnts[index].value,
        })),
      })
    })

    const res = await orderAction(cart, userId, formData, clrData)

    if (!res.ok) {
      alert(res.message)
      setLoading(false)
    } else {
      push("/orders")
      setCart([])
    }
  }

  const handleCheck = (e) => {
    setExisting(e.target.checked)
  }

  return (
    <form onSubmit={(e) => Submit(e)} className="grid gap-10 md:grid-cols-2">
      <div className="grid content-start gap-5">
        {cart.map(({ _id, title, colours, price }, index) => {
          return (
            <div className={`cartItem-${index} grid gap-4`} key={_id}>
              <div className="flex items-center justify-between">
                <p className="highlight">{title}</p>
              </div>
              <input type="hidden" value={_id} name="prodId" />
              <ColourSelector
                _id={_id}
                userId={userId}
                colours={colours || ""}
                price={price}
                setTotal={setTotal}
              />
            </div>
          )
        })}
      </div>

      <div className="grid content-start gap-5">
        <div className="relative flex gap-2">
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
              className="input peer resize-none"
              required
            ></textarea>
            <label htmlFor="address" className="floating-label">
              Address
            </label>
          </div>
        )}
        <div className="relative">
          <textarea
            name="note"
            id="note"
            placeholder=" "
            className="input peer resize-none"
          ></textarea>
          <label htmlFor="note" className="floating-label">
            Additional Note (Optional)
          </label>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button disabled={loading} className="btn" type="submit">
              Confirm
            </button>
            <Link
              disabled={loading}
              className="btn-secondary disabled:opacity-50"
              href={"/cart"}
            >
              Back
            </Link>
            {loading && (
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
            )}
          </div>
          <p className="font-semibold">
            Total:{" "}
            {total.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </form>
  )
}
