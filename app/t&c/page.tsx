import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions — Sri Tele Links",
  description: "Terms and conditions for purchases at Sri Tele Links.",
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
  },
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0f0f0f] p-6 sm:p-10 shadow-xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(163,230,53,0.10),transparent_55%)]" />
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Terms and Conditions</h1>
                  <p className="text-neutral-400 text-lg">
                    By purchasing from Sri Tele Links, you agree to the terms below. Please read them carefully.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">1. Product Authenticity</h2>
                  <p className="text-neutral-300">
                    All products are genuine and sourced from authorized channels. Each purchase is accompanied by a
                    valid bill/invoice.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Warranty</h2>
                  <p className="text-neutral-300">
                    Warranty coverage is provided by the manufacturer and subject to their terms. We assist with
                    guidance for service center processes where needed.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">3. Pricing & Offers</h2>
                  <p className="text-neutral-300">
                    Prices and promotional offers may change without prior notice. EMI and bank offers are subject to
                    bank approval and current partner programs.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Returns & Exchanges</h2>
                  <p className="text-neutral-300">
                    Returns or exchanges are limited and at management’s discretion, except where DOA policies apply per
                    manufacturer guidelines. Opened or activated devices are not eligible for returns except as per
                    brand DOA rules.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Liability</h2>
                  <p className="text-neutral-300">
                    Sri Tele Links is not liable for indirect or consequential losses. Some terms may be subject to
                    change based on manufacturer or regulatory updates.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">6. Contact</h2>
                  <p className="text-neutral-300">
                    For queries about these terms, contact{" "}
                    <a href="mailto:lalithasripad@gmail.com" className="text-lime-300 underline">
                      lalithasripad@gmail.com
                    </a>{" "}
                    or visit our{" "}
                    <Link href="/contact" className="text-lime-300 underline">
                      contact page
                    </Link>
                    .
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppverseFooter />
    </>
  )
}
