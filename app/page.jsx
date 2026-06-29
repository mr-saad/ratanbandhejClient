import { Suspense } from "react"
import HeaderImage from "./HeaderImage"
import Carousel from "./Carousel"
import { Quagera } from "@/components/logoFont"
import Sections from "./Sections"
import ProductsLoading from "@/components/loadings/ProductsLoading"
import CarouselLoading from "@/components/loadings/CarouselLoading"

export default function Home() {
  return (
    <>
      <header className="relative flex min-h-[95vh] items-center before:absolute before:z-2 before:h-full before:w-full before:bg-linear-to-r before:from-stone-950/90 before:to-transparent">
        <Suspense fallback={""}>
          <HeaderImage />
        </Suspense>
        <div className="z-10 mx-auto grow px-5 text-white lg:max-w-7xl">
          <h1
            className={
              "text-7xl font-bold [text-shadow:0_0_10px_rgba(0,0,0,0.5)] " +
              Quagera.className
            }
          >
            Ratan Bandhej
          </h1>
          <p className="text-2xl leading-none">
            One Place For All Your Bandhani Needs
          </p>
        </div>
      </header>
      <div className="Container mx-auto">
        <div className="home mb-10 overflow-hidden">
          <h1 className="heading arrivals my-5 text-4xl!">New Arrivals</h1>
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
