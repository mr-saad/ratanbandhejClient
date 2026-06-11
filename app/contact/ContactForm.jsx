"use client"

import Button from "@/components/ui/Button"

export default function ContactForm() {
  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleFormSubmit} className="grid gap-10 p-5 md:p-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="group">
          <label
            htmlFor="fname"
            className="mb-2 block font-bold tracking-wider uppercase"
          >
            First Name
          </label>
          <input
            name="fname"
            id="fname"
            type="text"
            className="input"
            placeholder="Saad"
          />
        </div>
        <div className="group">
          <label
            htmlFor="lname"
            className="mb-2 block font-bold tracking-wider uppercase"
          >
            Last Name
          </label>
          <input
            id="lname"
            name="lname"
            type="text"
            className="input"
            placeholder="Khatri"
          />
        </div>
      </div>

      <div className="group">
        <label
          htmlFor="email"
          className="mb-2 block font-bold tracking-wider uppercase"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="input"
          placeholder="example@gmail.com"
        />
      </div>

      <div className="group">
        <label
          htmlFor="subject"
          className="mb-2 block font-bold tracking-wider uppercase"
        >
          Subject
        </label>
        <select id="subject" name="subject" className="input">
          <option>General Inquiry</option>
          <option>Order Status</option>
          <option>Wholesale</option>
          <option>Returns</option>
        </select>
      </div>

      <div className="group">
        <label
          htmlFor="message"
          className="mb-2 block font-bold tracking-wider uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="input resize-none"
          placeholder="Write your message here..."
        ></textarea>
      </div>
      <Button className={"justify-self-start"}>Send Message</Button>
    </form>
  )
}
