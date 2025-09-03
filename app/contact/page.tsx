"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  function mailtoHref() {
    const subject = encodeURIComponent("Enquiry from Sri Tele Links website")
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`)
    return `mailto:lalithasripad@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 text-white">
        {/* Intro */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight">We’re Here to Help You!</h1>
          <p className="text-neutral-400 mt-2">
            Have questions about the latest smartphones, accessories, or Realme service? Get in touch with Sri Tele
            Links today – we’re just a call or a message away.
          </p>
        </header>

        {/* Quick Contact Options */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-3 text-neutral-300">
            <div>
              <strong>Phone:</strong> 9035101337 / 9886872388
            </div>
            <div>
              <strong>WhatsApp:</strong>{" "}
              <a
                className="hover:text-lime-300"
                href="https://wa.me/9035101337"
                target="_blank"
                rel="noopener noreferrer"
              >
                9035101337 (Click to chat)
              </a>
            </div>
            <div>
              <strong>Email:</strong>{" "}
              <a href="mailto:lalithasripad@gmail.com" className="hover:text-lime-300">
                lalithasripad@gmail.com
              </a>
            </div>
            <div className="flex gap-2 pt-2">
              <Button asChild className="rounded-full">
                <a href="tel:9035101337">Call Now</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full bg-transparent">
                <a href="https://wa.me/9035101337" target="_blank" rel="noopener noreferrer">
                  WhatsApp Now
                </a>
              </Button>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-0 overflow-hidden">
            <iframe
              title="Sri Tele Links Location"
              src="https://www.google.com/maps?q=Opp.%20Belaku%20Eye%20Care,%20Beside%20Bhavani%20Coffee%20Works,%20B%20B%20Road,%20Chickballapur%20562101&output=embed"
              className="w-full h-[320px]"
              loading="lazy"
            />
          </div>
        </section>

        {/* Address */}
        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 text-neutral-300">
          <h2 className="text-2xl font-bold mb-2">Store Address</h2>
          <p>
            Opp. Belaku Eye Care, Beside Bhavani Coffee Works,
            <br />B B Road, Chickballapur – 562101
          </p>
        </section>

        {/* Business Hours */}
        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold mb-2">Business Hours</h2>
          <ul className="text-neutral-300 space-y-1">
            <li>Monday – Saturday: 10:00 AM – 9:00 PM</li>
            <li>Sunday: 11:00 AM – 7:00 PM</li>
          </ul>
        </section>

        {/* Contact Form */}
        <section className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = mailtoHref()
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-300">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-md bg-black/30 border border-white/10 px-3 py-2 text-sm"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-300">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-md bg-black/30 border border-white/10 px-3 py-2 text-sm"
                required
              />
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="text-sm text-neutral-300">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-md bg-black/30 border border-white/10 px-3 py-2 text-sm min-h-32"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" className="rounded-full">
                Submit
              </Button>
            </div>
          </form>
        </section>

        {/* Social Media Links */}
        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold mb-2">Social</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <a
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"
              href="https://wa.me/9035101337"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 opacity-60">
              Facebook (coming soon)
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 opacity-60">
              Instagram (coming soon)
            </span>
          </div>
        </section>

        {/* Closing CTA Banner */}
        <section className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-lg md:text-xl">
            Visit Sri Tele Links today and get the latest smartphones at the best prices in Chickballapur!
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Button asChild className="rounded-full">
              <a href="tel:9035101337">Call Now</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <a href="https://wa.me/9035101337" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
            <Button asChild variant="secondary" className="rounded-full">
              <a
                href="https://www.google.com/maps?q=Opp.+Belaku+Eye+Care,+Beside+Bhavani+Coffee+Works,+B+B+Road,+Chickballapur+562101"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </section>
      </main>
      <AppverseFooter />
    </>
  )
}
