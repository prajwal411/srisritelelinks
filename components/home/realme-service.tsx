import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function RealmeService() {
  const points = ["Warranty support", "Genuine spare parts", "Certified repairs", "Software updates"]

  return (
    <section id="realme-service" aria-labelledby="realme-service-title" className="w-full">
      <div className="container mx-auto px-4">
        <Card className="bg-transparent border border-white/10">
          <div className="p-6 md:p-8">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <Badge className="bg-lime-500 text-black">Realme Authorized Service</Badge>
              <span className="text-sm text-neutral-400">Authorized Realme Service Center</span>
            </div>

            <h2 id="realme-service-title" className="text-pretty text-2xl md:text-3xl font-semibold text-white">
              Authorized Realme Service Center
            </h2>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 text-lime-400" aria-hidden />
                  <span className="text-white/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  )
}
