"use client"
import cn from "@/lib/cn"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

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
      if (!nav.contains(e.target) || e.target.tagName === "A") CloseNav()
    })

    return () => removeEventListener("click", listener)
  }, [])
  return (
    <>
      <li className="md:inline">
        <Link
          prefetch={true}
          className={cn(
            "block pb-2 transition hover:text-stone-950 focus-visible:text-stone-950 md:inline md:px-2 md:py-0",
            pathname === "/" ? "text-stone-950" : "text-stone-500",
          )}
          href={"/"}
        >
          Home
        </Link>
      </li>
      {links.map((all) => {
        return (
          <li className="md:inline" key={all.url}>
            <Link
              prefetch={true}
              className={cn(
                "block py-2 transition hover:text-stone-950 focus-visible:text-stone-950 md:inline md:px-2 md:py-0",
                pathname.includes(all.url)
                  ? "text-stone-950"
                  : "text-stone-500",
              )}
              href={all.url}
            >
              {all.text}
            </Link>
          </li>
        )
      })}
    </>
  )
}
