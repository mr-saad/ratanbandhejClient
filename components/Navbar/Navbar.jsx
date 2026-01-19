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
      className={`nav fixed inset-x-2 top-2 z-12 grid grid-cols-[1fr_2fr_1fr] items-center justify-between rounded-xl bg-stone-100/75 px-5 py-3 shadow-xl shadow-black/5 backdrop-blur-lg select-none md:text-base`}
    >
      <MenuToggler />
      <Link
        prefetch
        aria-label="Home"
        title="Ratan Bandhej"
        href="/"
        className={
          "w-max justify-self-center text-4xl font-bold text-stone-950 md:justify-self-start " +
          Quagera.className
        }
      >
        Ratan Bandhej
      </Link>
      <ul
        className={`col-span-3 row-start-2 hidden grid-flow-row pt-5 capitalize md:col-span-1 md:row-start-auto md:mt-0 md:grid md:grid-flow-col md:place-content-center md:border-none md:pt-0`}
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
        <div className="hidden md:block">
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
