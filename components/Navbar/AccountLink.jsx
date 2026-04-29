"use client"

import useRatanContext from "@/lib/hooks/useRatanContext"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import Button from "../ui/Button"
import signOut from "@/lib/actions/signOut"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export default function AccountLink() {
  const [loading, setLoading] = useState(false)
  const { auth, setCart, setAuth } = useRatanContext()
  const pathname = usePathname()
  const { prefetch } = useRouter()

  const onSignOut = async () => {
    prefetch("/sign-in")
    setLoading(true)
    const warn = confirm(
      "You'll be Signed Out. You have to Sign In again to place an order. Sure?",
    )
    if (warn) {
      setCart([])
      setAuth({})
      await signOut()
    }
    setLoading(false)
  }

  return auth.status ? (
    <DropdownMenu className="relative py-2 md:py-0">
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className={
              "px-0 font-normal normal-case hover:bg-white/50 focus-visible:bg-white/50 sm:px-4"
            }
          >
            {auth.username ? auth.username : "Guest User"}
          </Button>
        }
      />
      <DropdownMenuContent
        className={"bg-white shadow ring-0 dark:bg-stone-950"}
      >
        <DropdownMenuItem>
          <Link href={"/profile"}>Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/orders"}>Orders</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            disabled={loading}
            onClick={onSignOut}
            type="button"
            variant={"danger"}
          >
            <span className="flex items-center justify-center gap-1">
              <LogOut />
              Sign Out
            </span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
