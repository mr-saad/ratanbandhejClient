"use client"
import signOut from "@/lib/actions/signOut"
import { useState } from "react"

export default function SignOutBtn() {
  const [loading, setLoading] = useState(false)

  const onSignOut = async () => {
    setLoading(true)
    const warn = confirm(
      "You'll be Signed Out. You have to Sign In again to place an order. Sure?",
    )
    if (warn) await signOut()
    setLoading(false)
  }
  return (
    <button
      disabled={loading}
      onClick={onSignOut}
      className="btn disabled:opacity-50"
      type="button"
    >
      Sign Out
    </button>
  )
}
