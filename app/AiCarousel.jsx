"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import { ArrowLeft, ArrowRight } from "lucide-react"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

const customStyles = `
  .swiper-pagination-bullet {
    background: #000;
    opacity: 0.3;
  }
  .swiper-pagination-bullet-active {
    background: #000;
    opacity: 1;
  }
`

const products = [
  {
    id: 1,
    subtitle: "KUTCH CRAFTS",
    title: "Modal Silk White Yellow Heavy Kutchi Barbhaat",
    description:
      "Experience the authentic heritage of Kutch with this heavy tissue pallu saree. Handcrafted perfection for your special occasions.",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1974&auto=format&fit=crop", // Placeholder: Saree/Ethnic wear
    price: "₹12,999",
  },
  {
    id: 2,
    subtitle: "NEW ARRIVAL",
    title: "Silk Computer Work Bandhani Dress Material",
    description:
      "A stunning combination of traditional Bandhani with modern computer work. Perfect for creating your own style statement.",
    image:
      "https://images.unsplash.com/photo-1583391733958-84b293444053?q=80&w=1974&auto=format&fit=crop", // Placeholder: Red Dress
    price: "₹4,500",
  },
  {
    id: 3,
    subtitle: "BEST SELLER",
    title: "Silk Tissue Pallu Heavy White Yellow Bandhej",
    description:
      "Elegant and lightweight, this Bandhej saree features a rich tissue pallu that drapes effortlessly around you.",
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1974&auto=format&fit=crop", // Placeholder: Green Saree
    price: "₹8,999",
  },
]

export default function ProductCarousel() {
  return (
    <div className="relative mx-auto flex h-150 w-full max-w-7xl items-center justify-center overflow-hidden bg-white font-sans">
      <style>{customStyles}</style>

      {/* Navigation Buttons (Custom Absolute Position) */}
      <button className="swiper-button-prev-custom absolute left-4 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-black transition-all duration-300 hover:bg-black hover:text-white md:flex">
        <ArrowLeft size={20} />
      </button>
      <button className="swiper-button-next-custom absolute right-4 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-black transition-all duration-300 hover:bg-black hover:text-white md:flex">
        <ArrowRight size={20} />
      </button>

      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect={"fade"}
        fadeEffect={{ crossFade: true }} // Prevents overlapping opacity issues
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        className="h-full w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex h-full w-full flex-col md:flex-row">
              {/* Left Side: Content */}
              <div className="z-10 flex w-full flex-col justify-center space-y-6 bg-white px-8 md:w-1/2 md:px-20">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase md:text-sm">
                    {product.subtitle}
                  </span>
                  <h2 className="font-serif text-3xl leading-tight font-medium text-gray-900 md:text-5xl">
                    {product.title}
                  </h2>
                </div>

                <p className="max-w-md text-sm leading-relaxed text-gray-600 md:text-base">
                  {product.description}
                </p>

                <div className="flex items-center gap-6 pt-4">
                  <button className="group flex items-center gap-2 rounded-full bg-black px-8 py-3 text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl">
                    <span className="text-sm font-medium tracking-wide">
                      Know More
                    </span>
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <span className="text-xl font-semibold text-gray-900">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="relative h-full w-full md:w-1/2">
                {/* Modern Gradient Overlay for Mobile readability */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/20 to-transparent md:hidden" />
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
