import { query } from "@/lib/server/sanity"
import Image from "next/image"

export default async function HeaderImage() {
  const { image } = await query(
    `*[_type=="headerImage"][0]{image{asset->{url,metadata{lqip}}}}`,
    null,
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
      className="object-cover object-[0%_70%] select-none [clip-path:none] sm:z-4 sm:[clip-path:polygon(60%_0%,100%_0%,100%_100%,35%_100%)]"
      alt={"Ratan Bandhej"}
    />
  )
}
