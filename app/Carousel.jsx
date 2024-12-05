import getProducts from "@/lib/getProducts"
import CarouselClient from "./CarouselClient"
import { unstable_noStore } from "next/cache"

export default async function Carousel() {
  unstable_noStore()
  const data = await getProducts({ count: 4 }, "no-store")
  return <CarouselClient data={data} />
}
