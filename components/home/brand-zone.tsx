const brands = [
  { name: "Apple", img: "/apple-logo.png", href: "/brand/apple" },
  { name: "Samsung", img: "/samsung-logo.png", href: "/brand/samsung" },
  { name: "Realme", img: "/realme-logo.png", href: "/brand/realme" },
  { name: "Oppo", img: "/oppo-logo.jpg", href: "/brand/oppo" },
  { name: "Vivo", img: "/vivo-logo.jpg", href: "/brand/vivo" },
]

export function BrandZone() {
  return (
    <section aria-labelledby="brand-zone" className="bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between">
          <h2 id="brand-zone" className="text-balance text-2xl font-semibold text-white md:text-3xl">
            Shop by Brand
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {brands.map((b) => (
            <a
              key={b.name}
              href={b.href}
              className="group flex items-center justify-center rounded-md border border-white/15 p-4 transition-colors hover:bg-white/5"
            >
              <img
                src={b.img || "/placeholder.svg"}
                alt={`${b.name} logo`}
                className="h-10 w-auto opacity-90 transition-opacity group-hover:opacity-100"
                crossOrigin="anonymous"
              />
              <span className="sr-only">{b.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
