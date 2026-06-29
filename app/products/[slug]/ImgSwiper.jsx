"use client"
import Image from "next/image"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

export default function ImgSwiper({ data, title }) {
  return (
    <Swiper
      className="max-w-full self-start rounded-md [&_.swiper-pagination]:left-2!"
      modules={[Pagination]}
      pagination
      loop
    >
      {data.map((img, index, arr) => (
        <SwiperSlide key={img.url}>
          <Image
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "low"}
            loading={index === 0 ? "eager" : "lazy"}
            quality={100}
            alt={title}
            src={img.url}
            placeholder="blur"
            blurDataURL={img.lqip}
            width={400}
            height={400}
            className={`aspect-square w-full cursor-grab object-cover object-top select-none active:cursor-grabbing ${index === 0 && "rounded-l-md"} ${index === arr.length - 1 && "rounded-r-md"}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
