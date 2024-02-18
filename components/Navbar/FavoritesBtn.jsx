import Link from "next/link"
import { useRatanContext } from "../Provider"
import { usePathname } from "next/navigation"
import { CloseNav } from "./Navbar"

export default function FavoritesBtn() {
  const { favorites } = useRatanContext()
  const pathname = usePathname()

  const restofprops =
    favorites.length !== 0
      ? {
          fill: "#ffffff",
        }
      : {
          stroke:
            pathname === "/favorites" ? "#ffffff" : "rgba(255,255,255,0.6)",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }

  return (
    <Link onClick={CloseNav} aria-label="favorites" href="/favorites">
      <div className="relative cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          {...restofprops}
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>

        {favorites.length !== 0 && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-black">
            {favorites.length}
          </span>
        )}
      </div>
    </Link>
  )
}
