"use client"

import { RatanContext } from "@/components/Provider"
import { useContext } from "react"

// import { useFormStatus } from "react-dom"

export default function RegisterButton() {
  //   const { pending } = useFormStatus()

  const { setShowOrderLink } = useContext(RatanContext)

  return (
    <button
      //   disabled={pending}
      onClick={() => {
        setShowOrderLink(true)
      }}
      className="btn mr-3"
      type="submit"
    >
      Register
    </button>
  )
}
