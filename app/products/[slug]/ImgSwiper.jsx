"use client"
import Image from "next/image"
import { Navigation, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"

export default function ImgSwiper({ data, title }) {
  return data ? (
    <Swiper
      className="max-w-full self-start rounded-md"
      modules={[Navigation, Scrollbar]}
      navigation
      scrollbar={{ draggable: true }}
    >
      {data.map((img, index, arr) => (
        <SwiperSlide key={img.path}>
          <Image
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "low"}
            loading={index === 0 ? "eager" : "lazy"}
            quality={100}
            alt={title}
            src={img.path}
            placeholder="blur"
            blurDataURL={img.metadata.lqip}
            width={400}
            height={400}
            className={`aspect-square cursor-grab object-cover object-top select-none active:cursor-grabbing ${index === 0 && "rounded-l-md"} ${index === arr.length - 1 && "rounded-r-md"}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null
}
