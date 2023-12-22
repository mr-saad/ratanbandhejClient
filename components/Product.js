import Image from "next/image"
import Link from "next/link"
import { urlFor } from "./sanity"

export default function Product({ slug, image, title, home }) {
  return (
    <Link
      prefetch={home ? false : true}
      className="relative rounded-md overflow-hidden"
      href={`/products/${slug}`}
    >
      <Image
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
        alt={slug}
        placeholder="blur"
        blurDataURL={image.metadata.lqip}
        src={urlFor(image._id)}
        width={400}
        height={400}
        loading="eager"
        className="object-top object-cover aspect-square w-full"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-[#111] to-transparent">
        <h2 className="text-base font-semibold text-white capitalize">
          {title}
        </h2>
      </div>
    </Link>
  )
}
