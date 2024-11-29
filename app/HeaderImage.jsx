import { getHeaderImage } from "@/lib/getHeaderImage"
import Image from "next/image"

export default async function HeaderImage() {
  const { image } = await getHeaderImage()

  return (
    <Image
      priority
      fetchPriority="high"
      quality={60}
      loading="eager"
      placeholder="blur"
      blurDataURL={image.asset.metadata.lqip}
      fill
      sizes="100vw"
      src={image.asset.path}
      className="select-none object-cover object-top md:object-center"
      alt={"Ratan Bandhej"}
    />
  )
}
