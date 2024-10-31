import { getHeaderImage } from "@/lib/getHeaderImage"
import Image from "next/image"

export default async function HeaderImage() {
  const { image } = await getHeaderImage()
  return (
    <Image
      priority
      quality={65}
      loading="eager"
      placeholder="blur"
      blurDataURL={image.asset.metadata.lqip}
      sizes="100vw"
      fill
      src={image.asset.url}
      className="select-none object-cover object-top md:object-center"
      alt={"Ratan Bandhej"}
    />
  )
}
