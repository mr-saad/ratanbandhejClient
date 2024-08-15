import { Resend } from "resend"
export async function GET(req, res) {
  try {
    const resend = new Resend(process.env.resend_apiKey)
    const { data, error } = await resend.emails.send({
      from: `Saad Khatri (Ratan) <onboarding@resend.dev>`,
      subject: `New Order From`,
      to: process.env.email,
      html: `new order from webhook`,
    })
    if (error) {
      return new Response(error.message)
    } else {
      return new Response(data.id)
    }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    })
  }
}
