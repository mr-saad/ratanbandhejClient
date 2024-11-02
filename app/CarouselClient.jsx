"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { motion } from "framer-motion"
import "swiper/css"
import "swiper/css/pagination"
import Link from "next/link"

export default function CarouselClient({ data }) {
  return (
    <Swiper
      spaceBetween={50}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 4500 }}
      className="cursor-grab active:cursor-grabbing"
    >
      {data.map((prod) => (
        <SwiperSlide
          key={prod._id}
          className="!grid select-none items-center gap-4 md:grid-cols-2"
        >
          <motion.div
            initial={{
              x: 50,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <h2 className="highlight text-2xl font-semibold">{prod.title}</h2>
            <p className="mb-2 line-clamp-2">{prod.description}</p>
            <Link href={"/products/" + prod.slug} className="btn inline-block">
              View More
            </Link>
          </motion.div>
          {prod.image && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              transition={{ delay: 0, duration: 0, ease: "easeOut" }}
              className="md:justify-self-end"
            >
              <Image
                className="aspect-square max-w-full rounded-md object-cover object-top"
                src={prod.image.path}
                sizes={`(max-width: 640px) 200px,
                (max-width: 1024px) 400px,
                (max-width: 1920px) 600px,
                800px`}
                alt={prod.title}
                placeholder="blur"
                blurDataURL={prod.image.metadata.lqip}
                width={400}
                height={400}
              />
            </motion.div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
