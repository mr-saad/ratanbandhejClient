import { getHeaderImage } from "@/lib/getHeaderImage"
import Image from "next/image"

export default async function HeaderImage() {
  const { image } = await getHeaderImage()

  return (
    <Image
      priority
      quality={100}
      loading="eager"
      placeholder="blur"
      blurDataURL={image.asset.metadata.lqip}
      fill
      sizes={`(max-width: 640px) 200px,
        (max-width: 1024px) 400px,
        (max-width: 1200px) 600px,
        800px`}
      src={image.asset.path}
      className="select-none object-cover object-top md:object-center"
      alt={"Ratan Bandhej"}
    />
  )
}
