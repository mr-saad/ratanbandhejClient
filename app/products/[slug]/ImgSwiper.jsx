"use client"
import Image from "next/image"
import { Navigation, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"

export default function ImgSwiper({ data, title }) {
  return (
    <Swiper
      className="max-w-full self-start rounded-md"
      modules={[Navigation, Scrollbar]}
      navigation
      scrollbar={{ draggable: true }}
    >
      {data.map((img, index, arr) => (
        <SwiperSlide key={img._id} className="">
          <Image
            alt={title}
            src={img.url}
            placeholder="blur"
            blurDataURL={img.metadata.lqip}
            width={500}
            height={500}
            className={`aspect-square max-w-full cursor-grab select-none object-cover object-top active:cursor-grabbing ${index === 0 && "rounded-l-md"} ${index === arr.length - 1 && "rounded-r-md"}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
