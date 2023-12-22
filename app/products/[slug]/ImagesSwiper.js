import Image from "next/image"
import { urlFor } from "@/components/sanity"

export default function ImagesSwiper({ images, title }) {
  return (
    <div className="overflow-x-auto border whitespace-nowrap aspect-square snap-x snap-mandatory rounded-md">
      <Image
        loading="eager"
        fetchPriority="high"
        alt={title + " 1"}
        placeholder="blur"
        blurDataURL={images[0].metadata.lqip}
        src={urlFor(images[0]._id)}
        className="select-none w-full h-full object-cover object-top inline snap-start"
        sizes="(max-width: 768px) 90vw, 40vw"
        width={400}
        height={400}
      />
      {images.slice(1).map((all, index) => (
        <Image
          key={all._id}
          alt={title + ` ${index + 2}`}
          placeholder="blur"
          blurDataURL={all.metadata.lqip}
          src={urlFor(all._id)}
          className="select-none w-full h-full object-top object-cover inline snap-start"
          sizes="(max-width: 768px) 90vw, 40vw"
          width={400}
          height={400}
        />
      ))}
    </div>
  )
}
