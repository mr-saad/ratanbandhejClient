import Image from "next/image"
import Link from "next/link"
import { urlFor } from "./sanity"

<<<<<<< HEAD
export default function Product({ slug, image, title }) {
  return (
    <Link
      prefetch={false}
=======
export default function Product({ slug, image, title, home }) {
  return (
    <Link
      prefetch={home ? false : true}
>>>>>>> 536726c (git cli)
      className="relative overflow-hidden rounded-md product"
      href={`/products/${slug}`}
    >
      <Image
        priority={false}
        loading="lazy"
        sizes="(max-width: 540px) 60vw, (max-width: 768px) 70vw, (max-width: 1200px) 80vw"
        alt={title}
        placeholder="blur"
        blurDataURL={image.metadata.lqip}
        src={urlFor(image._id)}
        width={500}
        height={500}
        className="object-top object-cover aspect-square select-none"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black from-[-100%] to-transparent">
        <h2 className="text-base font-medium text-white capitalize">{title}</h2>
      </div>
    </Link>
  )
}
