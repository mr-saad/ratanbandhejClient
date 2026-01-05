"use client"

import SignOutBtn from "@/app/profile/SignOutBtn"
import useRatanContext from "@/lib/hooks/useRatanContext"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function AccountLink() {
  const [dropdown, setDropdown] = useState(false)
  const { auth } = useRatanContext()
  const pathname = usePathname()

  return auth.status ? (
    <div className="relative py-2 text-white/60 md:py-0">
      <button
        onClick={() => setDropdown((prev) => !prev)}
        className="btn-secondary border-white! text-white! normal-case!"
      >
        {auth.username ? auth.username : "Guest User"}
      </button>
      {dropdown && (
        <div className="top-13 right-0 mt-2 grid w-max rounded-xl border-white/10 from-red-800 to-red-600 px-5 md:absolute md:border md:bg-linear-45 md:shadow-md">
          <Link
            onClick={() => setDropdown(false)}
            prefetch
            className={`flex items-center gap-1 border-white/10 py-2 transition hover:text-white focus-visible:text-white md:border-b`}
            href={"/profile"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 20a6 6 0 0 0-12 0" />
              <circle cx="12" cy="10" r="4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            Profile
          </Link>
          <Link
            onClick={() => setDropdown(false)}
            prefetch
            className={`flex items-center gap-1 border-white/10 py-2 transition hover:text-white focus-visible:text-white md:border-b`}
            href={"/orders"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
              <path d="M12 22V12" />
              <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" />
              <path d="m7.5 4.27 9 5.15" />
            </svg>
            Orders
          </Link>
          <SignOutBtn />
        </div>
      )}
    </div>
  ) : (
    <Link
      prefetch
      className={`block py-2 text-white transition hover:opacity-100 md:inline md:px-2 md:py-0 ${
        pathname.includes("/create-account") ? "opacity-100" : "opacity-60"
      }`}
      href={"/create-account"}
    >
      Sign Up
    </Link>
  )
}
