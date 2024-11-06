"use client"

import dynamic from "next/dynamic"

const BookForm = dynamic(() => import("./BookForm"), { ssr: false })

export default function BookFormWrapper() {
  return <BookForm />
}
