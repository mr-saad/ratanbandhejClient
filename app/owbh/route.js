import { Resend } from "resend"
export async function GET(req, res) {
  try {
    const resend = new Resend(process.env.resend_apiKey)
    await resend.emails.send({
      from: `Saad Khatri (Ratan) <onboarding@resend.dev>`,
      subject: `New Order From`,
      to: process.env.email,
      html: `new order from webhook`,
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
