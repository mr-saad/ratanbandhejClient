import Link from "next/link"

export const metadata = {
  title: "Terms & Conditions",
  keywords: ["terms", "conditions"]
}

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold highlight my-5">
        Terms and Conditions
      </h2>

      <p>Welcome to Ratan Bandhej!</p>

      <p className="mb-5">
        These terms and conditions outline the rules and regulations for the use
        of Ratan Bandhej's Website, located at ratanbandhej.vercel.app.
      </p>

      <p className="mb-5">
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use Ratan Bandhej if you do not agree to
        take all of the terms and conditions stated on this page.
      </p>

      <p>
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: "Client", "You" and
        "Your" refers to you, the person log on this website and compliant to
        the Company’s terms and conditions. "The Company", "Ourselves", "We",
        "Our" and "Us", refers to our Company. "Party", "Parties", or "Us",
        refers to both the Client and ourselves. All terms refer to the offer,
        acceptance and consideration of payment necessary to undertake the
        process of our assistance to the Client in the most appropriate manner
        for the express purpose of meeting the Client’s needs in respect of
        provision of the Company’s stated services, in accordance with and
        subject to, prevailing law of Netherlands. Any use of the above
        terminology or other words in the singular, plural, capitalization
        and/or he/she or they, are taken as interchangeable and therefore as
        referring to same.
      </p>

      <h2 className="text-xl font-semibold highlight my-5">License</h2>

      <p>
        Unless otherwise stated, Ratan Bandhej and/or its licensors own the
        intellectual property rights for all material on Ratan Bandhej. All
        intellectual property rights are reserved. You may access this from
        Ratan Bandhej for your own personal use subjected to restrictions set in
        these terms and conditions.
      </p>

      <p className="text-xl font-semibold highlight mt-5">You must not :</p>
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

      <p className="mt-5">
        Parts of this website offer an opportunity for users to post and
        exchange opinions and information in certain areas of the website. Ratan
        Bandhej does not filter, edit, publish or review Comments prior to their
        presence on the website. Comments do not reflect the views and opinions
        of Ratan Bandhej,its agents and/or affiliates. Comments reflect the
        views and opinions of the person who post their views and opinions. To
        the extent permitted by applicable laws, Ratan Bandhej shall not be
        liable for the Comments or for any liability, damages or expenses caused
        and/or suffered as a result of any use of and/or posting of and/or
        appearance of the Comments on this website.
      </p>

      <h2 className="text-xl font-semibold highlight mt-5">
        You warrant and represent that :
      </h2>

      <ul className="list-disc mb-5">
        <li className="ml-4">
          You are entitled to post the Comments on our website and have all
          necessary licenses and consents to do so;
        </li>
        <li className="ml-4">
          The Comments do not invade any intellectual property right, including
          without limitation copyright, patent or trademark of any third party;
        </li>
        <li className="ml-4">
          The Comments do not contain any defamatory, libelous, offensive,
          indecent or otherwise unlawful material which is an invasion of
          privacy
        </li>
        <li className="ml-4">
          The Comments will not be used to solicit or promote business or custom
          or present commercial activities or unlawful activity.
        </li>
      </ul>

      <p>
        You hereby grant Ratan Bandhej a non-exclusive license to use,
        reproduce, edit and authorize others to use, reproduce and edit any of
        your Comments in any and all forms, formats or media.
      </p>

      <p>
        No use of Ratan Bandhej's logo or other artwork will be allowed for
        linking absent a trademark license agreement.
      </p>

      <h2 className=" text-xl font-semibold highlight my-5">iFrames</h2>

      <p>
        Without prior approval and written permission, you may not create frames
        around our Webpages that alter in any way the visual presentation or
        appearance of our Website.
      </p>

      <h2 className=" text-xl font-semibold highlight my-5">Your Privacy</h2>

      <p>
        Please read{" "}
        <Link
          className="font-semibold highlight border-b pb-1"
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
      </p>

      <h2 className=" text-xl font-semibold highlight my-5">
        Reservation of Rights
      </h2>

      <p>
        We reserve the right to request that you remove all links or any
        particular link to our Website. You approve to immediately remove all
        links to our Website upon request. We also reserve the right to amen
        these terms and conditions and it's linking policy at any time. By
        continuously linking to our Website, you agree to be bound to and follow
        these linking terms and conditions.
      </p>

      <h2 className="text-xl font-semibold highlight my-5">
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

      <h2 className="text-xl font-semibold highlight my-5">Disclaimer</h2>

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
