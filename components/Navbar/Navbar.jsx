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
      className={`nav fixed inset-x-2 top-2 z-12 grid grid-cols-[1fr_2fr_1fr] items-center justify-between rounded-xl bg-gray-200/70 px-5 py-2 backdrop-blur-xl select-none md:text-base dark:bg-gray-200/50`}
    >
      <MenuToggler />
      <Link
        prefetch
        aria-label="Home"
        title="Ratan Bandhej"
        href="/"
        className={
          "w-max justify-self-center text-[2.2rem] font-bold text-black md:justify-self-start " +
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
