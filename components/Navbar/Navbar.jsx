"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import RatanSvg from "../RatanSvg"
import FavoritesBtn from "./FavoritesBtn"
import ThemeToggle from "./ThemeToggle"
import OrderLink from "./OrderLink"

const links = [
  {
    text: "Products",
    url: "/products",
  },
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Contact",
    url: "/contact",
  },
]

const Links = () => {
  const pathname = usePathname()
  return (
    <>
      <li>
        <Link
          onClick={CloseNav}
          className={`transition-colors block hover:opacity-100 ${
            pathname === "/" ? "opacity-100" : "opacity-60"
          }`}
          href={"/"}
          shallow={true}
        >
          Home
        </Link>
      </li>

      {links.map((all) => {
        return (
          <li key={all.url}>
            <Link
              shallow={true}
              onClick={CloseNav}
              className={`transition-colors block hover:opacity-100 ${
                pathname.includes(all.url) ? "opacity-100" : "opacity-60"
              }`}
              href={all.url}
            >
              {all.text}
            </Link>
          </li>
        )
      })}
      <OrderLink />
    </>
  )
}

export const CloseNav = () => {
  document.querySelector("nav ul").classList.remove("h-36", "mb-4")
  document
    .querySelector(".line1")
    .classList.remove("rotate-45", "translate-y-2")
  document
    .querySelector(".line2")
    .classList.remove("-rotate-45", "-translate-y-[2px]")
}

export default function Navbar() {
  const openNav = () => {
    ;["h-36", "mb-4"].map((cls) =>
      document.querySelector("nav ul").classList.toggle(cls),
    )
    ;["rotate-45", "translate-y-2"].map((cls) =>
      document.querySelector(".line1").classList.toggle(cls),
    )
    ;["-rotate-45", "-translate-y-[2px]"].map((cls) =>
      document.querySelector(".line2").classList.toggle(cls),
    )
  }

  return (
    <nav className="nav relative md:text-base p-5 lg:px-20 z-[12] bg-[#111] border-b dark:border-white/10">
      <ul
        className={`flex md:items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 justify-between md:justify-center md:gap-5 transition-[height] flex-col md:flex-row h-0 md:h-auto overflow-hidden font-semibold text-white`}
      >
        <ThemeToggle />
        <Links />
      </ul>
      <div className="flex justify-between items-center select-none">
        <div
          className={`md:hidden transition flex flex-col justify-between h-[12px] z-20`}
          onClick={openNav}
        >
          <span
            className={`line1 w-[26px] h-[2px] rounded-md transition-transform origin-center bg-white`}
          ></span>
          <span
            className={`line2 w-[26px] h-[2px] rounded-md transition-transform origin-center bg-white`}
          ></span>
        </div>

        <Link
          onClick={CloseNav}
          aria-label="Home"
          title="Ratan Bandhej"
          href="/"
        >
          <RatanSvg isNav width={121} height={30} />
        </Link>
        <FavoritesBtn />
      </div>
    </nav>
  )
}
