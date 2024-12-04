import { Suspense } from "react"
import HeaderImage from "./HeaderImage"
import Carousel from "./Carousel"
import Sections from "./Sections"
import { Quagera } from "@/components/logoFont"
import CarouselLoading from "@/components/loadings/CarouselLoading"
import ProductsLoading from "@/components/loadings/ProductsLoading"

export const experimental_ppr = true

export default function Home() {
  return (
    <>
      <header className="relative flex min-h-[95vh] w-full items-center bg-[#111] before:absolute before:z-[2] before:h-full before:w-full before:bg-gradient-to-l before:from-transparent before:to-[#111]/90">
        <Suspense fallback="">
          <HeaderImage />
        </Suspense>
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
          <Suspense fallback={<CarouselLoading />}>
            <Carousel />
          </Suspense>
        </div>
        <Suspense fallback={<ProductsLoading />}>
          <Sections />
        </Suspense>
      </div>
    </>
  )
}
