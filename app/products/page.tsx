import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"

type Product = { brand: string; name: string; image: string }

const byBrand: Record<string, Product[]> = {
  Apple: [
    { brand: "Apple", name: "iPhone 16", image: "/generic-smartphone.png" },
    { brand: "Apple", name: "iPhone 16 Plus", image: "/iphone-16-plus.png" },
    { brand: "Apple", name: "iPhone 16 Pro", image: "/iphone-16-pro.png" },
    { brand: "Apple", name: "iPhone 16 Pro Max", image: "/iphone-16-pro-max.png" },
  ],
  Samsung: [
    { brand: "Samsung", name: "Galaxy S25 Ultra", image: "/galaxy-s25-ultra.png" },
    { brand: "Samsung", name: "Galaxy S25+", image: "/galaxy-s25-.jpg" },
    { brand: "Samsung", name: "Galaxy S25", image: "/galaxy-s25.png" },
    { brand: "Samsung", name: "Galaxy Z Fold6", image: "/galaxy-z-fold6.png" },
    { brand: "Samsung", name: "Galaxy Z Flip6", image: "/galaxy-z-flip6.jpg" },
  ],
  Realme: [
    { brand: "Realme", name: "GT7 Pro 5G", image: "/realme-gt7-pro-5g.png" },
    { brand: "Realme", name: "GT7T 5G", image: "/realme-gt7t-5g.png" },
    { brand: "Realme", name: "GT7 5G", image: "/realme-gt7-5g.png" },
    { brand: "Realme", name: "Narzo 80 Pro 5G", image: "/realme-narzo-80-pro-5g.jpg" },
    { brand: "Realme", name: "Realme 15 Pro 5G", image: "/realme-15-pro-5g.jpg" },
    { brand: "Realme", name: "Realme P4 Pro 5G", image: "/realme-p4-pro-5g.jpg" },
  ],
  Oppo: [
    { brand: "Oppo", name: "Find X8 Pro", image: "/oppo-find-x8-pro.png" },
    { brand: "Oppo", name: "Find X8", image: "/oppo-find-x8.jpg" },
    { brand: "Oppo", name: "Reno 14 Pro", image: "/oppo-reno-14-pro.jpg" },
    { brand: "Oppo", name: "Reno 14", image: "/placeholder.svg?height=600&width=600" },
    { brand: "Oppo", name: "Find N5", image: "/placeholder.svg?height=600&width=600" },
  ],
  Vivo: [{ brand: "Vivo", name: "Vivo X100 Ultra", image: "/vivo-x100-ultra.png" }],
}

const accessories = [
  "Chargers & Cables",
  "Earphones & Bluetooth Headsets",
  "Mobile Covers & Screen Guards",
  "Power Banks",
]

function waLink(model: string) {
  const text = encodeURIComponent(`Hello Sri Tele Links, I want to enquire about ${model}.`)
  return `https://wa.me/9035101337?text=${text}`
}

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 text-white">
        {/* Header / Intro */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight">Explore the Latest Smartphones & Accessories</h1>
          <p className="text-neutral-400 mt-2">
            Discover top models from Apple, Samsung, Realme, Oppo, and Vivo, along with genuine accessories and service
            options.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Button asChild className="rounded-full">
              <a href="tel:9035101337">Call Now</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <a href="https://wa.me/9035101337" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </header>

        {/* Smartphones by Brand */}
        {Object.entries(byBrand).map(([brand, items]) => (
          <section key={brand} className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{brand}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <Card key={p.name} className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{p.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10">
                      <Image
                        src={p.image || "/placeholder.svg?height=600&width=600&query=phone image placeholder"}
                        alt={p.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 360px, 90vw"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="rounded-full bg-green-500 text-black hover:bg-green-400">
                        <a href={waLink(p.name)} target="_blank" rel="noopener noreferrer">
                          Enquire on WhatsApp
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
          </section>
        ))}

        {/* Accessories */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Accessories</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accessories.map((a) => (
              <div key={a} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-neutral-300">
                {a}
              </div>
            ))}
          </div>
        </section>

        {/* Realme Authorized Service */}
        <section className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold mb-2">Realme Authorized Service</h2>
          <p className="text-neutral-300">
            Warranty support, genuine spare parts, certified repairs, and software updates – all under one roof.
          </p>
          <div className="mt-4">
            <Button asChild className="rounded-full">
              <a
                href="https://wa.me/9035101337?text=Hello%20Sri%20Tele%20Links,%20I%20want%20to%20book%20a%20Realme%20service."
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Service via WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>
      <AppverseFooter />
    </>
  )
}
