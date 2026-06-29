import sanity from "@/lib/server/sanity"
import Image from "next/image"

export default async function HeaderImage() {
  const img = await sanity.fetch(`
      *[_type=="headerImage"][0]{"image":image.asset->{url,"lqip":metadata.lqip}}
  `)
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
