export const metadata = {
  title: "Privacy Policy",
  keywords: ["privacy", "policy"],
}

export default function Privacy() {
  return (
    <div className="Container mx-auto max-w-4xl">
      <h1 className="heading">Privacy Policy</h1>
      <p className="mb-2">Last updated: October 25, 2024</p>
      <p>
        This Privacy Policy describes Our policies and procedures on the
        collection, use and disclosure of Your information when You use the
        Service and tells You about Your privacy rights and how the law protects
        You.
      </p>
      <p>
        We use Your Personal data to provide and improve the Service. By using
        the Service, You agree to the collection and use of information in
        accordance with this Privacy Policy.
      </p>

      <h2 className="highlight mt-5 text-xl font-semibold">
        Personal Information Collection
      </h2>

      <p>
        To process orders, communicate and enhance user experience, we collect
        personal information such as:
      </p>

      <ul className="ml-4 list-disc">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Delivery address (street, city, zip code, state)</li>
        <li>Order preferences and product customization details.</li>
      </ul>
      <p className="mt-2">
        We may also collect data about your website usage, such as browser and
        device details, to analyze and improve our services.
      </p>

      <h2 className="highlight mt-5 text-xl font-semibold">
        Use of Personal Data
      </h2>

      <p>We use your personal data to:</p>

      <ul className="ml-4 list-disc">
        <li>Process and deliver orders, including custom requests.</li>
        <li>
          Communicate order updates, promotions, or other relevant information.
        </li>
        <li>Improve our services, marketing, and website experience.</li>
      </ul>

      <h1 className="highlight mt-5 text-xl font-semibold">
        Security of Your Personal Data
      </h1>
      <p>
        The security of Your Personal Data is important to Us, but remember that
        no method of transmission over the Internet, or method of electronic
        storage is 100% secure. While We strive to use commercially acceptable
        means to protect Your Personal Data, We cannot guarantee its absolute
        security.
      </p>
      <h1 className="highlight mt-5 text-xl font-semibold">
        Third-Party Services
      </h1>
      <p>
        Ratan Bandhej does not sell or share your data with third parties for
        marketing purposes. Data processing services, such as website hosting or
        email notifications, may access information as necessary to support our
        operations.
      </p>

      <h2 className="highlight mt-5 text-xl font-semibold">
        Changes to Privacy Policy
      </h2>

      <p>
        We reserve the right to modify this Privacy Policy. Any updates will be
        posted on this page, and continued use of our website constitutes
        acceptance of these changes.
      </p>
      <h1 className="highlight mt-5 text-xl font-semibold">Contact Us</h1>
      <p>
        If you have any questions about this Privacy Policy, You can contact us:
      </p>
      <ul className="ml-4 list-disc">
        <li>
          By email:{" "}
          <a
            className="highlight border-b font-semibold"
            href="mailto:ratanbandhejbhuj@gmail.com"
          >
            ratanbandhejbhuj@gmail.com
          </a>
        </li>
        <li>
          By visiting this page on our website:{" "}
          <a
            className="highlight border-b font-semibold"
            href="https://ratanbandhej.shop/contact"
            rel="noreferrer"
            target="_blank"
          >
            https://ratanbandhej.shop/contact
          </a>
        </li>
        <li>
          By phone number:{" "}
          <a
            className="highlight border-b font-semibold"
            href="tel:+917778975752"
            rel="noreferrer"
            target="_blank"
          >
            +91 7778975752
          </a>
        </li>
      </ul>
    </div>
  )
}
