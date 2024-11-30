import HeaderImage from "./HeaderImage"
import Sections from "./Sections"
import { Quagera } from "@/components/logoFont"
import CarouselClient from "./CarouselClient"
import getProducts from "@/lib/getProducts"

export const revalidate = 3600

export default async function Home() {
  const carousel = await getProducts({ count: 4 })
  const [dupatta, saree, dress, topMaterial] = await Promise.all([
    getProducts({ type: "Dupatta", count: 2 }),
    getProducts({ type: "Saree", count: 2 }),
    getProducts({ type: "Dress", count: 2 }),
    getProducts({ type: "Top Material", count: 2 }),
  ])

  return (
    <>
      <header className="relative flex min-h-[95vh] w-full items-center bg-[#111] before:absolute before:z-[2] before:h-full before:w-full before:bg-gradient-to-l before:from-transparent before:to-[#111]/90">
        <HeaderImage />
        <div className="z-10 px-5 text-white md:px-20">
          <h1
            className={
              "text-7xl font-extrabold [text-shadow:0_0_10px_rgba(0,0,0,0.5)] " +
              Quagera.className
            }
          >
            Ratan Bandhej
          </h1>
          <p className="text-2xl">One Place For All Your Bandhani Needs</p>
        </div>
      </header>
      <div className="Container mx-auto">
        <div className="home mb-10 overflow-hidden">
          <h1 className="heading arrivals my-5 !text-4xl">Fresh Crafts</h1>
          <CarouselClient data={carousel} />
        </div>
        <Sections
          dupatta={dupatta}
          saree={saree}
          dress={dress}
          topMaterial={topMaterial}
        />
      </div>
    </>
  )
}
