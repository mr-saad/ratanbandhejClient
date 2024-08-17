import orderAction from "@/lib/orderAction"
import UserId from "./UserId"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"

export default function BookForm({ _id, price, title, colours, setShowForm }) {
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()
  const formRef = useRef()
  const Submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(formRef.current)
    const res = await orderAction(formData)
    if (!res.ok) {
      alert(res.message)
      setLoading(false)
      return
    } else push("/orders")
  }
  return (
    <form
      ref={formRef}
      onSubmit={(e) => Submit(e)}
      className="flex flex-col gap-10 mt-10"
    >
      <div className="relative">
        <input
          pattern="^(?!.*(\w)\1{3,}).+$"
          minLength={4}
          maxLength={13}
          type="text"
          name="username"
          id="username"
          placeholder=" "
          className="peer input"
          required
        />
        <label htmlFor="username" className="floating-label">
          Username
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          name="email"
          id="email"
          placeholder=" "
          className="peer input"
          required
        />
        <label htmlFor="email" className="floating-label">
          E-Mail
        </label>
      </div>

      <div className="relative">
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder=" "
          className="peer input"
          maxLength={10}
          minLength={10}
          required
        />
        <label htmlFor="phone" className="floating-label">
          Phone
        </label>
      </div>

      <div className="relative">
        <textarea
          minLength={10}
          maxLength={60}
          type="text"
          name="address"
          id="address"
          placeholder=" "
          className="peer input resize-none"
          required
        ></textarea>
        <label htmlFor="address" className="floating-label">
          Address
        </label>
      </div>

      <div className="relative">
        <label htmlFor="colours" className="floating-label">
          Colour
        </label>
        <select name="color" id="colours" className="input capitalize">
          {colours.split(",").map((colour) => (
            <option
              key={colour}
              className="capitalize text-black"
              value={colour}
            >
              {colour}
            </option>
          ))}
        </select>
      </div>
      <UserId />
      <input type="hidden" name="productName" value={title} />
      <input type="hidden" name="productId" value={_id} />
      <input type="hidden" name="productPrice" value={price} />

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button disabled={loading} className="btn" type="submit">
            Register
          </button>
          <button
            disabled={loading}
            onClick={() => setShowForm(false)}
            className="btn inline-block !bg-transparent !text-[#111] dark:!text-white opacity-70 hover:opacity-100 focus-within:opacity-100"
          >
            Cancel
          </button>
          {loading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          )}
        </div>
        <p className="font-semibold">Total: ₹{price}</p>
      </div>
    </form>
  )
}
