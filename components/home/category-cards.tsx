import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { name: "Smartphones", href: "/products", img: "/smartphones-category.png" },
  { name: "Accessories", href: "/products", img: "/mobile-accessories-category.jpg" },
  { name: "Premium Phones", href: "/products", img: "/premium-phones-category.jpg" },
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
            <Link key={c.name} href={c.href} className="group">
              <Card className="transition-shadow group-hover:shadow-md border-white/15 bg-transparent">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-white">{c.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={c.img || "/placeholder.svg?height=300&width=400&query=mobile category"}
                    alt={`${c.name} preview`}
                    className="h-40 w-full rounded-md object-cover"
                    crossOrigin="anonymous"
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
