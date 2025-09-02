import Image from "next/image"

const brands = [
  {
    name: "Apple",
    logo: "/images/brands/apple.svg",
  },
  {
    name: "Samsung",
    logo: "/images/brands/samsung.svg",
  },
  {
    name: "Realme",
    logo: "/images/brands/realme.svg",
  },
  {
    name: "Oppo",
    logo: "/images/brands/oppo.svg",
  },
  {
    name: "Vivo",
    logo: "/images/brands/vivo.svg",
  },
]

export function BrandLogos() {
  return (
    <section id="brands" className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Brands We Deal In
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="relative h-12 w-24 transition-transform hover:scale-110 md:h-16 md:w-32"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-neutral-300">
        Sri Tele Links is your one-stop shop for all leading mobile phone brands.
      </p>
    </section>
  )
}
