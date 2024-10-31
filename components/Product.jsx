"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Product({ slug, image, lqip, title }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      className="relative overflow-hidden rounded-md"
    >
      <Link prefetch={true} href={`/products/${slug}`}>
        {image && (
          <Image
            sizes={`(max-width: 640px) 200px,
               (max-width: 1024px) 400px,
               (max-width: 1920px) 600px,
               800px`}
            alt={slug}
            placeholder="blur"
            blurDataURL={image.metadata.lqip}
            src={image.url}
            width={400}
            height={400}
            className="aspect-square w-full object-cover object-top"
          />
        )}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#111] to-transparent p-4">
          <h2 className="text-base capitalize text-white">{title}</h2>
        </div>
      </Link>
    </motion.div>
  )
}
