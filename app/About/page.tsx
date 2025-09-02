export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sri Tele Links",
    url: "/",
    logo: "/icons/skitbit-white.svg",
    description:
      "Sri Tele Links is a trusted mobile phone retailer in Chickballapur offering the latest smartphones and genuine accessories from Realme, Oppo, Vivo, Apple, and Samsung.",
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opp. Belaku Eye Care, Beside Bhavani Coffee Works, B B Road",
      addressLocality: "Chickballapur",
      postalCode: "562101",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9035101337",
        contactType: "customer service",
        email: "lalithasripad@gmail.com",
        areaServed: "Chickballapur",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9886872388",
        contactType: "customer service",
        areaServed: "Chickballapur",
      },
    ],
    areaServed: [{ "@type": "Place", name: "Chickballapur" }],
  }

  return (
    <>
      {/* SEO Schema for Google + LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Sri Tele Links</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          Founded in Chickballapur, Sri Tele Links serves customers with the latest smartphones and accessories. Our
          mission is to make technology accessible and affordable while ensuring quality and authenticity.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Latest Smartphones",
              desc: "Discover the latest smartphones from Realme, Oppo, Vivo, Apple, and Samsung.",
            },
            {
              title: "Genuine Accessories",
              desc: "Get genuine accessories for your smartphones at unbeatable prices.",
            },
            {
              title: "Affordable Pricing",
              desc: "Make technology accessible with our affordable pricing.",
            },
            {
              title: "Quality Assurance",
              desc: "Ensure the quality and authenticity of your purchases.",
            },
            {
              title: "Easy Service & Support",
              desc: "Experience hassle-free service and support.",
            },
            {
              title: "Customer Satisfaction",
              desc: "Our top priority is your satisfaction.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to find your next phone?</h2>
        <p className="text-lg opacity-80 mb-8">Get genuine mobiles, best prices, and easy service & support.</p>
        <a
          href="https://wa.me/9035101337"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-neutral-200 transition-all"
        >
          WhatsApp Us
        </a>
      </section>
    </>
  )
}
