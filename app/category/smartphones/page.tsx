import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

type Product = { brand: string; name: string; image: string; features: string[] }

const smartphones: Product[] = [
  {
    brand: "Apple",
    name: "iPhone 16 Pro Max",
    image: "/iphone-16-pro-max.png",
    features: ["A18 Pro Chip", "48MP Camera", "Titanium Design", "Action Button"],
  },
  {
    brand: "Apple",
    name: "iPhone 16 Pro",
    image: "/iphone-16-pro.png",
    features: ["A18 Pro Chip", "48MP Camera", "Titanium Design", "USB-C"],
  },
  {
    brand: "Apple",
    name: "iPhone 16",
    image: "/iphone-16.png",
    features: ["A18 Chip", "48MP Camera", "Dynamic Island", "USB-C"],
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
    features: ["Snapdragon 8 Gen 3", "200MP Camera", "S Pen", "7 Years Updates"],
  },
  {
    brand: "Samsung",
    name: "Galaxy S24 Ultra",
    image: "/samsung-s24-ultra.png",
    features: ["Snapdragon 8 Gen 3", "200MP Camera", "S Pen", "AI Features"],
  },
  {
    brand: "Samsung",
    name: "Galaxy S24+",
    image: "/samsung-s24-plus.png",
    features: ["Snapdragon 8 Gen 3", "50MP Camera", "120Hz Display", "Fast Charging"],
  },
  {
    brand: "Samsung",
    name: "Galaxy A55",
    image: "/samsung-a55.png",
    features: ["Exynos 1480", "50MP Camera", "120Hz AMOLED", "5000mAh Battery"],
  },
  {
    brand: "Realme",
    name: "GT7 Pro 5G",
    image: "/realme-gt7-pro-5g.png",
    features: ["Snapdragon 8 Elite", "50MP Camera", "6000mAh Battery", "120W Charging"],
  },
  {
    brand: "Realme",
    name: "12 Pro+",
    image: "/realme-12-pro-plus.png",
    features: ["Dimensity 7050", "50MP Camera", "67W Charging", "Curved Display"],
  },
  {
    brand: "Realme",
    name: "C67",
    image: "/realme-c67.png",
    features: ["Snapdragon 685", "108MP Camera", "5000mAh Battery", "33W Charging"],
  },
  {
    brand: "Realme",
    name: "Narzo 70 Pro",
    image: "/realme-narzo-70-pro.png",
    features: ["Dimensity 7050", "50MP Camera", "5000mAh Battery", "67W Charging"],
  },
  {
    brand: "Oppo",
    name: "Find X8 Pro",
    image: "/oppo-find-x8-pro.jpg",
    features: ["Dimensity 9400", "50MP Periscope", "Hasselblad Camera", "120W Charging"],
  },
  {
    brand: "Oppo",
    name: "Reno 12 Pro",
    image: "/oppo-reno-12-pro.png",
    features: ["Dimensity 7300", "50MP Camera", "5000mAh Battery", "80W Charging"],
  },
  {
    brand: "Vivo",
    name: "X100 Ultra",
    image: "/vivo-x100-ultra.png",
    features: ["Snapdragon 8 Gen 3", "200MP Periscope", "Zeiss Optics", "80W Charging"],
  },
  {
    brand: "Vivo",
    name: "V40 Pro",
    image: "/vivo-v40-pro.png",
    features: ["Dimensity 9200+", "50MP Camera", "5500mAh Battery", "80W Charging"],
  },
]

function waLink(model: string) {
  const text = encodeURIComponent(`Hello Sri Tele Links, I want to enquire about ${model}.`)
  return `https://wa.me/9035101337?text=${text}`
}

export default function SmartphonesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 text-white">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight">Latest Smartphones</h1>
          <p className="text-neutral-400 mt-2">
            Discover the newest flagship phones from top brands with genuine warranty and best prices in Chickballapur.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {smartphones.map((phone) => (
            <Card key={phone.name} className="border border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    {phone.brand}
                  </Badge>
                </div>
                <CardTitle className="text-white text-lg">{phone.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={phone.image || "/placeholder.svg?height=600&width=600&query=smartphone"}
                    alt={phone.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 300px, (min-width: 1024px) 360px, 90vw"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-white text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {phone.features.map((feature) => (
                      <li key={feature} className="text-xs text-neutral-300">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Button asChild className="rounded-full bg-green-500 text-black hover:bg-green-400 text-xs">
                    <a href={waLink(phone.name)} target="_blank" rel="noopener noreferrer">
                      Enquire on WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full bg-transparent text-xs">
                    <a href="tel:9035101337">Call Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
