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
      className="max-w-full aspect-square rounded-md text-white"
    >
      <SwiperSlide className="cursor-grab">
        <Image
          loading="eager"
          fetchPriority="high"
          alt={images[0]._id}
          placeholder="blur"
          blurDataURL={images[0].metadata.lqip}
          src={urlFor(images[0]._id)}
          className="select-none h-full rounded-s-md"
          style={{ objectFit: "cover", objectPosition: "top" }}
          sizes="(max-width: 768px) 100vw, 50vw"
          width={400}
          height={400}
        />
      </SwiperSlide>
      {images.slice(1).map(all => (
        <SwiperSlide
          key={all._id}
          className="cursor-grab last:rounded-e-md overflow-hidden"
        >
          <Image
            alt={all._id}
            placeholder="blur"
            blurDataURL={all.metadata.lqip}
            src={urlFor(all._id)}
            className="select-none h-full"
            style={{ objectFit: "cover", objectPosition: "top" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            width={400}
            height={400}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
