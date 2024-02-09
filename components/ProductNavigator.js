"use client"
import Link from "next/link"

export default function ProductNavigator({ children, href }) {
  return (
    <Link
      className="relative rounded-md overflow-hidden"
      onClick={() => window.scrollTo({ top: 0 })}
      href={href}
    >
      {children}
    </Link>
  )
}
