import HeaderImage from "./HeaderImage"
import Carousel from "./Carousel"
// import Sections from "./Sections"
import { Quagera } from "@/components/logoFont"
import getHomePage from "@/lib/server/getHomePage"
import Button from "@/components/ui/Button"
import { ChevronRight } from "lucide-react"
import ProductGrid from "@/components/ui/ProductGrid"
import Product from "@/components/ui/Product"
import { object } from "zod"
// import getProducts from "@/lib/server/getProducts"
// import { Suspense } from "react"
// import CarouselLoading from "@/components/loadings/CarouselLoading"
// import ProductsLoading from "@/components/loadings/ProductsLoading"

export const revalidate = 3600

export default async function Home() {
  const data = await getHomePage()

  return (
    <>
      <header className="heroPattern relative flex min-h-[95vh] items-center before:absolute before:z-2 before:h-full before:w-full before:bg-linear-to-r before:from-stone-950/90 before:to-transparent">
        {/* <Suspense fallback={""}>*/}
        <HeaderImage img={data.headerImage} />
        {/* </Suspense>*/}
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
          {/* <Suspense fallback={<CarouselLoading />}>*/}
          <Carousel newArrivals={data.newArrivals} />
          {/* </Suspense>*/}
        </div>
        {/* <Suspense fallback={<ProductsLoading />}>*/}
        {data?.sections
          ? data.sections.map((section, idx, arr) => {
              const [[title, products]] = Object.entries(section)
              return <Section key={title} title={title} data={section[title]} />
            })
          : null}
        {/* </Suspense>*/}
      </div>
    </>
  )
}

function Section({ title, data }) {
  return (
    <div className="my-20">
      <div className="mb-5 flex items-center justify-between gap-5">
        <h3 className="heading mb-0! shrink-0">{title}</h3>
        {/* <hr className="w-full border-black/10 dark:border-white/10" /> */}
        <Button
          variant={"ghost"}
          prefetch={true}
          href={"/products?category=" + title}
        >
          <ChevronRight />
        </Button>
      </div>
      <ProductGrid>
        {data.map((props) => (
          <Product key={props.slug} {...props} />
        ))}
      </ProductGrid>
    </div>
  )
}
