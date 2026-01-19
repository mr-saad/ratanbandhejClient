import { Quagera } from "@/components/logoFont"
import ScrollToTop from "@/components/ScrollToTop"
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
    // <div className="Container mx-auto max-w-4xl">
    //   <ScrollToTop />
    //   <h1 className="heading">About Us</h1>
    //   <p className="mb-5">
    //     At Ratan Bandhej, we celebrate the vibrant heritage and artistry of
    //     traditional Indian textiles. We are passionate about preserving and
    //     promoting the rich cultural legacy of Bandhani, a centuries-old tie-dye
    //     technique originating from the colorful state of Gujarat, India.
    //   </p>
    //   <p className="mb-5">
    //     Bandhani is known for its distinctive patterns created through the
    //     laborious process of tying and dyeing. Our skilled artisans meticulously
    //     tie thousands of tiny knots by hand, forming intricate designs on the
    //     fabric. These knots resist the dye, resulting in beautiful patterns when
    //     the fabric is dyed. It is a testament to the artisans&apos;
    //     craftsmanship and attention to detail.
    //   </p>
    //   <p className="mb-5">
    //     We work closely with talented artisans from different regions of
    //     Gujarat, ensuring that their skills are recognized and valued. By
    //     supporting fair trade practices, we strive to empower these artisans,
    //     providing them with a sustainable livelihood while preserving their
    //     traditional craft. Each Bandhani product you find on our website is a
    //     labor of love and a testament to the artisans&apos; dedication.
    //   </p>
    //   <p className="mb-5">
    //     We invite you to explore our collection and discover the intricate
    //     beauty of Bandhani. Whether you are attending a special occasion,
    //     looking for a statement piece, or simply embracing the elegance of
    //     Indian textiles, Bandhani offers you an exquisite range of products to
    //     choose from.
    //   </p>
    //   <p className="mb-5">
    //     Thank you for joining us on this journey of celebrating art, culture,
    //     and craftsmanship. We hope you enjoy exploring the vibrant world of
    //     Bandhani and find something that resonates with your style and passion.
    //   </p>
    //   Warm regards
    //   <h1 className={"heading font-bold " + Quagera.className}>
    //     Ratan Bandhej
    //   </h1>
    // </div>
    <>
      <div className="Container">
        {/* 1. Hero Section - Centered & Minimal */}
        <section className="mb-5 max-w-4xl">
          <span className="mb-5 inline-block rounded-full border border-stone-200 px-3 py-1 text-sm font-medium tracking-widest uppercase dark:border-stone-700">
            Est. 2019 • Bhuj, Gujarat
          </span>
          <h1 className="leading-tighter mb-3 font-serif text-4xl">
            Weaving stories, <br />
            <span className="highlight italic">one knot at a time.</span>
          </h1>
          <p className="text-balance md:text-xl">
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
                unoptimized
                loading="lazy"
                width={400}
                height={400}
                src="/images/working.jpg"
                alt="Artisan working"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Two stacked smaller images */}
            <div className="grid grid-rows-2 gap-5 md:col-span-4">
              <div className="overflow-hidden rounded-2xl bg-stone-700">
                <Image
                  unoptimized
                  loading="lazy"
                  width={400}
                  height={400}
                  src="/images/fabric.jpg"
                  alt="Fabric detail"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center rounded-2xl bg-stone-800 p-8 text-white">
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
      <section className="bg-stone-100 px-5 py-20 text-center dark:bg-stone-900">
        <h2 className="mb-6 font-serif text-3xl">Experience the tradition.</h2>
        <Button href={"/products"}>
          View Latest Collection <ArrowRight className="ml-2" size={18} />
        </Button>
      </section>
    </>
  )
}

export default About
