import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import Script from "next/script"

import { HeroSlider } from "@/components/home/hero-slider"
import { CategoryCards } from "@/components/home/category-cards"
import { DealsOfDay } from "@/components/home/deals-of-day"
import { FeaturedCarousel } from "@/components/home/featured-carousel"
import { BrandZone } from "@/components/home/brand-zone"
import { TrustBadges } from "@/components/home/trust-badges"
import { AccessoriesGrid } from "@/components/home/accessories-grid"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { FeaturedPhones } from "@/components/featured-phones"
import CTABanner from "@/components/cta-banner"
import Testimonials from "@/components/testimonials"
import FAQCompact from "@/components/faq-compact"
import LeadCapture from "@/components/lead-capture"
import StoreInfo from "@/components/store-info"
import { RealmeService } from "@/components/home/realme-service"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for Sri Tele Links
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": "https://example.com/", // replace with your live URL after deploy
    name: "Sri Tele Links",
    description: "All major brands. Genuine mobiles. Best prices in Chickballapur. Your trusted mobile partner.",
    url: "https://example.com/",
    telephone: "9035101337",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opp. Belaku Eye Care, Beside Bhavani Coffee Works, B B Road",
      addressLocality: "Chickballapur",
      postalCode: "562101",
      addressCountry: "IN",
    },
    sameAs: ["https://wa.me/9035101337"],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <div className="mt-8 md:mt-12 lg:mt-16">
          <TrustBadges />
        </div>
        <div className="mt-8 md:mt-12">
          <RealmeService />
        </div>
        <HeroSlider />
        <CategoryCards />
        <LogoMarquee />
        <AccessoriesGrid />
        <DealsOfDay endsAt={undefined} />
        <FeaturedCarousel />
        <BrandZone />
        <div id="phones" className="sr-only" aria-hidden="true" />
        <Features />
        <FeaturedPhones />

        <section className="container mx-auto px-4 space-y-12 sm:space-y-16 py-12 sm:py-16">
          <CTABanner />
          <Testimonials />
          <FAQCompact />
          <LeadCapture />
          <StoreInfo />
        </section>

        <Footer />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
