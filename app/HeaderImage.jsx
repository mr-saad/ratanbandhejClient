import sanity from "@/lib/server/sanity"
import Image from "next/image"

export default async function HeaderImage() {
  const { image } = await sanity.fetch(
    `*[_type=="headerImage"][0]{image{asset->{url,metadata{lqip}}}}`,
  )
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
      src={image.asset.url}
      className="object-cover select-none"
      alt={"Ratan Bandhej"}
    />
  )
}
