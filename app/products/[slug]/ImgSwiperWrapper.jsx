"use client"

import dynamic from "next/dynamic"

const ImgSwiper = dynamic(() => import("./ImgSwiper"), {
  ssr: false,
  loading: () => <div className="min-h-[335px] max-w-full"></div>,
})

export default function ImgSwiperWrapper({ data, title }) {
  return <ImgSwiper data={data} title={title} />
}
