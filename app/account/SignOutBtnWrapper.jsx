"use client"

import dynamic from "next/dynamic"

const SignOutBtn = dynamic(() => import("./SignOutBtn"), { ssr: false })

export default function SignOutBtnWrapper() {
  return <SignOutBtn />
}
