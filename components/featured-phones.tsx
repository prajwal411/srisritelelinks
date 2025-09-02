import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Phone {
  name: string
  image: string
  specs: {
    storage: string
    camera: string
    battery: string
  }
}

const featuredPhones: Phone[] = [
  {
    name: "iPhone 16 Pro Max",
    image: "/images/phones/iphone-16-pro.jpg",
    specs: {
      storage: "256GB/512GB/1TB",
      camera: "48MP Main + 12MP Ultra Wide",
      battery: "4422mAh",
    },
  },
  {
    name: "Samsung Galaxy S25 Ultra",
    image: "/images/phones/s25-ultra.jpg",
    specs: {
      storage: "256GB/512GB/1TB",
      camera: "200MP Main + 12MP Ultra Wide",
      battery: "5000mAh",
    },
  },
  {
    name: "Realme GT7 Pro",
    image: "/images/phones/gt7-pro.jpg",
    specs: {
      storage: "256GB/512GB",
      camera: "108MP Main + 8MP Ultra Wide",
      battery: "5000mAh",
    },
  },
  {
    name: "Oppo Find X8 Pro",
    image: "/images/phones/find-x8-pro.jpg",
    specs: {
      storage: "256GB/512GB",
      camera: "50MP Main + 50MP Ultra Wide",
      battery: "5000mAh",
    },
  },
  {
    name: "Vivo X100 Ultra",
    image: "/images/phones/x100-ultra.jpg",
    specs: {
      storage: "256GB/512GB",
      camera: "50MP Main + 50MP Ultra Wide",
      battery: "5400mAh",
    },
  },
]

export function FeaturedPhones() {
  return (
    <section id="products" className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Featured Models
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredPhones.map((phone, index) => (
          <Card key={index} className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-xl text-white">{phone.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={phone.image}
                    alt={phone.name}
                    fill
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>
                <div className="space-y-2 text-sm text-neutral-300">
                  <p>📱 Storage: {phone.specs.storage}</p>
                  <p>📸 Camera: {phone.specs.camera}</p>
                  <p>🔋 Battery: {phone.specs.battery}</p>
                </div>
                <Button asChild className="w-full bg-green-600 hover:bg-green-500">
                  <a
                    href={`https://wa.me/9035101337?text=Hi, I'm interested in ${phone.name}. Please share more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 Enquire on WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
