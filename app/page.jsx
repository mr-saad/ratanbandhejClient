import HeaderText from "./HeaderText"
import { Suspense } from "react"
import Loading from "./loading"
import dynamic from "next/dynamic"
import HeaderImage from "./HeaderImage"

export const revalidate = 3600
export const experimental_ppr = true

const Sections = dynamic(() => import("./Sections"))
const Carousel = dynamic(() => import("./Carousel"))

export default async function Home() {
  return (
    <>
      <header className="relative flex min-h-[95vh] w-full items-center bg-[#111] before:absolute before:z-[2] before:h-full before:w-full before:bg-gradient-to-l before:from-transparent before:to-[#111]/90">
        <Suspense fallback={""}>
          <HeaderImage />
        </Suspense>
        <HeaderText />
      </header>
      <div className="Container mx-auto">
        <div className="home mb-10">
          <h1 className="heading arrivals my-5 !text-4xl">Fresh Crafts</h1>
          <Suspense fallback={<Loading />}>
            <Carousel />
          </Suspense>
        </div>
        <Suspense fallback={<Loading />}>
          <Sections />
        </Suspense>
      </div>
    </>
  )
}
