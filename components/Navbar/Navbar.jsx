"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Quagera } from "../logoFont"
import { useEffect } from "react"
import { useRatanContext } from "../Provider"
import dynamic from "next/dynamic"

const CartLink = dynamic(() => import("./CartLink"), { ssr: false })
const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false })

export default function Navbar() {
  const { auth } = useRatanContext()
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
    <nav
      className={`nav fixed top-0 z-[12] grid w-full select-none grid-cols-[1fr_2fr_1fr] items-center justify-between border-b border-white/10 bg-[#111]/90 p-5 shadow-xl backdrop-blur-[2px] md:text-base lg:px-20`}
    >
      <div
        tabIndex={0}
        className={`z-20 flex h-[12px] flex-col justify-between justify-self-start md:hidden`}
        onClick={openNav}
        onKeyUp={(e) => {
          e.preventDefault()
          if (e.key === "Enter") openNav()
        }}
      >
        <span
          className={`line1 h-[2px] w-[26px] origin-center rounded-md bg-white`}
        ></span>
        <span
          className={`line2 h-[2px] w-[26px] origin-center rounded-md bg-white`}
        ></span>
      </div>

      <Link
        aria-label="Home"
        title="Ratan Bandhej"
        href="/"
        className={
          "w-max justify-self-center text-[2.2rem] font-semibold text-white md:justify-self-start " +
          Quagera.className
        }
      >
        Ratan Bandhej
      </Link>
      <ul
        className={`col-span-3 row-start-2 mt-5 hidden grid-flow-row border-t border-white/10 pt-5 text-white md:col-span-1 md:row-start-auto md:mt-0 md:grid md:grid-flow-col md:place-content-center md:border-none md:pt-0`}
      >
        <ThemeToggle />
        <Links auth={auth} />
      </ul>
      <CartLink />
    </nav>
  )
}

const Links = ({ auth }) => {
  const pathname = usePathname()
  return (
    <>
      <li className="md:inline">
        <Link
          className={`block py-2 transition hover:opacity-100 md:inline md:px-2 md:py-0 ${
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
      {auth.status ? (
        <li className="md:inline">
          <Link
            shallow={true}
            className={`block py-2 transition hover:opacity-100 md:inline md:px-2 md:py-0 ${
              pathname.includes("/account") ? "opacity-100" : "opacity-60"
            }`}
            href={"/account"}
          >
            My Account
          </Link>
        </li>
      ) : (
        <li className="md:inline">
          <Link
            shallow={true}
            className={`block py-2 transition hover:opacity-100 md:inline md:px-2 md:py-0 ${
              pathname.includes("/create-account")
                ? "opacity-100"
                : "opacity-60"
            }`}
            href={"/create-account"}
          >
            Create Account
          </Link>
        </li>
      )}
    </>
  )
}

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

const openNav = () => {
  ;["rotate-45", "translate-y-2"].map((cls) =>
    document.querySelector(".line1").classList.toggle(cls),
  )
  ;["-rotate-45", "-translate-y-[2px]"].map((cls) =>
    document.querySelector(".line2").classList.toggle(cls),
  )
  document.querySelector("nav ul").classList.toggle("hidden")
}
