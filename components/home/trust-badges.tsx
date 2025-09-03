import { ShieldCheck, BadgeDollarSign, Store, Smile } from "lucide-react"

const items = [
  { icon: ShieldCheck, title: "Genuine Products", desc: "100% original with full warranty." },
  { icon: BadgeDollarSign, title: "Best Prices in Chickballapur", desc: "Transparent pricing and value deals." },
  { icon: Store, title: "All Major Brands", desc: "From Apple and Samsung to Realme, Oppo, Vivo." },
  { icon: Smile, title: "Friendly Service", desc: "Personal assistance online and in-store." },
]

export function TrustBadges() {
  return (
    <section aria-labelledby="why-shop" className="bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 id="why-shop" className="text-balance text-2xl font-semibold text-white md:text-3xl">
          Why Shop With Us
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="flex items-start gap-3 rounded-md glass-border-subtle p-4">
              <it.icon className="mt-0.5 h-5 w-5 text-blue-400" aria-hidden="true" />
              <div>
                <p className="font-medium text-white">{it.title}</p>
                <p className="text-sm text-white/70">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
