"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import Image from "next/image"
import { urlFor } from "@/components/sanity"

export default function ImagesSwiper({ images }) {
  return (
    <Swiper
      pagination={{ type: "fraction" }}
      modules={[Pagination]}
      className="w-full max-w-md md:max-w-full aspect-square rounded-md text-white"
    >
      {images.map(all => (
        <SwiperSlide key={all._id} className="cursor-grab">
          <Image
            alt={all._id}
            placeholder="blur"
            blurDataURL={all.metadata.lqip}
            src={urlFor(all._id)}
            className="select-none aspect-square object-cover object-top"
            sizes="(max-width: 540px) 60vw, (max-width: 768px) 70vw, (max-width: 1200px) 90vw"
            width={500}
            height={500}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
