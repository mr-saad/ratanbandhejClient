"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import AccountLink from "./AccountLink"

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

const CloseNav = () => {
  document.querySelector("nav ul").classList.remove("grid")
  document.querySelector("nav ul").classList.add("hidden")
  document
    .querySelector(".line1")
    .classList.remove("rotate-45", "translate-y-2")
  document
    .querySelector(".line2")
    .classList.remove("-rotate-45", "-translate-y-[2px]")
}

export default function Links() {
  const pathname = usePathname()

  useEffect(() => {
    const nav = document.querySelector("nav")

    const listener = document.addEventListener("click", (e) => {
      if (
        !nav.contains(e.target) ||
        e.target.tagName === "A" ||
        e.target.tagName === "svg"
      )
        CloseNav()
    })

    return () => removeEventListener("click", listener)
  }, [])
  return (
    <>
      <li className="md:inline">
        <Link
          shallow={true}
          prefetch
          className={`block py-2 transition hover:opacity-100 md:inline md:px-2 md:py-0 ${
            pathname === "/" ? "opacity-100" : "opacity-60"
          }`}
          href="/"
        >
          Home
        </Link>
      </li>

      {links.map((all) => {
        return (
          <li className="md:inline" key={all.url}>
            <Link
              prefetch={true}
              shallow={true}
              className={`block py-2 transition hover:opacity-100 md:inline md:px-2 md:py-0 ${
                pathname.includes(all.url) ? "opacity-100" : "opacity-60"
              }`}
              href={all.url}
            >
              {all.text}
            </Link>
          </li>
        )
      })}
      <AccountLink />
    </>
  )
}
