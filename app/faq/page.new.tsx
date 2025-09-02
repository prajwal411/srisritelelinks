import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

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
                    Find answers to common questions about our products, services, and policies.
                  </p>
                </header>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    1. Are your products genuine and do they come with warranty?
                  </h2>
                  <p className="text-neutral-300">
                    Yes, all our smartphones and accessories are 100% genuine, sourced directly from authorized distributors.
                    Every product comes with official manufacturer warranty and valid bill.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    2. What payment methods do you accept?
                  </h2>
                  <p className="text-neutral-300">
                    We accept all major payment methods including cash, UPI (GPay, PhonePe, Paytm), debit cards, and credit cards.
                    EMI options are also available on select cards.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    3. Do you provide after-sales service?
                  </h2>
                  <p className="text-neutral-300">
                    Yes, we provide complete support for warranty claims and after-sales service. Our team will guide you
                    through the process and help coordinate with authorized service centers.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    4. What brands do you deal in?
                  </h2>
                  <p className="text-neutral-300">
                    We deal in all major smartphone brands including Apple (iPhone), Samsung, Realme, Oppo, and Vivo.
                    We stock the latest models from each brand.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    5. Can I exchange my old phone?
                  </h2>
                  <p className="text-neutral-300">
                    Yes, we offer exchange options for old smartphones. The exchange value will depend on your phone's
                    condition, age, and market value. Visit our store for a free evaluation.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    6. Do you offer home delivery?
                  </h2>
                  <p className="text-neutral-300">
                    Yes, we offer free home delivery within Chickballapur city limits. For locations outside the city,
                    delivery charges may apply.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    7. What accessories do you sell?
                  </h2>
                  <p className="text-neutral-300">
                    We offer a wide range of genuine accessories including chargers, earphones, cases/covers,
                    screen protectors, and power banks for all major smartphone brands.
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-white">
                    8. Do you provide installation services?
                  </h2>
                  <p className="text-neutral-300">
                    Yes, we provide free installation of screen guards and help set up your new device including
                    data transfer from your old phone if needed.
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
