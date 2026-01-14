import HeaderImage from "./HeaderImage"
import Carousel from "./Carousel"
import Sections from "./Sections"
import { Quagera } from "@/components/logoFont"
import getProducts from "@/lib/getProducts"
import { Suspense } from "react"
import CarouselLoading from "@/components/loadings/CarouselLoading"
import ProductsLoading from "@/components/loadings/ProductsLoading"
import ProductCarousel from "./AiCarousel"

export const revalidate = 3600

export default async function Home() {
  const data = await getProducts({ count: 4 })

  return (
    <>
      <header className="relative flex min-h-[95vh] w-full items-center bg-stone-700 before:absolute before:z-2 before:h-full before:w-full before:bg-linear-to-l before:from-transparent before:to-[#111]/90">
        <Suspense fallback={""}>
          <HeaderImage />
        </Suspense>
        <div className="z-10 px-5 text-white md:px-20">
          <h1
            className={
              "font-serif text-7xl [text-shadow:0_0_10px_rgba(0,0,0,0.5)]"
              // Quagera.className
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
          {/* <ProductCarousel /> */}
          <h1 className="heading arrivals my-5 text-4xl!">Fresh Crafts</h1>
          <Suspense fallback={<CarouselLoading />}>
            <Carousel data={data} />
          </Suspense>
        </div>
        <Suspense fallback={<ProductsLoading />}>
          <Sections />
        </Suspense>
      </div>
    </>
  )
}
