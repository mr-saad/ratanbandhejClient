import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import MenuToggler from "./MenuToggler"
import Links from "./Links"
import CartLink from "./CartLink"
import AccountLink from "./AccountLink"

export default function Navbar() {
  return (
    <nav
      className={`nav fixed inset-x-2 top-2 z-12 grid grid-cols-[1fr_2fr_1fr] items-center justify-between rounded-md bg-stone-100/80 px-5 py-3 select-none md:text-base`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        className="hidden"
      >
        <defs>
          <filter id="svgfm-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="1"
              result="turb"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="3"
              result="blurred"
            ></feGaussianBlur>
            <feDisplacementMap
              in="blurred"
              in2="turb"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
            ></feDisplacementMap>
          </filter>
        </defs>
      </svg>
      <MenuToggler />
      <Link
        prefetch
        aria-label="Home"
        title="Ratan Bandhej"
        href="/"
        className={
          "font-quagera w-max justify-self-center text-3xl font-bold text-stone-950 md:justify-self-start md:text-4xl"
        }
      >
        Ratan Bandhej
      </Link>
      <ul
        className={`col-span-3 row-start-2 hidden grid-flow-row pt-5 md:col-span-1 md:row-start-auto md:mt-0 md:grid md:grid-flow-col md:place-content-center md:border-none md:pt-0`}
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
