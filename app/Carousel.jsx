import getProducts from "@/lib/getProducts"
import CarouselClientWrapper from "./CarouselClientWrapper"

export default async function Carousel() {
  const data = await getProducts({ count: 4 })
  return <CarouselClientWrapper data={data} />
}
