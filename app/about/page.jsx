import { Quagera } from "@/components/logoFont"
import ScrollToTop from "@/components/ScrollToTop"

export const metadata = {
  title: "About",
  keywords: ["About", "aboutus", "ratan", "bandhej", "bandhani"],
  alternates: {
    canonical: "/about",
  },
}

const About = () => {
  return (
    <div className="Container mx-auto max-w-4xl">
      <ScrollToTop />
      <h1 className="heading">About Us</h1>
      <p className="mb-5">
        At Ratan Bandhej, we celebrate the vibrant heritage and artistry of
        traditional Indian textiles. We are passionate about preserving and
        promoting the rich cultural legacy of Bandhani, a centuries-old tie-dye
        technique originating from the colorful state of Gujarat, India.
      </p>
      <p className="mb-5">
        Bandhani is known for its distinctive patterns created through the
        laborious process of tying and dyeing. Our skilled artisans meticulously
        tie thousands of tiny knots by hand, forming intricate designs on the
        fabric. These knots resist the dye, resulting in beautiful patterns when
        the fabric is dyed. It is a testament to the artisans&apos;
        craftsmanship and attention to detail.
      </p>
      <p className="mb-5">
        We work closely with talented artisans from different regions of
        Gujarat, ensuring that their skills are recognized and valued. By
        supporting fair trade practices, we strive to empower these artisans,
        providing them with a sustainable livelihood while preserving their
        traditional craft. Each Bandhani product you find on our website is a
        labor of love and a testament to the artisans&apos; dedication.
      </p>
      <p className="mb-5">
        We invite you to explore our collection and discover the intricate
        beauty of Bandhani. Whether you are attending a special occasion,
        looking for a statement piece, or simply embracing the elegance of
        Indian textiles, Bandhani offers you an exquisite range of products to
        choose from.
      </p>
      <p className="mb-5">
        Thank you for joining us on this journey of celebrating art, culture,
        and craftsmanship. We hope you enjoy exploring the vibrant world of
        Bandhani and find something that resonates with your style and passion.
      </p>
      Warm regards,
      <h1
        className={
          "heading"
          // + Quagera.className
        }
      >
        Ratan Bandhej
      </h1>
    </div>
  )
}

export default About
