"use client"
import { useEffect, useState } from "react"
import { useRatanContext } from "@/components/Provider"

export default function FavoritesButton({ _id, slug, title, images }) {
  const [showFavBtn, setShowFavBtn] = useState(true)

  const { favorites, setFavorites } = useRatanContext()

  useEffect(() => {
    favorites.forEach((item) => {
      if (item._id === _id) {
        setShowFavBtn(false)
      }
    })
  }, [favorites])

  const AddToFavorites = () => {
    const favs = [
      ...favorites,
      {
        _id,
        slug,
        title,
        image: {
          url: images[0].url,
          metadata: { lqip: images[0].metadata.lqip },
        },
      },
    ]
    localStorage.setItem("favorites", [JSON.stringify(favs)])
    setFavorites(favs)
    setShowFavBtn(false)
  }

  const RemoveFromFavorites = () => {
    const filtered = favorites.filter((all) => {
      return all._id !== _id
    })
    localStorage.setItem("favorites", JSON.stringify(filtered))
    setFavorites(filtered)
    setShowFavBtn(true)
  }

  return showFavBtn ? (
    <svg
      onClick={AddToFavorites}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="dark:stroke-white stroke-[#111] cursor-pointer"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ) : (
    <svg
      onClick={RemoveFromFavorites}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="dark:fill-white fill-[#111] cursor-pointer"
      fill="currentColor"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
