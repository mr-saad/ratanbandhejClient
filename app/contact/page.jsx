import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import ContactForm from "./ContactForm"

export const metadata = {
  title: "Contact",
  keywords: ["contact", "contactus"],
  alternates: {
    canonical: "/contact",
  },
}

export default function Contact() {
  return (
    <div className="Container">
      <section className="overflow-hidden rounded-md border border-stone-100 shadow-xl shadow-black/5 dark:border-white/10">
        <div className="grid md:grid-cols-2">
          {/* Left Column: Contact Info */}
          <div className="flex flex-col justify-between bg-rose-950 p-5 md:p-10">
            <strong className="mb-2 font-medium tracking-widest uppercase">
              Get in touch
            </strong>
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              Let's craft something beautiful.
            </h2>
            <p className="my-5">
              Have a question about a custom order, shipping or wholesale
              inquiries? We are here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <MapPin className="mt-1 shrink-0" size={20} />
                <div>
                  <strong className="mb-1 font-medium text-white">
                    Visit our Home Store
                  </strong>
                  <p>
                    1079, Apna Nagar - 1, Nr. Krishna Petrol Pump
                    <br />
                    Bhuj - Kachchh, Gujarat 370001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Mail className="mt-1 shrink-0" size={20} />
                <div>
                  <strong className="mb-1 block font-medium text-white">
                    Email Us
                  </strong>
                  <a
                    href="mailto:ratanbandhejbhuj@gmail.com"
                    className="transition hover:text-white focus-visible:text-white"
                  >
                    ratanbandhejbhuj@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Phone className="mt-1 shrink-0" size={20} />
                <div>
                  <strong className="mb-1 block font-medium text-white">
                    Call Us
                  </strong>
                  <a
                    href="tel:9228405162"
                    className="transition hover:text-white focus-visible:text-white"
                  >
                    +91 92284 05162
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-5">
              <a
                target="_blank"
                href="https://instagram.com/ratanbandhejbhuj/"
                className="aspect-square rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20 focus-visible:bg-white/20"
              >
                <Image
                  src={"/images/instagram.svg"}
                  width={25}
                  alt="Instagram"
                  height={25}
                  className="text-white"
                />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/people/Ratan-Bandhej/100071573145928"
                className="aspect-square rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20 focus-visible:bg-white/20"
              >
                <Image
                  src={"/images/facebook.svg"}
                  width={25}
                  alt="Facebook"
                  height={25}
                  className="text-white"
                />
              </a>
            </div>
          </div>

          {/* Right Column: The Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
