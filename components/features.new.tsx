"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "Why Choose Sri Tele Links?",
  subtitle: "Your Trusted Mobile Partner in Chickballapur"
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("sritelecontent")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Genuine Products */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">AUTHENTICITY</p>
            <CardTitle className="mt-1 text-xl text-white">✅ 100% Genuine Products</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-300">All our smartphones and accessories are sourced directly from authorized distributors, ensuring you get genuine products with warranty.</p>
          </CardContent>
        </Card>

        {/* Best Prices */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">AFFORDABILITY</p>
            <CardTitle className="mt-1 text-xl text-white">💰 Best Market Prices</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-300">We offer competitive prices on all our products, making premium smartphones accessible to everyone in Chickballapur.</p>
          </CardContent>
        </Card>

        {/* Customer Support */}
        <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-neutral-400">SUPPORT</p>
            <CardTitle className="mt-1 text-xl text-white">🤝 Expert Customer Service</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-neutral-300">Our team provides personalized guidance and reliable after-sales support to ensure your complete satisfaction.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
