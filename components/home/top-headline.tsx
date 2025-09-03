"use client"

import Link from "next/link"

export default function TopHeadline() {
  return (
    <section aria-label="Store headline" className="relative z-10 w-full py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="mb-3 text-xs font-medium tracking-widest text-lime-400/90">SRI TELE LINKS</div>
        <h1 className="text-pretty text-3xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          All Major Brands.
          <span className="block text-lime-400">Genuine Mobiles.</span>
          Best Prices in Chickballapur.
        </h1>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
          <Link
            href="#phones"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            Shop Latest Phones
          </Link>
          <a
            href="tel:+919035101337"
            className="rounded-full bg-black/60 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/919035101337"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black/60 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
