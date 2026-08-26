"use client"

import useRatanContext from "@/lib/hooks/useRatanContext"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AccountLink() {
  const { auth } = useRatanContext()
  const pathname = usePathname()

  return auth.status ? (
    <Link
      prefetch
      href={"/profile"}
      className={
        "link block py-2 text-stone-500 md:inline md:py-0 dark:text-stone-600"
      }
    >
      {auth.username ? auth.username : "Guest User"}
    </Link>
  ) : (
    <Link
      prefetch
      className={`block py-2 transition hover:text-stone-950 focus-visible:text-stone-950 md:inline md:px-2 md:py-0 ${
        pathname.includes("/create-account")
          ? "text-stone-950"
          : "text-stone-500"
      }`}
      href={"/create-account"}
    >
      Sign Up
    </Link>
  )
}
