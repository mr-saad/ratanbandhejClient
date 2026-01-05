import Link from "next/link"
import { Quagera } from "../logoFont"
import ThemeToggle from "./ThemeToggle"
import MenuToggler from "./MenuToggler"
import Links from "./Links"
import CartLink from "./CartLink"
import AccountLink from "./AccountLink"

export default function Navbar() {
  return (
    <nav
      className={`nav fixed inset-x-2 top-2 z-12 box-content grid grid-cols-[1fr_2fr_1fr] items-center justify-between rounded-xl border border-white/30 bg-linear-to-t from-red-800/90 to-red-600/90 px-5 py-2 shadow-xl backdrop-blur-sm select-none md:text-base`}
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
        className={`col-span-3 row-start-2 mt-5 hidden grid-flow-row border-t border-white/10 pt-5 text-white capitalize md:col-span-1 md:row-start-auto md:mt-0 md:grid md:grid-flow-col md:place-content-center md:border-none md:pt-0`}
      >
        <Links />
        <div className="md:hidden">
          <AccountLink />
        </div>
        <div className="sm:hidden">
          <ThemeToggle />
        </div>
      </ul>
      <div className="flex items-center gap-4 justify-self-end">
        <div className="hidden text-white md:block">
          <ThemeToggle />
        </div>
        <CartLink />
        <div className="hidden md:block">
          <AccountLink />
        </div>
      </div>
    </nav>
  )
}
