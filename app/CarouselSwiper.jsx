"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Button from "@/components/ui/Button"

export default function CarouselSwiper({ newArrivals }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div suppressHydrationWarning>
      {mounted ? (
        <Swiper
          spaceBetween={50}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4500 }}
          loop={true}
          className="cursor-grab active:cursor-grabbing"
        >
          {newArrivals.map((prod) => (
            <SwiperSlide
              key={prod._id}
              className="grid! items-center gap-5 select-none md:grid-cols-2"
            >
              <div>
                <h2 className="highlight font-serif text-xl capitalize">
                  {prod.title}
                </h2>
                <p className="mb-2 line-clamp-2">{prod.description}</p>
                <Button prefetch={true} href={"/products/" + prod.slug}>
                  View More
                </Button>
              </div>
              {prod.image && (
                <div className="md:justify-self-end">
                  <Image
                    className="aspect-square w-full rounded-md object-cover object-top"
                    src={`${prod.image.url}?w=640&auto=format`}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                    alt={prod.title}
                    placeholder="blur"
                    blurDataURL={prod.image.lqip}
                    width={400}
                    height={400}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid animate-pulse gap-12.5 lg:grid-cols-2">
          {[0, 1].map((i) => (
            <div
              key={i}
              className={`grid items-center gap-5 md:grid-cols-2 ${i === 1 ? "hidden lg:grid" : ""}`}
            >
              <div className="space-y-3">
                <div className="h-6 w-48 rounded bg-current opacity-10" />
                <div className="h-4 w-full rounded bg-current opacity-10" />
                <div className="h-4 w-3/4 rounded bg-current opacity-10" />
                <div className="h-9 w-28 rounded bg-current opacity-10" />
              </div>
              <div className="w-full md:justify-self-end">
                <div className="aspect-square w-full rounded-md bg-current opacity-10" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
