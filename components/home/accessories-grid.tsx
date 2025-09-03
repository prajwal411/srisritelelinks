import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const accessories = [
  { name: "Cases & Covers", href: "/accessories/cases", img: "/phone-cases.jpg" },
  { name: "Headphones & Earphones", href: "/accessories/audio", img: "/diverse-people-listening-headphones.png" },
  { name: "Chargers & Cables", href: "/accessories/charging", img: "/chargers-cables.jpg" },
  { name: "Power Banks", href: "/accessories/power-banks", img: "/power-banks.jpg" },
]

export function AccessoriesGrid() {
  return (
    <section aria-labelledby="accessories">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 id="accessories" className="text-balance text-2xl font-semibold text-white md:text-3xl">
          Accessories
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {accessories.map((a) => (
            <a key={a.name} href={a.href} className="group">
              <Card className="transition-shadow group-hover:shadow-md border-white/15 bg-transparent">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-white">{a.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={a.img || "/placeholder.svg"}
                    alt={`${a.name}`}
                    className="h-36 w-full rounded-md object-cover"
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
