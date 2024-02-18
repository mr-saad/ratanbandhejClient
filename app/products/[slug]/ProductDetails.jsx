"use client"
import FavoritesButton from "./FavoritesButton"
import { useState } from "react"
import BookForm from "./BookForm"

export default function ProductDetails({
  product: { _id, slug, type, title, images, description, colours, price },
}) {
  const [showForm, setShowForm] = useState(false)
  return (
    <div>
      <h3 className="font-semibold highlight text-base capitalize my-3 md:mt-0">
        {title}
      </h3>
      <p className="capitalize">Price: ₹{price}</p>
      {showForm ? (
        <BookForm
          price={price}
          type={type}
          title={title}
          image={images[0]}
          colours={colours}
          slug={slug}
          _id={_id}
          setShowForm={setShowForm}
        />
      ) : (
        <>
          <p className="whitespace-pre-wrap capitalize">{description}</p>
          <p className="capitalize flex gap-1">
            <span>Instock:</span> <span>{colours}</span>
          </p>
          <div className="flex justify-between items-center mt-4">
            <button className="btn" onClick={() => setShowForm(true)}>
              Book Now
            </button>
            <FavoritesButton
              _id={_id}
              slug={slug}
              title={title}
              images={images}
            />
          </div>
        </>
      )}
    </div>
  )
}
