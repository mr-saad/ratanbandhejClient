"use client"

import cancelOrder from "@/lib/actions/cancelOrder"
import { useState } from "react"
export default function CancelOrder({ _id }) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const onClick = async () => {
    setLoading(true)
    const warn = confirm("The Order you placed will be canceled. Sure?")
    if (warn) {
      const res = await cancelOrder(_id)
      setLoading(false)
      if (!res.ok) {
        setMessage(res.message)
      }
    }
    setLoading(false)
  }

  return (
    <>
      <button
        onClick={onClick}
        disabled={loading}
        className="btn mt-1 disabled:opacity-50"
      >
        Cancel
      </button>
      {message !== "" && <p className="mt-2">{message}</p>}
    </>
  )
}
