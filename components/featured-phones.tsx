"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Phone = {
  brand: string
  name: string
  specs: string
  image: string
}

const PHONES: Phone[] = [
  {
    brand: "Apple",
    name: "iPhone 16 Pro Max",
    specs: "A18 Pro, ProMotion 120Hz, Tetraprism Zoom",
    image: "/apple-iphone-16-pro-max.jpg",
  },
  {
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    specs: "200MP, Snapdragon, S Pen",
    image: "/samsung-galaxy-s25-ultra.jpg",
  },
  { brand: "Realme", name: "GT7 Pro 5G", specs: "Flagship SoC, 120Hz AMOLED", image: "/realme-gt7-pro.jpg" },
  { brand: "Oppo", name: "Find X8 Pro", specs: "Hasselblad tuned cameras", image: "/oppo-find-x8-pro.png" },
  { brand: "Vivo", name: "X100 Ultra", specs: "ZEISS optics, periscope", image: "/vivo-x100-ultra.png" },
]

function waLink(model: string) {
  const text = encodeURIComponent(`Hello Sri Tele Links, I want to enquire about ${model}.`)
  return `https://wa.me/9035101337?text=${text}`
}

export function FeaturedPhones() {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-16">
      <h2 className="mb-8 text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
        Featured Phones
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PHONES.map((p) => (
          <Card key={p.name} className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white text-lg">
                {p.brand} — {p.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={`${p.name}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 360px, 90vw"
                />
              </div>
              <p className="text-sm text-neutral-300">{p.specs}</p>
              <div className="flex gap-2">
                <Button asChild className="rounded-full">
                  <a href={waLink(p.name)} target="_blank" rel="noopener noreferrer">
                    Enquire on WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full bg-transparent">
                  <a href="/products">View All</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
