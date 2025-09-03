"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Deal = {
  title: string
  description: string
  href: string
}

const deals: Deal[] = [
  {
    title: "Free Screen Guard with iPhone Purchase",
    description: "Limited-time offer. Add both to cart, discount auto-applies.",
    href: "/offers/free-screen-guard",
  },
  {
    title: "Exchange Old Phone, Get Instant Discount",
    description: "On-the-spot valuation and instant savings at checkout.",
    href: "/offers/exchange-discount",
  },
]

function useCountdown(target: Date | null) {
  const [now, setNow] = React.useState<Date>(() => new Date())
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!target) return null
  const diff = Math.max(0, target.getTime() - now.getTime())
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { hours, minutes, seconds, isOver: diff === 0 }
}

export function DealsOfDay({ endsAt }: { endsAt?: string }) {
  const target = endsAt ? new Date(endsAt) : null
  const countdown = useCountdown(target ?? null)

  return (
    <section aria-labelledby="deals-day" className="bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <h2 id="deals-day" className="text-balance text-2xl font-semibold text-white md:text-3xl">
            Deals of the Day
          </h2>
          {countdown ? (
            <div aria-live="polite" className="rounded-md bg-blue-500/15 px-3 py-2 text-sm text-blue-300">
              Offer ends in {countdown.hours}h {countdown.minutes}m {countdown.seconds}s
            </div>
          ) : null}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {deals.map((d) => (
            <Card key={d.title} className="border-green-600/70 bg-transparent">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">{d.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-white/70">{d.description}</p>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a href={d.href} aria-label={`${d.title} learn more`}>
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
