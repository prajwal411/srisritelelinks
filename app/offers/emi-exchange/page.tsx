import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

const emiOffers = [
  {
    title: "0% EMI on Premium Phones",
    description: "Get your dream phone with 0% interest EMI up to 24 months",
    terms: "Available on phones above ₹30,000",
    badge: "No Cost EMI",
  },
  {
    title: "Exchange Your Old Phone",
    description: "Get instant cash for your old device + additional exchange bonus",
    terms: "Up to ₹15,000 exchange value + ₹2,000 bonus",
    badge: "Best Value",
  },
  {
    title: "Student Discount",
    description: "Special pricing for students with valid ID",
    terms: "Additional 5% off on all smartphones",
    badge: "Student Offer",
  },
]

export default function EMIExchangePage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 text-white">
        <header className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=240&q=80"
              alt="AI generated EMI illustration"
              width={120}
              height={120}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">EMI & Exchange Offers</h1>
          <p className="text-neutral-400 mt-2">
            Make your smartphone purchase affordable with our flexible EMI options and exchange deals.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {emiOffers.map((offer) => (
            <Card key={offer.title} className="border border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    {offer.badge}
                  </Badge>
                </div>
                <CardTitle className="text-white text-lg">{offer.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-300">{offer.description}</p>
                <p className="text-sm text-neutral-400 border-l-2 border-blue-500 pl-3">{offer.terms}</p>
                <div className="flex gap-2">
                  <Button asChild className="rounded-full bg-green-500 text-black hover:bg-green-400">
                    <a
                      href={`https://wa.me/9035101337?text=Hello%20Sri%20Tele%20Links,%20I%20want%20to%20know%20about%20${encodeURIComponent(offer.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Details
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full bg-transparent">
                    <a href="tel:9035101337">Call Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Choose Your Phone</h3>
              <p className="text-sm text-neutral-400">Select from our wide range of smartphones</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Apply for EMI/Exchange</h3>
              <p className="text-sm text-neutral-400">Quick approval process with minimal documentation</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Take Home Your Phone</h3>
              <p className="text-sm text-neutral-400">Walk out with your new smartphone today</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
