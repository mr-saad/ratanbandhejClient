import {
  Html,
  Head,
  Body,
  Font,
  Section,
  Heading,
  Button,
  Text,
  Link,
  Tailwind,
} from "@react-email/components"

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://ratanbandhej.shop"
    : "localhost:3000"

export default function Template({ username, token, userId }) {
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
        <Body className="p-5 dark:bg-[#111] dark:text-white/60">
          <Section className="mx-auto max-w-4xl">
            <Heading className="dark:text-white">
              Welcome to Ratan Bandhej, {username}
            </Heading>
            <Text>
              Click the link below to Verify your Account & Sign in to continue
              Shopping with Ratan Bandhej.
            </Text>
            <Button
              className="rounded-md bg-[#111] px-3 py-2 font-semibold text-white dark:bg-white dark:text-black"
              href={`${baseUrl}/verify-account?token=${token}&userId=${userId}`}
            >
              Verify
            </Button>
            <Text>
              If you haven&apos;t requested for this, kindly ignore this email.
            </Text>
            <Text>Warm Regards,</Text>
            <Heading>
              <Link
                className="text-black dark:text-white"
                href="https://ratanbandhej.shop"
              >
                Ratan Bandhej
              </Link>
            </Heading>
            <Text>Contact us</Text>
            <Link href="https://wa.me/919228405162">WhatsApp</Link>
            <Link className="ml-3" href="mailto:ratanbandhejbhuj@gmail.com">
              E-Mail
            </Link>
            <Text>Follow us</Text>
            <Link href="https://instagram.com/ratanbandhejbhuj">Instagram</Link>
            <Link className="ml-3" href="https://facebook.com/ratanbandhejbhuj">
              Facebook
            </Link>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  )
}
