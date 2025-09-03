import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { name: "Smartphones", href: "/category/smartphones", img: "/smartphones.jpg" },
  { name: "Accessories", href: "/category/accessories", img: "/accessories.png" },
  { name: "EMI / Exchange Offers", href: "/offers/emi-exchange", img: "/emi-exchange-offers.jpg" },
  { name: "Premium Phones", href: "/category/premium", img: "/premium-phones.jpg" },
]

export function CategoryCards() {
  return (
    <section aria-labelledby="shop-by-category">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 id="shop-by-category" className="text-balance text-2xl font-semibold text-white md:text-3xl">
          Shop by Category
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {categories.map((c) => (
            <a key={c.name} href={c.href} className="group">
              <Card className="transition-shadow group-hover:shadow-md border-white/15 bg-transparent">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-white">{c.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={c.img || "/placeholder.svg"}
                    alt={`${c.name} preview`}
                    className="h-40 w-full rounded-md object-cover"
                    crossOrigin="anonymous"
                  />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
