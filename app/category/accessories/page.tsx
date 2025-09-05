import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

const accessories = [
  {
    name: "Fast Chargers 65W",
    category: "Charging",
    image: "/fast-charger-65w.jpg",
    features: ["65W Power", "USB-C", "Quick Charge", "Universal"],
  },
  {
    name: "Wireless Chargers",
    category: "Charging",
    image: "/wireless-charger.png",
    features: ["15W Wireless", "Qi Compatible", "LED Indicator", "Safe Charging"],
  },
  {
    name: "Power Banks 20000mAh",
    category: "Power",
    image: "/power-bank-20000mah.jpg",
    features: ["20000mAh", "Fast Charging", "Dual USB", "LED Display"],
  },
  {
    name: "USB-C Cables",
    category: "Cables",
    image: "/usb-c-cable.jpg",
    features: ["Fast Data Transfer", "Durable", "3A Current", "1m Length"],
  },
  {
    name: "Lightning Cables",
    category: "Cables",
    image: "/lightning-cable.png",
    features: ["MFi Certified", "Fast Charging", "Data Sync", "Tangle-free"],
  },
  {
    name: "Bluetooth Earphones",
    category: "Audio",
    image: "/bluetooth-earphones.jpg",
    features: ["Wireless", "Noise Cancellation", "Long Battery", "Touch Control"],
  },
  {
    name: "Wired Headsets",
    category: "Audio",
    image: "/wired-headset.jpg",
    features: ["3.5mm Jack", "Mic Included", "Comfortable", "Clear Sound"],
  },
  {
    name: "Portable Speakers",
    category: "Audio",
    image: "/portable-bluetooth-speakers.png",
    features: ["Bluetooth 5.0", "Waterproof", "12H Battery", "Bass Boost"],
  },
  {
    name: "Mobile Covers",
    category: "Protection",
    image: "/mobile-phone-covers.jpg",
    features: ["Shock Proof", "All Models", "Transparent", "Anti-Yellow"],
  },
  {
    name: "Tempered Glass",
    category: "Protection",
    image: "/tempered-glass-screen-protector.jpg",
    features: ["9H Hardness", "Bubble-free", "HD Clear", "Easy Install"],
  },
  {
    name: "Screen Guards",
    category: "Protection",
    image: "/screen-guard-protector.jpg",
    features: ["Anti-scratch", "HD Clear", "Precise Cut", "Easy Apply"],
  },
  {
    name: "Camera Protectors",
    category: "Protection",
    image: "/camera-lens-protector.jpg",
    features: ["Lens Protection", "HD Clear", "Scratch Resistant", "Perfect Fit"],
  },
  {
    name: "Car Chargers",
    category: "Charging",
    image: "/car-charger-dual-usb.jpg",
    features: ["Dual USB", "Fast Charging", "LED Display", "Universal"],
  },
  {
    name: "Phone Stands",
    category: "Accessories",
    image: "/phone-stand-adjustable.jpg",
    features: ["Adjustable", "Foldable", "Stable", "Universal"],
  },
  {
    name: "Pop Sockets",
    category: "Accessories",
    image: "/pop-socket-grip-stand.jpg",
    features: ["Grip & Stand", "Reusable", "Collapsible", "All Phones"],
  },
  {
    name: "Memory Cards",
    category: "Storage",
    image: "/memory-card-microsd.jpg",
    features: ["High Speed", "64GB-512GB", "Class 10", "Reliable"],
  },
]

export default function AccessoriesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 text-white">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight">Mobile Accessories</h1>
          <p className="text-neutral-400 mt-2">
            Complete range of genuine mobile accessories for all brands at competitive prices.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {accessories.map((accessory) => (
            <Card key={accessory.name} className="border border-white/10 bg-white/5 backdrop-blur-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                    {accessory.category}
                  </Badge>
                </div>
                <CardTitle className="text-white text-lg">{accessory.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src={accessory.image || "/placeholder.svg?height=300&width=400&query=mobile accessories"}
                  alt={accessory.name}
                  className="w-full h-48 object-cover rounded-lg border border-white/10"
                />
                <div className="space-y-1">
                  <h4 className="font-semibold text-white text-sm">Features:</h4>
                  <ul className="space-y-1">
                    {accessory.features.map((feature) => (
                      <li key={feature} className="text-xs text-neutral-300">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Button asChild className="rounded-full bg-green-500 text-black hover:bg-green-400 text-xs">
                    <a
                      href={`https://wa.me/9035101337?text=Hello%20Sri%20Tele%20Links,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(accessory.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
