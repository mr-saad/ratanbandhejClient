import Link from "next/link"
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="p-5 mt-20 md:px-20 bg-[#111] text-white/60 border-t border-white/10">
      <p>Follow Us on Social Media Platforms in Order to Stay UpToDate</p>
      <div className="flex flex-col md:flex-row justify-between md:items-center my-10 mt-10">
        <h1 className="text-3xl mb-4 md:mb-0">Ratan Bandhej</h1>
        <div className="flex gap-10">
          <a
            title="Facebook"
            target="_blank"
            href="https://facebook.com"
            className="hover:text-white transition"
          >
            <FaFacebook size={30} />
          </a>
          <a
            title="Instagram"
            className="hover:text-white transition"
            target="_blank"
            href="https://instagram.com/ratanbandhejbhuj/"
          >
            <FaInstagram size={30} />
          </a>
          <a
            title="Whatsapp"
            className="hover:text-white transition"
            target="_blank"
            href="https://wa.me/917778975752?text=Hello%20There!"
          >
            <FaWhatsapp size={30} />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="font-medium text-white mx-auto mb-2 ">CATEGORIES</h2>
          <div>
            <p>Modal Silk</p>
            <p>Kutchi Bandhani Saree</p>
            <p>Kutchi Bandhani Dupatta</p>
            <p>Kutchi Bandhani Top Material</p>
          </div>
        </div>
        <div>
          <h2 className="font-medium text-white mx-auto mb-2 ">CONTACT US</h2>
          <a
            target="_blank"
            className="flex gap-1 items-center mb-2 hover:text-white transition"
            href="mailto:ratanbandhejbhuj@gmail.com"
          >
            <FaEnvelope size={20} />
            ratanbandhejbhuj@gmail.com
          </a>
          <a
            className="flex gap-1 items-center mb-2 hover:text-white transition"
            target="_blank"
            href="https://wa.me/917778975752?text=Hello%20There!"
          >
            <FaWhatsapp size={20} />
            +91 7778975752
          </a>
        </div>
        <div>
          <h2 className="font-medium text-white mx-auto mb-2 ">ADDRESS</h2>
          <div>
            <p>
              1079, ApnaNagar-1, <br /> Near Sejwala Matam, <br /> Bhuj-Kutchh,
              Gujarat
            </p>
          </div>
        </div>
      </div>
      <hr className="border-white/10 my-10" />
      <div className="flex flex-col md:flex-row justify-between mb-5">
        <div className="mb-4 md:mb-0">
          <Link
            className="hover:text-white transition"
            href="/terms-conditions"
          >
            Terms & Conditions
          </Link>
          <span className="mx-2">|</span>
          <Link className="hover:text-white transition" href="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
        <p>All Rights Reserved &copy;RatanBandhej.{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
