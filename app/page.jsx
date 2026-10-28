import HeaderImage from "./HeaderImage"
import Carousel from "./Carousel"
import Sections from "./Sections"
import { quagera } from "@/lib/utils/quagera"
import HeroCategories from "./HeroCategories"

export const revalidate = 86400

export default function Home() {
  return (
    <>
      <HeroCategories />
      <div className="Container mx-auto pt-0!">
        <div className="home mb-10 overflow-hidden">
          <h1 className="heading arrivals mt-5 mb-2 text-4xl!">New Arrivals</h1>
          <Carousel />
        </div>
        <Sections />
      </div>
      <header className="relative before:transition-colors before:duration-300 flex h-[95vh] items-center before:absolute before:z-2 before:h-full before:w-full before:bg-linear-to-b before:from-transparent before:to-rose-50 dark:before:to-[#130006]">
        <HeaderImage />
        <div className="z-10 mx-auto grow px-5 text-black dark:text-white lg:max-w-7xl">
          <h1
            className={`${quagera.className} text-7xl font-bold [text-shadow:0_0_10px_rgba(0,0,0,0.5)]`}
          >
            Ratan Bandhej
          </h1>
          <p className="text-2xl leading-none">
            One Place For All Your Bandhani Needs
          </p>
        </div>
      </header>
    </>
  )
}
