import { Resend } from "resend"
export async function GET(req, res) {
  try {
    const resend = new Resend(process.env.NEXT_PUBLIC_resend_apiKey)
    await resend.emails.send({
      from: `Saad Khatri (Ratan) <${process.env.NEXT_PUBLIC_email}>`,
      subject: `New Order From`,
      to: process.env.NEXT_PUBLIC_email,
      html: `order webhook`,
    })
    return new Response("Success", {
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    })
  }
}
