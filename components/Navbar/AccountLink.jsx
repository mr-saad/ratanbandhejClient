"use client"

import useRatanContext from "@/lib/hooks/useRatanContext"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AccountLink() {
  const { auth } = useRatanContext()
  const pathname = usePathname()
  return auth.status ? (
    <li className="md:inline">
      <Link
        prefetch
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
        prefetch
        shallow={true}
        className={`block py-2 transition hover:opacity-100 md:inline md:px-2 md:py-0 ${
          pathname.includes("/create-account") ? "opacity-100" : "opacity-60"
        }`}
        href={"/create-account"}
      >
        Create Account
      </Link>
    </li>
  )
}
