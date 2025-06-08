import Link from "next/link"
import { Quagera } from "../logoFont"
import ThemeToggle from "./ThemeToggle"
import MenuToggler from "./MenuToggler"
import Links from "./Links"
import CartLink from "./CartLink"

export default function Navbar() {
  return (
    <nav
      className={`nav fixed top-0 z-[12] grid w-full grid-cols-[1fr_2fr_1fr] items-center justify-between border-b border-white/10 bg-[#111]/90 px-5 py-2 shadow-xl backdrop-blur-[2px] select-none md:text-base lg:px-20`}
    >
      <MenuToggler />
      <Link
        prefetch
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
        <div className="sm:hidden">
          <ThemeToggle />
        </div>
        <Links />
      </ul>
      <div className="flex gap-2 justify-self-end">
        <div className="hidden text-white md:block">
          <ThemeToggle />
        </div>
        <CartLink />
      </div>
    </nav>
  )
}
