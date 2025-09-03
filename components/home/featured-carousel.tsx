"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type Phone = {
  brand: string
  name: string
  spec: string
  img: string
  enquireHref: string
}

const phones: Phone[] = [
  {
    brand: "Apple",
    name: "iPhone 16 Pro Max",
    spec: 'A18 • 6.9" • 48MP',
    img: "/modern-smartphone.png",
    enquireHref: "https://wa.me/",
  },
  {
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    spec: "Snap 8 Gen 4 • 200MP",
    img: "/samsung-s25-ultra.png",
    enquireHref: "https://wa.me/",
  },
  {
    brand: "Realme",
    name: "GT7 Pro",
    spec: "Dimensity • 120Hz",
    img: "/realme-gt7-pro.jpg",
    enquireHref: "https://wa.me/",
  },
  {
    brand: "Oppo",
    name: "Find X8",
    spec: "MariSilicon • 2K",
    img: "/oppo-find-x8.jpg",
    enquireHref: "https://wa.me/",
  },
  {
    brand: "Vivo",
    name: "X200 Pro",
    spec: 'Zeiss • 1" Sensor',
    img: "/vivo-x200-pro.jpg",
    enquireHref: "https://wa.me/",
  },
]

export function FeaturedCarousel() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  const scrollBy = (delta: number) => {
    const el = containerRef.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: "smooth" })
  }

  return (
    <section aria-labelledby="bestsellers">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between">
          <h2 id="bestsellers" className="text-balance text-2xl font-semibold text-white md:text-3xl">
            Featured Phones
          </h2>
          <div className="hidden gap-2 md:flex">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              onClick={() => scrollBy(-320)}
              aria-label="Scroll left"
            >
              Prev
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              onClick={() => scrollBy(320)}
              aria-label="Scroll right"
            >
              Next
            </Button>
          </div>
        </div>
        <div
          ref={containerRef}
          className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
          role="list"
          aria-label="Trending models"
        >
          {phones.map((p, idx) => (
            <Card
              key={p.name}
              role="listitem"
              className={cn(
                "min-w-[260px] shrink-0 snap-start transition-shadow hover:shadow-md border-white/15 bg-transparent",
              )}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-white">
                  {p.brand} • {p.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={p.img || "/placeholder.svg"}
                  alt={`${p.brand} ${p.name}`}
                  className="h-40 w-full rounded-md object-cover"
                  crossOrigin="anonymous"
                />
                <p className="mt-3 text-sm text-white/70">{p.spec}</p>
                <div className="mt-4">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <a href={p.enquireHref} aria-label={`Enquire about ${p.brand} ${p.name}`}>
                      Enquire Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
