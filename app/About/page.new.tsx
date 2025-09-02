import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        About Sri Tele Links
      </h1>

      <div className="mx-auto max-w-3xl space-y-8">
        {/* Introduction */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-6">
            <p className="text-neutral-300">
              Founded in Chickballapur, Sri Tele Links has been serving customers with the latest smartphones and accessories. 
              Our mission is to make technology accessible and affordable while ensuring quality and authenticity.
            </p>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Why Choose Us</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-white">100% Genuine Mobiles</h3>
                <p className="text-sm text-neutral-300">
                  All our products are sourced directly from authorized distributors, ensuring authenticity and warranty.
                </p>
              </CardContent>
            </Card>

            <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-white">Trusted by Thousands</h3>
                <p className="text-sm text-neutral-300">
                  We have built a strong reputation in Chickballapur through years of honest service and customer satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-white">All Major Brands</h3>
                <p className="text-sm text-neutral-300">
                  From Apple to Realme, we stock all leading smartphone brands to give you the best choice.
                </p>
              </CardContent>
            </Card>

            <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-white">Easy Service & Support</h3>
                <p className="text-sm text-neutral-300">
                  Our dedicated team provides quick and reliable after-sales support for all your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardContent className="p-6 text-center">
            <h3 className="mb-4 text-xl font-semibold text-white">Visit Us Today</h3>
            <p className="mb-2 text-neutral-300">
              Located at Opp. Belaku Eye Care, Beside Bhavani Coffee Works,<br />
              B B Road, Chickballapur - 562101
            </p>
            <div className="mt-4 space-x-4">
              <a 
                href="tel:+919035101337"
                className="inline-block rounded-full bg-blue-600 px-6 py-2 text-sm text-white hover:bg-blue-500"
              >
                📞 Call Now
              </a>
              <a 
                href="https://wa.me/9035101337"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-green-600 px-6 py-2 text-sm text-white hover:bg-green-500"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
