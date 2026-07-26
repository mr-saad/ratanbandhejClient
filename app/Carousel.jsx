import sanity from "@/lib/server/sanity"
import dynamic from "next/dynamic"
const CarouselSwiper = dynamic(() => import("./CarouselSwiper"))
// import CarouselSwiper from "./CarouselSwiper"

export default async function Carousel() {
  const newArrivals = await sanity.fetch(`
    *[_type=="product"]|order(_createdAt desc)[0..4]{
      _id,title,description,"slug": slug.current,"image":images[0].asset->{url,"lqip":metadata.lqip}
    }
    `)
  return <CarouselSwiper newArrivals={newArrivals} />
}
