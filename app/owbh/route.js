import { Resend } from "resend"
export async function GET(req, res) {
  try {
    const resend = new Resend(process.env.resend_apiKey)
    resend.emails.send({
      from: process.env.email,
      subject: `New Order From ${req.body.username}`,
      to: process.env.email,
      html: `order webhook: ${req.body.product}`,
    })
    new Response("Success", {
      status: 200,
    })
  } catch (error) {
    new Response(JSON.stringify(error), {
      status: 500,
    })
  }
}
