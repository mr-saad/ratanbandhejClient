"use client"
import Image from "next/image"
import Link from "next/link"
import cn from "@/lib/utils/cn"

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
    <Link
      title={title}
      className={cn(
        "group grid grid-cols-[1fr_2fr] overflow-hidden rounded-md border border-black/10 outline-stone-700 transition-all focus-within:shadow-lg focus-within:outline-2 hover:shadow-lg dark:border-white/10",
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
        <h2 className="highlight line-clamp-3 font-serif text-pretty capitalize md:text-3xl">
          {title}
        </h2>
        <p className="line-clamp-2">{description}</p>
      </div>
    </Link>
  ) : (
    <div className={cn("group relative overflow-hidden rounded-md", className)}>
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
        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-[#111]/70 to-transparent p-5 opacity-0 transition-all group-focus-within:opacity-100 group-hover:opacity-100">
          <h2 className="font-serif text-white capitalize">{title}</h2>
        </div>
      </Link>
    </div>
  )
}
