"use client"
import { useEffect, useState } from "react"

export default function UserId() {
  const [userId, setUserId] = useState("")
  useEffect(() => {
    setUserId(
      document.cookie.includes("userId")
        ? document.cookie.split("; ")[0].split("=")[1]
        : Math.random().toString().split(".")[1],
    )
  }, [])
  return <input type="hidden" name="userId" value={userId} />
}
