import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions — Sri Tele Links",
  description: "Terms and conditions for Sri Tele Links mobile store",
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
              <div className="relative space-y-8">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Terms & Conditions</h1>
                  <p className="text-neutral-400 text-lg">
                    Please read these terms carefully before making a purchase.
                  </p>
                </header>

                <section className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-white">1. Product Warranty</h2>
                    <p className="text-neutral-300">
                      All products sold by Sri Tele Links come with manufacturer warranty. The warranty period varies by product
                      and manufacturer. Warranty claims must be supported by the original purchase invoice.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-white">2. Payment & Pricing</h2>
                    <p className="text-neutral-300">
                      All prices are in Indian Rupees (INR). We reserve the right to change prices without prior notice.
                      Payment must be completed before product delivery. EMI terms are subject to bank/credit card policies.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-white">3. Exchange Policy</h2>
                    <p className="text-neutral-300">
                      Old phone exchange values are determined based on current market rates and device condition.
                      The final exchange value will be determined after physical inspection of the device.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-white">4. Product Availability</h2>
                    <p className="text-neutral-300">
                      Product availability is subject to stock. We make every effort to maintain stock of popular models
                      but cannot guarantee immediate availability of all products at all times.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-white">5. Delivery</h2>
                    <p className="text-neutral-300">
                      Free delivery is available within Chickballapur city limits. Delivery outside city limits may incur
                      additional charges. Delivery timelines will be communicated at the time of purchase.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-white">6. Privacy Policy</h2>
                    <p className="text-neutral-300">
                      Customer information is kept confidential and used only for order processing, warranty registration,
                      and service-related communication. We do not share customer information with third parties.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-white">7. Dispute Resolution</h2>
                    <p className="text-neutral-300">
                      Any disputes will be resolved through mutual discussion. All legal matters are subject to
                      Chickballapur jurisdiction only.
                    </p>
                  </div>
                </section>

                <section className="pt-6 border-t border-white/10">
                  <p className="text-sm text-neutral-400">
                    These terms and conditions may be updated periodically. By making a purchase, you agree to the
                    current version of these terms.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
