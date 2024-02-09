"use client"
import Link from "next/link"

export default function Navigate({ href, className, children }) {
  return (
    <Link
      onClick={() => window.scrollTo({ top: 0 })}
      shallow={true}
      className={"btn " + (className ? className : "")}
      href={href}
    >
      {children}
    </Link>
  )
}
