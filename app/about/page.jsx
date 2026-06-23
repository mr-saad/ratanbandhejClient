import Button from "@/components/ui/Button"
import ProductGrid from "@/components/ui/ProductGrid"
import { ArrowRight, Gem, Leaf, Users } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "About",
  keywords: ["About", "aboutus", "ratan", "bandhej", "bandhani"],
  alternates: {
    canonical: "/about",
  },
}

const About = () => {
  return (
    <>
      <div className="Container">
        {/* 1. Hero Section - Centered & Minimal */}
        <section className="mb-5 flex flex-col justify-between gap-2 md:flex-row md:items-center">
          <div className="shrink-0">
            <span className="text-sm font-medium tracking-widest uppercase">
              Est. 2019 • Bhuj, Gujarat
            </span>
            <h1 className="leading-tighter font-serif text-4xl">
              Weaving stories, <br />
              <span className="highlight italic">one knot at a time.</span>
            </h1>
          </div>
          <p className="max-w-xl self-end text-right md:text-xl">
            We are a collective of artisans dedicated to preserving the ancient
            art of Bandhani. Every piece tells a story of patience, precision
            and the vibrant culture of Kachchh.
          </p>
        </section>

        {/* 2. Visual Grid - Using CSS Grid instead of absolute positioning */}
        <section className="mb-24">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            {/* Large Main Image */}
            <div className="overflow-hidden rounded-2xl bg-stone-200 md:col-span-8">
              <Image
                priority
                loading="eager"
                width={400}
                height={400}
                src="/images/working.jpg"
                alt="Artisan working"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Two stacked smaller images */}
            <div className="grid grid-rows-2 gap-5 md:col-span-4">
              <div className="overflow-hidden rounded-2xl bg-stone-200">
                <Image
                  loading="lazy"
                  width={400}
                  height={400}
                  src="/images/fabric.jpg"
                  alt="Fabric detail"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center rounded-2xl bg-stone-900 p-8 text-white">
                <h3 className="mb-2 font-serif text-3xl">100%</h3>
                <p className="text-stone-300">
                  Handcrafted by master artisans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Process / Values - Clean 3-Column Layout */}
        <section className="mx-auto mb-16 max-w-7xl">
          <ProductGrid className={"gap-10 md:grid-cols-3 lg:grid-cols-3"}>
            <div className="flex flex-col items-start gap-3">
              <div className="rounded-xl bg-stone-100 p-3 text-stone-700">
                <Users size={24} />
              </div>
              <h3 className="font-serif text-xl">Community First</h3>
              <p>
                We work directly with families in rural Kachchh, ensuring fair
                wages and sustaining the livelihood of our artisan partners.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="rounded-xl bg-stone-100 p-3 text-stone-700">
                <Leaf size={24} />
              </div>
              <h3 className="font-serif text-xl">Sustainable Dyes</h3>
              <p>
                Our colors are derived from nature indigo, turmeric and madder
                root keeping our fabrics safe for your skin and the earth.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <div className="rounded-xl bg-stone-100 p-3">
                <Gem size={24} />
              </div>
              <h3 className="font-serif text-xl">Heirloom Quality</h3>
              <p>
                Bandhani is not fast fashion. It is art intended to be passed
                down through generations, aging gracefully with every wear.
              </p>
            </div>
          </ProductGrid>
        </section>
      </div>
      {/* 4. CTA Strip */}
      <section className="bg-rose-100 px-5 py-20 text-center dark:bg-stone-900">
        <h2 className="mb-6 font-serif text-3xl">Experience the tradition.</h2>
        <Button href={"/products"}>
          View Latest Collection <ArrowRight className="ml-2" size={18} />
        </Button>
      </section>
    </>
  )
}

export default About
