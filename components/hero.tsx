import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20 text-center">
          {/* Brand */}
          <div className="mb-5 flex items-center gap-2">
            <Image
              src="/icons/skitbit-white.svg"
              alt="Sri Tele Links logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">Sri Tele Links</p>
          </div>

          {/* Tagline */}
          <h1 className="mt-3 text-center text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="block">All Major Brands.</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">Genuine Mobiles.</span>
            <span className="block">Best Prices in Chickballapur.</span>
          </h1>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button asChild className="rounded-full">
              <a href="/products">Shop Latest Phones</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <a href="tel:9035101337">Call Now</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <a href="https://wa.me/9035101337" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Static brand preview grid (replaces video cards) */}
          <div className="mt-10 grid w-full gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {phones.map((p, i) => (
              <div key={i} className="rounded-[28px] glass-border bg-neutral-900 p-2">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 220px, (min-width: 768px) 30vw, 90vw"
                  />
                  <div className="relative z-10 p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-3xl font-bold leading-snug text-white/90">{p.title}</div>
                      <p className="text-xs text-white/70">{p.sub}</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
                        {p.badge}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const phones = [
  {
    title: "iPhone 16 Pro Max",
    sub: "A18 Pro, 120Hz ProMotion, tetraprism zoom",
    badge: "Apple",
    image: "/apple-iphone-16-pro-max-studio-photo.jpg",
  },
  {
    title: "Samsung Galaxy S25 Ultra",
    sub: "Snapdragon, 200MP camera, S Pen",
    badge: "Samsung",
    image: "/samsung-galaxy-s25-ultra-product-photo.jpg",
  },
  {
    title: "Realme GT7 Pro 5G",
    sub: "Flagship SoC, 120Hz AMOLED",
    badge: "Realme",
    image: "/realme-gt7-pro-product-photo.jpg",
  },
  {
    title: "Oppo Find X8 Pro",
    sub: "Hasselblad camera tuning",
    badge: "Oppo",
    image: "/oppo-find-x8-pro-product-photo.jpg",
  },
  {
    title: "Vivo X100 Ultra",
    sub: "Vivo Zeiss optics, telephoto",
    badge: "Vivo",
    image: "/vivo-x100-ultra-product-photo.jpg",
  },
]
