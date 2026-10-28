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
  // border border-black/10
  return variant === "list" ? (
    <Link
      title={title}
      className={cn(
        "group flex overflow-clip rounded-md transition-all focus-within:shadow-lg outline-none hover:shadow-lg",
        className,
      )}
      prefetch
      href={`/products/${slug}`}
    >
      <div className="overflow-clip shrink-0 w-30 md:w-3xs">
        {image && (
          <Image
            quality={60}
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "low"}
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
            alt={slug}
            placeholder="blur"
            blurDataURL={image.lqip}
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              maxHeight: "100%",
              maxWidth: "auto"
            }}
            src={`${image.url}?w=480&auto=format`}
            width={300}
            height={300}
            className="aspect-square scale-105 object-cover object-top transition duration-300 ease-in-out will-change-transform group-focus-within:scale-100 group-hover:scale-100"
          />
        )}
      </div>
      <div className="content-center p-2 md:p-5">
        <h2 className="highlight line-clamp-3 font-serif leading-tight text-pretty capitalize md:text-2xl">
          {title}
        </h2>
        <p className="line-clamp-2 text-sm">{description}</p>
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
            sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw, 25vw"
            alt={slug}
            placeholder="blur"
            blurDataURL={image.lqip}
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            src={`${image.url}?w=480&auto=format`}
            width={400}
            height={400}
            className="aspect-square scale-105 object-cover object-top transition duration-300 ease-in-out will-change-transform group-focus-within:scale-100 group-hover:scale-100"
          />
        )}
        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-[#111]/80 to-transparent p-2 opacity-0 transition-all group-focus-within:opacity-100 group-hover:opacity-100 md:p-5">
          <h2 className="font-serif text-sm text-white capitalize md:text-base leading-[1.1]">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  )
}
