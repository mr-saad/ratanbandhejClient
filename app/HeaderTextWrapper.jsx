"use client"

import dynamic from "next/dynamic"

const HeaderText = dynamic(() => import("./HeaderText"), { ssr: false })

export default function HeaderTextWrapper() {
  return <HeaderText />
}
