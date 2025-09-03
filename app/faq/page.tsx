import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-12">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Frequently Asked Questions</h1>
                  <p className="text-neutral-400 text-lg">
                    Answers to common questions about phones, warranties, exchanges, and orders at Sri Tele Links.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">1. Do you sell original, brand‑new phones?</h2>
                  <p className="text-neutral-300">
                    Yes. We only sell genuine, sealed products with standard manufacturer warranty from brands like
                    Apple, Samsung, Realme, Oppo, and Vivo.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">2. Do you provide a bill and warranty?</h2>
                  <p className="text-neutral-300">
                    Every purchase includes a proper GST bill. Warranty terms follow the respective brand’s policy
                    (typically 1 year on the handset and 6 months on select accessories).
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">3. Can I get EMI or card offers?</h2>
                  <p className="text-neutral-300">
                    We support popular EMI options and seasonal card offers from partner banks. Visit the store or call
                    us for current offers and eligibility.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">4. Do you have accessories and basic repairs?</h2>
                  <p className="text-neutral-300">
                    Yes. We stock covers, screen guards, chargers, and more. We can help with basic repair needs and
                    will guide you to authorized service when required.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">5. Can I reserve a model if it’s out of stock?</h2>
                  <p className="text-neutral-300">
                    Absolutely. We can notify you when the model is available, or help you with alternatives that fit
                    your needs and budget.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">6. How can I reach you quickly?</h2>
                  <p className="text-neutral-300">
                    Use the buttons below to call or WhatsApp us for instant assistance.
                  </p>
                  <div className="flex gap-2">
                    <Button asChild className="rounded-full">
                      <a href="https://wa.me/9035101337" target="_blank" rel="noopener noreferrer">
                        WhatsApp Us
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full bg-transparent">
                      <a href="tel:9035101337">Call Now</a>
                    </Button>
                  </div>
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
