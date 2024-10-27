"use client"
import Image from "next/image"
import { Navigation, Scrollbar } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import { urlFor } from "@/lib/sanity"

export default function ImgSwiper({ data, title }) {
  return data ? (
    <Swiper
      className="max-w-full self-start rounded-md"
      modules={[Navigation, Scrollbar]}
      navigation
      scrollbar={{ draggable: true }}
    >
      {data.map((img, index, arr) => (
        <SwiperSlide key={img._id}>
          <Image
            quality={100}
            alt={title}
            src={urlFor(img).width(600).quality(100).url()}
            placeholder="blur"
            blurDataURL={img.metadata.lqip}
            width={600}
            height={600}
            className={`aspect-square max-w-full cursor-grab select-none object-cover object-top active:cursor-grabbing ${index === 0 && "rounded-l-md"} ${index === arr.length - 1 && "rounded-r-md"}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null
}
