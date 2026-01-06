"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Product({ slug, image, title, index }) {
  return (
    <motion.div
      layout
      className="group relative overflow-hidden rounded-md focus-within:outline-3 focus-within:outline-red-800"
      transition={{
        ease: "linear",
        duration: 0.2,
      }}
      viewport={{
        margin: "-50px",
        once: true,
      }}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
    >
      <Link prefetch href={`/products/${slug}`}>
        {image && (
          <Image
            quality={60}
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "low"}
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
            alt={slug}
            placeholder="blur"
            blurDataURL={image.metadata.lqip}
            src={image.path}
            width={400}
            height={400}
            className="h-full w-full object-cover object-top transition duration-300 ease-in-out will-change-transform group-focus-within:scale-105 group-hover:scale-105"
          />
        )}
        <div className="bg-linear-to-45 absolute inset-0 flex flex-col justify-end from-[#111]/80 to-transparent p-4">
          <h2 className="text-base text-white capitalize">{title}</h2>
        </div>
      </Link>
    </motion.div>
  )
}
