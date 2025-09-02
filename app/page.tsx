import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { Pricing } from "@/components/pricing"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for LocalBusiness
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sri Tele Links",
    description:
      "Your Trusted Mobile Partner in Chickballapur. Latest smartphones and genuine accessories from Realme, Oppo, Vivo, Apple, and Samsung.",
    url: "/",
    telephone: ["+919035101337", "+919886872388"],
    email: "lalithasripad@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opp. Belaku Eye Care, Beside Bhavani Coffee Works, B B Road",
      addressLocality: "Chickballapur",
      postalCode: "562101",
      addressCountry: "IN",
    },
    areaServed: "Chickballapur",
    brand: ["Realme", "Oppo", "Vivo", "Apple", "Samsung"],
  }

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "/",
    name: "Sri Tele Links | Your Trusted Mobile Partner in Chickballapur",
    description:
      "All the latest smartphones in one place – Genuine, Affordable, Trusted. Visit Sri Tele Links on B B Road, Chickballapur.",
    url: "/",
    mainEntity: {
      "@type": "Organization",
      name: "Sri Tele Links",
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "#brands",
        name: "Brands We Deal In",
        url: "#brands",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <LogoMarquee />
        <Pricing />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

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
