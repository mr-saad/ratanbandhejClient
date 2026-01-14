import {
  Html,
  Head,
  Body,
  Font,
  Section,
  Heading,
  Text,
  Link,
  Tailwind,
} from "@react-email/components"

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://ratanbandhej.vercel.app"
    : "http://localhost:3000"

export default function Template({ username = "", token = "" }) {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily={"sans-serif"}
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
              format: "woff2",
            }}
          />
        </Head>
        <Body className="p-5">
          <Section className="mx-auto max-w-4xl">
            <Heading>Welcome to Ratan Bandhej {username}</Heading>
            <Text>
              Click the link below to Verify your Account & Sign in to continue
              Shopping with Ratan Bandhej.
            </Text>
            <Link
              className="rounded-md bg-stone-950 px-3 py-2 font-semibold text-white"
              href={`${baseUrl}/verify-account?token=${token}`}
            >
              Verify
            </Link>
            <Text>
              If you haven&apos;t requested for this, kindly ignore this email.
            </Text>
            <Text className="mb-0">Warm Regards</Text>
            <Heading className="mt-0">
              <Link
                className="text-stone-950"
                href="https://ratanbandhej.vercel.app"
              >
                Ratan Bandhej
              </Link>
            </Heading>
            <Text className="mb-0">Contact us</Text>
            <Link href="https://wa.me/919228405162">WhatsApp</Link>
            <Link className="ml-3" href="mailto:ratanbandhejbhuj@gmail.com">
              E-Mail
            </Link>
            <Text className="mb-0">Follow us</Text>
            <Link href="https://instagram.com/ratanbandhejbhuj">Instagram</Link>
            <Link
              className="ml-3"
              href="https://www.facebook.com/people/Ratan-Bandhej/100071573145928"
            >
              Facebook
            </Link>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}
