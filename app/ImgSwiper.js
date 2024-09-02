"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Keyboard, Navigation, Scrollbar } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import Image from "next/image"
import Product from "@/components/Product"

export default function ImgSwiper({ data, isImages }) {
  return (
    <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      grabCursor
      loop
      slidesPerView={1}
      className="max-w-full self-start overflow-hidden rounded"
      modules={[Navigation, Scrollbar, Keyboard, Autoplay]}
      keyboard
      navigation
      scrollbar={{
        draggable: true,
      }}
    >
      {isImages
        ? data.images.map((props) => (
            <SwiperSlide key={props._id}>
              <Image
                src={props.url}
                alt={props.title}
                width={400}
                className="aspect-square select-none object-cover object-top"
                height={400}
              />
            </SwiperSlide>
          ))
        : data.map((props) => (
            <SwiperSlide key={props._id}>
              <Product {...props} />
            </SwiperSlide>
          ))}
    </Swiper>
  )
}
