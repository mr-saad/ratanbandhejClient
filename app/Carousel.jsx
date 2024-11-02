import getProducts from "@/lib/getProducts"
import dynamic from "next/dynamic"

const CarouselClient = dynamic(() => import("./CarouselClient"))

export default async function Carousel() {
  const data = await getProducts({ count: 4 })
  return <CarouselClient data={data} />
}
