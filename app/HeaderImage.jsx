import Image from "next/image"

export default async function HeaderImage({ img }) {
  return (
    <Image
      priority
      fetchPriority="high"
      quality={60}
      loading="eager"
      placeholder="blur"
      blurDataURL={img.image.lqip}
      fill
      sizes="100vw"
      src={img.image.url}
      className="object-cover select-none"
      alt={"Ratan Bandhej"}
    />
  )
}
