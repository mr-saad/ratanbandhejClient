"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

export default function ImgSwiper({ data, title }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted ? (
        <Swiper
          className="aspect-square w-full sm:rounded-md [&_.swiper-pagination]:left-2!"
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {data.map((img, index, arr) => (
            <SwiperSlide key={img.url}>
              <Image
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
                quality={100}
                sizes="(max-width:768px) 100vw, 50vw"
                alt={title}
                src={`${img.url}?w=640&auto=format`}
                placeholder="blur"
                blurDataURL={img.lqip}
                width={400}
                height={400}
                style={{ maxWidth: "100%", maxHeight: "auto" }}
                className={`aspect-square w-full cursor-grab object-cover object-top select-none active:cursor-grabbing ${index === 0 && "sm:rounded-l-md"} ${index === arr.length - 1 && "sm:rounded-r-md"}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div
          className="aspect-square w-full sm:rounded-md animate-pulse bg-current opacity-10"
          style={{ backgroundImage: data[0]?.lqip ? `url(${data[0].lqip})` : undefined, backgroundSize: "cover" }}
        />
      )}
    </>
  )
}

