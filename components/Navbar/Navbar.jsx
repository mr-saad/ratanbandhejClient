"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RatanSvg from "../RatanSvg";
import FavoritesBtn from "./FavoritesBtn";
import ThemeToggle from "./ThemeToggle";
import OrderLink from "./OrderLink";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav
      className={`nav ${
        pathname === "/" ? "fixed w-full bg-[#111]/90" : "bg sticky bg-[#111]"
      } top-0 z-[12] p-5 dark:border-b dark:border-white/10 md:text-base lg:px-20`}
    >
      <div className="flex select-none items-center justify-between">
        <div
          tabIndex={0}
          className={`z-20 flex h-[12px] flex-col justify-between md:hidden`}
          onClick={openNav}
          onKeyUp={(e) => {
            e.preventDefault();
            if (e.key === "Enter") openNav();
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
          onClick={CloseNav}
          aria-label="Home"
          title="Ratan Bandhej"
          href="/"
        >
          <RatanSvg isNav width={121} height={30} />
        </Link>
        <ul
          className={`fixed left-0 top-[4.4rem] hidden h-auto w-full border-y border-white/10 bg-[#111]/90 p-5 font-semibold text-white shadow shadow-[#111] md:absolute md:left-1/2 md:top-1/2 md:block md:h-auto md:w-auto md:-translate-x-1/2 md:-translate-y-1/2 md:border-none md:bg-[unset] md:shadow-none`}
        >
          <ThemeToggle />
          <Links />
        </ul>
        <FavoritesBtn />
      </div>
    </nav>
  );
}

const Links = () => {
  const pathname = usePathname();
  return (
    <>
      <li className="md:inline">
        <Link
          onClick={CloseNav}
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
              shallow={true}
              onClick={CloseNav}
              className={`block py-2 transition hover:opacity-100 md:inline md:px-2 md:py-0 ${
                pathname.includes(all.url) ? "opacity-100" : "opacity-60"
              }`}
              href={all.url}
            >
              {all.text}
            </Link>
          </li>
        );
      })}
      <OrderLink />
    </>
  );
};

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
  {
    text: "SignUp",
    url: "/sign-up",
  },
];

export const CloseNav = () => {
  document.querySelector("nav ul").classList.remove("flex");
  document.querySelector("nav ul").classList.add("hidden");
  document
    .querySelector(".line1")
    .classList.remove("rotate-45", "translate-y-2");
  document
    .querySelector(".line2")
    .classList.remove("-rotate-45", "-translate-y-[2px]");
};

const openNav = () => {
  ["rotate-45", "translate-y-2"].map((cls) =>
    document.querySelector(".line1").classList.toggle(cls),
  );
  ["-rotate-45", "-translate-y-[2px]"].map((cls) =>
    document.querySelector(".line2").classList.toggle(cls),
  );
  document.querySelector("nav ul").classList.toggle("hidden");
};
