"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Product({ slug, image, title, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      // transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
      className="relative overflow-hidden rounded-md"
    >
      <Link href={`/products/${slug}`}>
        <Image
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
          alt={slug}
          placeholder="blur"
          blurDataURL={image.metadata.lqip}
          src={image.url}
          width={400}
          height={400}
          loading="eager"
          className="aspect-square w-full object-cover object-top"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#111] to-transparent p-4">
          <h2 className="text-base capitalize text-white">{title}</h2>
        </div>
      </Link>
    </motion.div>
  )
}
