"use client"

import dynamic from "next/dynamic"

const CarouselClient = dynamic(() => import("./CarouselClient"), { ssr: false })

export default function CarouselClientWrapper({ data }) {
  return <CarouselClient data={data} />
}
