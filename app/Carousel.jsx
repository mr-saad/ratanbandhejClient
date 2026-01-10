"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import { motion } from "framer-motion"
import Link from "next/link"
import "swiper/css"
import "swiper/css/pagination"

export default function Carousel({ data }) {
  return (
    <Swiper
      spaceBetween={50}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 4500 }}
      loop={true}
      className="cursor-grab active:cursor-grabbing"
    >
      {data.map((prod) => (
        <SwiperSlide
          key={prod._id}
          className="grid! items-center gap-4 select-none md:grid-cols-2"
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
            <h2 className="highlight text-2xl font-semibold tracking-tight capitalize">
              {prod.title}
            </h2>
            <p className="mb-2 line-clamp-2">{prod.description}</p>
            <Link
              prefetch
              href={"/products/" + prod.slug}
              className="btn inline-block"
            >
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
                quality={60}
                className="aspect-square w-full rounded-md object-cover object-top"
                src={prod.image.path}
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
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
