import orderAction from "@/lib/orderAction"
import UserId from "./UserId"

export default function BookForm({ _id, price, title, colours, setShowForm }) {
  return (
    <form action={orderAction} className="flex flex-col gap-10 mt-10">
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
        <div>
          <button className="btn mr-3" type="submit">
            Register
          </button>
          <button
            onClick={() => setShowForm(false)}
            className="btn inline-block !bg-transparent !text-[#111] dark:!text-white opacity-70 hover:opacity-100 focus-within:opacity-100"
          >
            Cancel
          </button>
        </div>
        <p className="font-semibold">Total: ₹{price}</p>
      </div>
    </form>
  )
}
