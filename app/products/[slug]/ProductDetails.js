"use client"
import { useContext, useEffect, useState } from "react"
import { RatanContext } from "@/components/Provider"
import { BiPlus, BiTrash } from "react-icons/bi"

export default function ProductDetails({
  product: {
    _id,
    slug,
    type,
    // quantity,
    title,
    images,
    description,
    colours,
    price
  }
}) {
  const { favourites, setFavourites } = useContext(RatanContext)

  const [showFavBtn, setFavBtn] = useState(true)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    favourites.forEach(item => {
      if (item._id === _id) {
        setFavBtn(false)
      }
    })
  }, [favourites])

  const AddToFavourites = () => {
    const favs = [
      ...favourites,
      {
        _id,
        slug,
        title,
        image: {
          _id: images[0]._id,
          metadata: { lqip: images[0].metadata.lqip }
        }
      }
    ]
    setFavourites(favs)
    localStorage.setItem("favourites", [JSON.stringify(favs)])
  }
  const Delete = () => {
    const filtered = favourites.filter(all => {
      return all._id !== _id
    })
    localStorage.setItem("favourites", JSON.stringify(filtered))
    setFavourites(filtered)
    setFavBtn(true)
  }
  return (
    <div className="self-start">
      <h3 className="font-semibold highlight text-base capitalize">{title}</h3>
      <p className="capitalize">Price: ₹{price}</p>
      {!showForm ? (
        <>
          <p className="whitespace-pre-wrap capitalize">{description}</p>
          <p className="capitalize flex gap-1">
            <span>Instock:</span> <span>{colours}</span>
          </p>
          <div className="flex justify-between items-center mt-4">
            <button className="btn" onClick={() => setShowForm(true)}>
              Book Now
            </button>

            {showFavBtn ? (
              <p
                onClick={AddToFavourites}
                className="flex items-center cursor-pointer font-medium highlight"
              >
                <BiPlus size={24} /> Add to Favourites
              </p>
            ) : (
              <p
                onClick={Delete}
                className="flex items-center cursor-pointer font-medium highlight"
              >
                <BiTrash size={24} /> Remove from Favourites
              </p>
            )}
          </div>
        </>
      ) : (
        <BookForm
          price={price}
          type={type}
          title={title}
          image={images[0]}
          // quantity={quantity}
          colours={colours}
          setShowForm={setShowForm}
        />
      )}
    </div>
  )
}

function BookForm({
  price,
  type,
  title,
  image,
  // quantity,
  colours,
  setShowForm
}) {
  const [totalPrice, setTotalPrice] = useState(price)

  const [book, setBook] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    type: type,
    product: title,
    // quantity: 1,
    colour: colours.split("/")[0],
    image: image.url
  })
  // const ChangeQuantity = (e) => {
  //   setBook({ ...book, quantity: parseInt(e.target.value) })
  //   setTotalPrice(parseInt(e.target.value) * price)
  // }

  const Book = e => {
    e.preventDefault()
    alert("Coming Soon :)")
  }
  return (
    <form onSubmit={Book} className="flex flex-col gap-10 mt-10">
      <div className="relative">
        <input
          pattern="^(?!.*(\w)\1{3,}).+$"
          minLength={4}
          maxLength={13}
          type="text"
          placeholder=" "
          className="peer input"
          value={book.username}
          required
          onChange={e => setBook({ ...book, username: e.target.value })}
        />
        <label className="floating-label">Username</label>
      </div>

      <div className="relative">
        <input
          type="email"
          placeholder=" "
          className="peer input"
          value={book.email}
          required
          onChange={e => {
            setBook({ ...book, email: e.target.value })
          }}
        />
        <label className="floating-label">E-Mail</label>
      </div>

      <div className="relative">
        <input
          type="tel"
          placeholder=" "
          className="peer input"
          maxLength={10}
          minLength={10}
          value={book.phone}
          required
          onChange={e => setBook({ ...book, phone: e.target.value })}
        />
        <label className="floating-label">Phone</label>
      </div>

      <div className="relative">
        <textarea
          minLength={10}
          maxLength={60}
          type="text"
          placeholder=" "
          className="peer input resize-none"
          value={book.address}
          required
          onChange={e => setBook({ ...book, address: e.target.value })}
        ></textarea>
        <label className="floating-label">Address</label>
      </div>

      {/* <div className="relative">
        <label htmlFor="quantity" className="floating-label">
          Quantity
        </label>
        <select
          id="quantity"
          value={book.quantity}
          className="input"
          onChange={ChangeQuantity}
        >
          {Array.from({ length: quantity }, (_, i) => i + 1).map((quant) => {
            return (
              <option
                key={quant}
                className="text-black capitalize"
                value={quant}
              >
                {quant}
              </option>
            )
          })}
        </select>
      </div> */}

      <div className="relative">
        <label htmlFor="colours" className="floating-label">
          Colour
        </label>
        <select
          value={book.colour}
          onChange={e => setBook({ ...book, colour: e.target.value })}
          id="colours"
          className="input capitalize"
        >
          {colours.split(",").map(colour => (
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

      <div className="flex justify-between items-center">
        <div>
          <button className="btn self-start mr-3" type="submit">
            Register
          </button>
          <button
            onClick={() => {
              setShowForm(false)
            }}
            className="btn !bg-transparent !text-[#111] dark:!text-white"
          >
            Cancel
          </button>
        </div>
        <p className="font-medium">Total: ₹{totalPrice}</p>
      </div>
    </form>
  )
}
