import Image from "next/image"
import Link from "next/link"

export default function Product({ slug, image, title, index }) {
  return (
    <Link prefetch className="relative" href={`/products/${slug}`}>
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
          className="aspect-square w-full rounded-md object-cover object-top"
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#111] to-transparent p-4">
        <h2 className="text-base capitalize text-white">{title}</h2>
      </div>
    </Link>
  )
}
