import Image from "next/image"

export default function ImagesSwiper({ images, title }) {
  return (
    <div className="overflow-x-auto whitespace-nowrap snap-x snap-mandatory rounded-md self-start">
      <Image
        loading="eager"
        priority
        alt={title + " 1"}
        placeholder="blur"
        blurDataURL={images[0].metadata.lqip}
        src={images[0].url}
        className="select-none w-full aspect-square object-cover object-top inline snap-center"
        sizes="(max-width: 768px) 90vw, 40vw"
        width={400}
        height={400}
      />
      {images.slice(1).map((image, index) => (
        <Image
          key={image._id}
          alt={title + ` ${index + 2}`}
          placeholder="blur"
          blurDataURL={image.metadata.lqip}
          src={image.url}
          className="select-none w-full aspect-square object-top object-cover inline snap-center"
          sizes="(max-width: 768px) 90vw, 40vw"
          width={400}
          height={400}
        />
      ))}
    </div>
  )
}
