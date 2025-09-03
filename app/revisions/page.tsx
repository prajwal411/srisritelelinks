import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

export default function RevisionPolicyPage() {
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
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Returns & Service Policy</h1>
                  <p className="text-neutral-400 text-lg">
                    Clear and fair policies to ensure a smooth experience at Sri Tele Links.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">1. Brand Warranty</h2>
                  <p className="text-neutral-300">
                    All phones are covered by the manufacturer’s standard warranty. Issues after purchase are handled by
                    authorized service centers per brand policy.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Returns & Exchanges</h2>
                  <p className="text-neutral-300">
                    In case of unopened products and within a short window, exchanges may be considered at our
                    discretion. Opened/activated devices are generally not eligible for returns unless DOA (dead on
                    arrival) as per brand terms.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">3. DOA Handling</h2>
                  <p className="text-neutral-300">
                    DOA claims must follow the brand’s DOA policy and time window. We will guide you through the steps
                    and required documents.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Accessories & Consumables</h2>
                  <p className="text-neutral-300">
                    Accessories like cases, screen guards, and chargers are non‑returnable if opened/used unless faulty
                    on delivery.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Contact</h2>
                  <p className="text-neutral-300">
                    For policy questions, reach us at{" "}
                    <a href="mailto:lalithasripad@gmail.com" className="text-lime-300 underline">
                      lalithasripad@gmail.com
                    </a>{" "}
                    or WhatsApp{" "}
                    <a
                      href="https://wa.me/9035101337"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lime-300 underline"
                    >
                      9035101337
                    </a>
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
