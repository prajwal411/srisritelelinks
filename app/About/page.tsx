import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Wrench, ShieldCheck, Timer, MessageCircle, Phone, MapPin } from "lucide-react"

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Sri Tele Links",
    url: "https://example.com",
    logo: "/icons/sri-tele-links-logo.svg",
    description:
      "Sri Tele Links is your trusted mobile store in Chickballapur, offering all major smartphone brands, genuine products, and friendly customer service.",
    sameAs: ["https://wa.me/9035101337"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opp. Belaku Eye Care, Beside Bhavani Coffee Works, B B Road",
      addressLocality: "Chickballapur",
      postalCode: "562101",
      addressCountry: "IN",
    },
    contactPoint: [
      { "@type": "ContactPoint", telephone: "9035101337", contactType: "customer service" },
      { "@type": "ContactPoint", telephone: "9886872388", contactType: "customer service" },
    ],
    areaServed: [
      { "@type": "Place", name: "Chickballapur" },
      { "@type": "Place", name: "Bangalore Rural" },
    ],
  }

  return (
    <>
      <SiteHeader />

      {/* SEO Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Intro / Hero */}
      <section className="relative bg-transparent text-foreground px-6 md:px-10 lg:px-20 py-16 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">About Sri Tele Links</h1>
        <p className="text-base md:text-lg max-w-3xl mx-auto opacity-80">
          Sri Tele Links is a trusted mobile retail store in Chickballapur offering the latest smartphones and genuine
          accessories from Apple, Samsung, Realme, Oppo, and Vivo.
        </p>
      </section>

      {/* Our Story */}
      <section className="px-6 md:px-10 lg:px-20 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
          <blockquote className="border-l-4 pl-4 md:pl-6 text-pretty opacity-90">
            “Founded to bring the latest technology closer to Chickballapur, Sri Tele Links has become a one-stop
            destination for smartphones, accessories, and after-sales service. Our goal has always been simple: to
            provide genuine products at fair prices with expert guidance and support.”
          </blockquote>
        </div>
      </section>

      {/* Authorized Realme Service Center */}
      <section className="px-6 md:px-10 lg:px-20 py-10">
        <Card className="bg-transparent border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-lime-500 text-black">Authorized Realme Service Center</Badge>
              <ShieldCheck className="h-5 w-5 text-lime-500" aria-hidden />
            </div>
            <CardTitle className="text-xl md:text-2xl mt-2">Complete Realme support under one roof</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <p className="opacity-90">
              We are proud to be an Authorized Realme Service Center in Chickballapur. From warranty repairs to genuine
              spare parts and software updates, customers can rely on us for trusted, efficient service.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Wrench className="h-5 w-5 text-lime-500 mt-0.5" aria-hidden />
                <span>Genuine Realme spare parts</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-lime-500 mt-0.5" aria-hidden />
                <span>Warranty support & repairs</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-lime-500 mt-0.5" aria-hidden />
                <span>Expert Realme-certified technicians</span>
              </li>
              <li className="flex items-start gap-3">
                <Timer className="h-5 w-5 text-lime-500 mt-0.5" aria-hidden />
                <span>Fast service turnaround</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 md:px-10 lg:px-20 py-10">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-transparent border">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="opacity-90">
                To deliver the best smartphones, accessories, and after-sales support with honesty and care.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-transparent border">
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="opacity-90">To be the most trusted mobile shop and service provider in Chickballapur.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 md:px-10 lg:px-20 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Choose Us</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "100% Genuine Mobiles & Accessories",
            "Authorized Realme Service Center",
            "Latest Phones First in Town",
            "Best Prices & EMI / Exchange Options",
            "Reliable After-Sales Support",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-lime-500 mt-0.5" aria-hidden />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Brands We Offer */}
      <section className="px-6 md:px-10 lg:px-20 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Brands We Offer</h2>
        <p className="opacity-80 mb-4">
          Sri Tele Links proudly offers smartphones from the world’s top brands, ensuring you always get the latest and
          the best.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Apple", "Samsung", "Realme", "Oppo", "Vivo"].map((b) => (
            <Badge key={b} variant="secondary" className="text-foreground">
              {b}
            </Badge>
          ))}
        </div>
      </section>

      {/* Customer Promise */}
      <section className="px-6 md:px-10 lg:px-20 py-10">
        <Card className="bg-transparent border">
          <CardContent className="py-6">
            <p className="text-pretty text-lg md:text-xl">
              “At Sri Tele Links, every customer is treated like family. Whether you are buying your first smartphone or
              repairing your Realme device, we provide clear advice, genuine service, and complete satisfaction.”
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Photos (Optional) */}
      <section className="px-6 md:px-10 lg:px-20 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Gallery</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <img 
            src="/about/WhatsApp Image 2025-09-04 at 17.35.48_89a5a2e9.jpg" 
            alt="Sri Tele Links Store View" 
            className="rounded-xl border w-full h-64 object-cover" 
          />
          <img 
            src="/about/WhatsApp Image 2025-09-04 at 20.29.36_4c56c42f.jpg" 
            alt="Sri Tele Links Service Center" 
            className="rounded-xl border w-full h-64 object-cover" 
          />
          <img 
            src="/about/WhatsApp Image 2025-09-04 at 20.29.44_ca4a8cf2.jpg" 
            alt="Sri Tele Links Store Interior" 
            className="rounded-xl border w-full h-64 object-cover" 
          />
        </div>
      </section>

      {/* Quick Contact */}
      <section className="px-6 md:px-10 lg:px-20 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Quick Contact</h2>
          <div className="flex flex-col items-center gap-3 mb-6">
            <a href="tel:9035101337" className="inline-flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" aria-hidden /> 9035101337
            </a>
            <a href="tel:9886872388" className="inline-flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" aria-hidden /> 9886872388
            </a>
            <a
              href="https://wa.me/9035101337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:underline"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp: 9035101337
            </a>
            <p className="inline-flex items-start gap-2 text-center">
              <MapPin className="h-4 w-4 mt-1" aria-hidden />
              Opp. Belaku Eye Care, Beside Bhavani Coffee Works, BB Road, Chickballapur – 562101
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Button asChild className="rounded-full">
              <a href="https://wa.me/9035101337" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <a href="tel:9035101337">Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      <AppverseFooter />
    </>
  )
}
