import Link from "next/link"

export const metadata = {
  title: "Terms & Conditions",
  keywords: ["terms", "conditions"],
  alternates: {
    canonical: "/terms-conditions",
  },
}

export default function Terms() {
  return (
    <div className="Container mx-auto max-w-4xl">
      <h2 className="heading">Terms and Conditions</h2>

      <p>Welcome to Ratan Bandhej!</p>

      <p className="mb-5 mt-2">
        These terms and conditions outline the rules and regulations for the use
        of Ratan Bandhej&apos;s Website, located at ratanbandhej.shop.
      </p>

      <p className="mb-5">
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use Ratan Bandhej if you do not agree to
        take all of the terms and conditions stated on this page.
      </p>

      <p>
        The following terminology applies to these Terms and Conditions, Privacy
        Statement, and Disclaimer Notice: &quot;Client,&quot; &quot;You,&quot;
        and &quot;Your&quot; refer to you, the user accessing this website.
        &quot;The Company,&quot; &quot;Ourselves,&quot; &quot;We,&quot;
        &quot;Our,&quot; and &quot;Us&quot; refer to Ratan Bandhej.
      </p>

      <h2 className="highlight mt-5 text-xl font-semibold">
        Product Creation & Delivery
      </h2>
      <p>
        Ratan Bandhej specializes in handcrafted bandhani materials such as
        sarees, dupattas, and dresses, created on-demand to meet Client
        specifications. This crafting process may require additional time based
        on the nature and complexity of each order. Certain items in our
        collections may be ready-made and available for immediate purchase.
      </p>

      <h2 className="highlight mt-5 text-xl font-semibold">License</h2>
      <p>
        Unless otherwise stated, Ratan Bandhej and/or its licensors own the
        intellectual property rights for all material on Ratan Bandhej. All
        intellectual property rights are reserved. You may access this from
        Ratan Bandhej for your own personal use subjected to restrictions set in
        these terms and conditions.
      </p>

      <p className="highlight mt-5 text-xl font-semibold">You must not :</p>
      <ul className="list-disc">
        <li className="ml-4">Republish material from Ratan Bandhej</li>
        <li className="ml-4">
          Sell, rent or sub-license material from Ratan Bandhej
        </li>
        <li className="ml-4">
          Reproduce, duplicate or copy material from Ratan Bandhej
        </li>
        <li className="ml-4">Redistribute content from Ratan Bandhej</li>
      </ul>

      <h2 className="highlight mt-5 text-xl font-semibold">
        Data Collection and Privacy
      </h2>
      <p>
        By using our website, you agree to our Privacy Policy. Ratan Bandhej may
        collect and use your personal information to facilitate orders, provide
        services, and improve your experience with us. This includes using your
        data for communication and order fulfillment purposes.
      </p>

      <p>
        No use of Ratan Bandhej&apos;s logo or other artwork will be allowed for
        linking absent a trademark license agreement.
      </p>

      <h2 className="highlight mt-5 text-xl font-semibold">iFrames</h2>
      <p>
        Without prior approval and written permission, you may not create frames
        around our Webpages that alter in any way the visual presentation or
        appearance of our Website.
      </p>

      <h2 className="highlight mt-5 text-xl font-semibold">Your Privacy</h2>
      <p>
        Please read{" "}
        <Link
          className="highlight border-b border-current font-semibold"
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
      </p>

      <h2 className="highlight mt-5 text-xl font-semibold">
        Reservation of Rights
      </h2>
      <p>
        We reserve the right to request that you remove all links or any
        particular link to our Website. You approve to immediately remove all
        links to our Website upon request. We also reserve the right to amen
        these terms and conditions and it&apos;s linking policy at any time. By
        continuously linking to our Website, you agree to be bound to and follow
        these linking terms and conditions.
      </p>

      <h2 className="highlight mt-5 text-xl font-semibold">
        Removal of links from our website
      </h2>
      <p>
        If you find any link on our Website that is offensive for any reason,
        you are free to contact and inform us any moment. We will consider
        requests to remove links but we are not obligated to or so or to respond
        to you directly.
      </p>
      <p>
        We do not ensure that the information on this website is correct, we do
        not warrant its completeness or accuracy; nor do we promise to ensure
        that the website remains available or that the material on the website
        is kept up to date.
      </p>

      <h2 className="highlight mt-5 text-xl font-semibold">Disclaimer</h2>
      <p>
        To the maximum extent permitted by applicable law, we exclude all
        representations, warranties and conditions relating to our website and
        the use of this website. Nothing in this disclaimer will: As long as the
        website and the information and services on the website are provided
        free of charge, we will not be liable for any loss or damage of any
        nature.
      </p>
    </div>
  )
}
