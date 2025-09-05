"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Slide = {
  title: string
  subtitle?: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  imageAlt: string
  imageUrl: string
}

const slides: Slide[] = [
  {
    title: "iPhone 16 Pro Max",
    subtitle: "Now Available",
    ctaPrimary: { label: "Shop Now", href: "/products" },
    ctaSecondary: { label: "Enquire on WhatsApp", href: "https://wa.me/9035101337" },
    imageAlt: "iPhone 16 Pro Max",
    imageUrl: "/iphone-16-pro-max.png",
  },
  {
    title: "Samsung S25 Ultra",
    subtitle: "Pre-Book Today",
    ctaPrimary: { label: "Shop Now", href: "/products" },
    ctaSecondary: { label: "Enquire on WhatsApp", href: "https://wa.me/9035101337" },
    imageAlt: "Samsung S25 Ultra",
    imageUrl: "/samsung-s25-ultra.png",
  },
  {
    title: "Realme GT7 Pro",
    subtitle: "Latest Flagship",
    ctaPrimary: { label: "Shop Now", href: "/products" },
    ctaSecondary: { label: "Enquire on WhatsApp", href: "https://wa.me/9035101337" },
    imageAlt: "Realme GT7 Pro",
    imageUrl: "/realme-gt7-pro.jpg",
  },
]

export function HeroSlider({ className }: { className?: string }) {
  const [index, setIndex] = React.useState(0)
  const next = React.useCallback(() => setIndex((i) => (i + 1) % slides.length), [])
  const prev = React.useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), [])

  React.useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const s = slides[index]

  return (
    <section className={cn("w-full bg-transparent", className)} aria-label="Hero banner">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <p className="text-sm font-medium text-white/70">{s.subtitle}</p>
            <h1 className="text-pretty text-3xl font-semibold tracking-tight text-white md:text-5xl">{s.title}</h1>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href={s.ctaPrimary.href} aria-label={`${s.title} shop now`}>
                  {s.ctaPrimary.label}
                </a>
              </Button>
              {s.ctaSecondary ? (
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <a href={s.ctaSecondary.href} aria-label={`${s.title} enquire on WhatsApp`}>
                    {s.ctaSecondary.label}
                  </a>
                </Button>
              ) : null}
            </div>
            <div className="flex items-center gap-4 pt-4">
              <button
                aria-label="Previous slide"
                onClick={prev}
                className="rounded-md border border-white/20 px-3 py-2 text-sm text-white hover:bg-white/10"
              >
                Prev
              </button>
              <button
                aria-label="Next slide"
                onClick={next}
                className="rounded-md border border-white/20 px-3 py-2 text-sm text-white hover:bg-white/10"
              >
                Next
              </button>
              <div className="flex items-center gap-2" aria-label="Slide indicators">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    aria-current={i === index}
                    className={cn("h-2 w-2 rounded-full", i === index ? "bg-blue-500" : "bg-white/30")}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/15">
            <img
              src={s.imageUrl || "/placeholder.svg"}
              alt={s.imageAlt}
              className="h-full w-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
