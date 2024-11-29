import getProducts from "@/lib/getProducts"
import CarouselClient from "./CarouselClient"

export default async function Carousel() {
  const data = await getProducts({ count: 4 })
  return <CarouselClient data={data} />
}
