"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import cn from "@/lib/cn"

export default function Product({
  slug,
  image,
  title,
  description,
  index,
  variant,
  className,
}) {
  return variant === "list" ? (
    <motion.div layout>
      <Link
        title={title}
        className={cn(
          "group grid grid-cols-[1fr_2fr] overflow-hidden rounded-md border border-black/10 outline-rose-900 focus-within:outline-2 dark:border-white/10",
          className,
        )}
        prefetch
        href={`/products/${slug}`}
      >
        <div className="overflow-clip">
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
              width={200}
              height={200}
              className="aspect-square h-full w-full object-cover object-top transition duration-300 ease-in-out will-change-transform group-focus-within:scale-105 group-hover:scale-105"
            />
          )}
        </div>
        <div className="content-center p-5">
          <h2 className="highlight capitalize">{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </motion.div>
  ) : (
    <motion.div
      layout
      className={cn(
        "group relative overflow-hidden rounded-md outline-rose-900 focus-within:outline-2",
        className,
      )}
    >
      <Link title={title} prefetch href={`/products/${slug}`}>
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
            className="aspect-square w-full object-cover object-top transition duration-300 ease-in-out will-change-transform group-focus-within:scale-105 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-[#111]/80 to-transparent p-5">
          <h2 className="text-white capitalize">{title}</h2>
        </div>
      </Link>
    </motion.div>
  )
}
