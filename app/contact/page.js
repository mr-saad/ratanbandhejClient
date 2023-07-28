import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export const metadata = {
  title: "Contact",
  keywords: ["contact", "contactus"],
}

const Contact = () => {
  return (
    <div className="flex flex-col justify-center max-w-4xl mx-auto">
      <h1 className="text-3xl highlight mb-5 font-semibold">Contact Us</h1>
      <p>
        Thank you for your interest in Ratan Bandhej. We are delighted to assist
        you with any inquiries, feedback, or assistance you may require. Here
        are the details to get in touch with us:
      </p>
      <p>
        E-Mail:{" "}
        <a
          href="mailto:ratanbandhej@gmail.com"
          className="border-b mb-3 font-semibold"
        >
          ratanbandhejbhuj@gmail.com
        </a>
      </p>
      <p className="mb-4">
        Phone:{" "}
        <a href="tel:+917016039766" className="border-b font-semibold">
          +91 7016039766
        </a>
      </p>
      <p className="mb-4">
        We value your feedback and strive to provide prompt responses to all
        your queries. Whether you have questions about our Bandhani products,
        need assistance with an order, or simply want to share your thoughts, we
        are here to help.
      </p>
      <p className="mb-4">
        You can reach us via email at{" "}
        <a
          href="mailto:ratanbandhej@gmail.com"
          className="border-b font-semibold"
        >
          ratanbandhejbhuj@gmail.com
        </a>
        . Please allow up to 24 hours for us to respond to your email, although
        we endeavor to reply as soon as possible.
      </p>
      <p className="mb-4">
        If you prefer to speak with us directly, you can contact us by phone at{" "}
        <a href="tel:+917016039766" className="border-b font-semibold">
          +91 7016039766
        </a>
        . Our customer support team is available during business hours to assist
        you with your queries and provide any necessary guidance.
      </p>
      <p>
        Thank you for choosing Ratan Bandhej. We look forward to hearing from
        you and providing you with an exceptional shopping experience.
      </p>
      <div className="flex items-center my-10 flex-wrap gap-5">
        <a href="https://wa.me/917778975752?text=Hi%20There!" target="new">
          <FaWhatsapp color="#3fbd4f" size={60} />
        </a>
        <a href="https://facebook.com" target="new">
          <FaFacebook color="#1773ea" size={60} />
        </a>
        <a href="https://instagram.com/ratanbandhejbhuj/" target="new">
          <FaInstagram color="orange" size={60} />
        </a>
      </div>
    </div>
  )
}

export default Contact
