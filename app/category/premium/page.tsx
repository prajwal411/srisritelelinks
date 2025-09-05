import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

const premiumPhones = [
  {
    brand: "Apple",
    name: "iPhone 16 Pro Max",
    image: "/iphone-16-pro-max.png",
    features: ["A18 Pro Chip", "48MP Camera System", "Titanium Design", "Action Button"],
  },
  {
    brand: "Apple",
    name: "iPhone 16 Pro",
    image: "/iphone-16-pro.png",
    features: ["A18 Pro Chip", "48MP Camera", "Titanium Design", "USB-C"],
  },
  {
    brand: "Apple",
    name: "iPhone 15 Pro Max",
    image: "/iphone-15-pro-max.png",
    features: ["A17 Pro Chip", "48MP Camera", "Titanium", "Action Button"],
  },
  {
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    image: "/samsung-s25-ultra.png",
    features: ["Snapdragon 8 Gen 3", "200MP Camera", "S Pen Included", "7 Years Updates"],
  },
  {
    brand: "Samsung",
    name: "Galaxy S24 Ultra",
    image: "/samsung-s24-ultra.png",
    features: ["Snapdragon 8 Gen 3", "200MP Camera", "S Pen", "AI Features"],
  },
  {
    brand: "Samsung",
    name: "Galaxy Z Fold 6",
    image: "/samsung-z-fold-6.png",
    features: ["Snapdragon 8 Gen 3", "Foldable Display", "S Pen Support", "Multitasking"],
  },
  {
    brand: "Oppo",
    name: "Find X8 Pro",
    image: "/oppo-find-x8-pro.jpg",
    features: ["Dimensity 9400", "50MP Periscope", "Hasselblad Camera", "120W Charging"],
  },
  {
    brand: "Oppo",
    name: "Find X7 Ultra",
    image: "/oppo-find-x7-ultra.png",
    features: ["Snapdragon 8 Gen 3", "50MP Quad Camera", "Hasselblad", "100W Charging"],
  },
  {
    brand: "Vivo",
    name: "X100 Ultra",
    image: "/vivo-x100-ultra.png",
    features: ["Snapdragon 8 Gen 3", "200MP Periscope", "Zeiss Optics", "80W Charging"],
  },
  {
    brand: "Vivo",
    name: "X100 Pro",
    image: "/vivo-x100-pro.png",
    features: ["Dimensity 9300", "50MP Camera", "Zeiss Optics", "100W Charging"],
  },
  {
    brand: "OnePlus",
    name: "12 Pro",
    image: "/oneplus-12-pro.png",
    features: ["Snapdragon 8 Gen 3", "50MP Hasselblad", "100W Charging", "120Hz Display"],
  },
  {
    brand: "Google",
    name: "Pixel 9 Pro XL",
    image: "/google-pixel-9-pro-xl.png",
    features: ["Tensor G4", "50MP Camera", "AI Features", "7 Years Updates"],
  },
]

function waLink(model: string) {
  const text = encodeURIComponent(`Hello Sri Tele Links, I want to enquire about ${model}.`)
  return `https://wa.me/9035101337?text=${text}`
}

export default function PremiumPhonesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 text-white">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight">Premium Smartphones</h1>
          <p className="text-neutral-400 mt-2">
            Experience the pinnacle of mobile technology with flagship devices from top brands.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {premiumPhones.map((phone) => (
            <Card key={phone.name} className="border border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                    Premium
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    {phone.brand}
                  </Badge>
                </div>
                <CardTitle className="text-white text-xl">{phone.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={phone.image || "/placeholder.svg?height=600&width=600&query=premium smartphone"}
                    alt={phone.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 360px, (min-width: 1024px) 480px, 90vw"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-1">
                    {phone.features.map((feature) => (
                      <li key={feature} className="text-sm text-neutral-300">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Button asChild className="rounded-full bg-green-500 text-black hover:bg-green-400">
                    <a href={waLink(phone.name)} target="_blank" rel="noopener noreferrer">
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

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose Premium?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border border-white/10 bg-white/5 rounded-xl">
              <h3 className="font-semibold mb-2">Latest Technology</h3>
              <p className="text-sm text-neutral-400">Cutting-edge processors, cameras, and features</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-xl">
              <h3 className="font-semibold mb-2">Extended Warranty</h3>
              <p className="text-sm text-neutral-400">Comprehensive warranty and premium support</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/5 rounded-xl">
              <h3 className="font-semibold mb-2">Future-Proof</h3>
              <p className="text-sm text-neutral-400">Long-term software updates and performance</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
