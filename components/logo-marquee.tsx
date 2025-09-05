"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function LogoMarquee() {
  const [pausedRow, setPausedRow] = useState<string | null>(null)

  const logos = [
    { name: "Microsoft", content: "image", color: "text-neutral-300", image: "/microsoft-logo.jpg" },
    { name: "Google", content: "image", color: "text-neutral-300", image: "/google-logo.jpg" },
    { name: "Apple", content: "image", color: "text-neutral-300", image: "/apple-logo.png" },
    { name: "Amazon", content: "image", color: "text-neutral-300", image: "/amazon-logo.jpg" },
    { name: "Meta", content: "image", color: "text-neutral-300", image: "/meta-logo.jpg" },
    { name: "Tesla", content: "image", color: "text-neutral-300", image: "/tesla-logo.jpg" },
    { name: "Netflix", content: "image", color: "text-neutral-300", image: "/netflix-logo.jpg" },
    { name: "Adobe", content: "image", color: "text-neutral-300", image: "/adobe-logo.jpg" },
  ]

  const secondRowLogos = [
    { name: "Samsung", content: "image", color: "text-neutral-300", image: "/samsung-logo.png" },
    { name: "Intel", content: "image", color: "text-neutral-300", image: "/intel-logo.jpg" },
    { name: "IBM", content: "image", color: "text-neutral-300", image: "/ibm-logo.jpg" },
    { name: "Oracle", content: "image", color: "text-neutral-300", image: "/oracle-logo.jpg" },
    { name: "Salesforce", content: "image", color: "text-neutral-300", image: "/salesforce-logo.jpg" },
    { name: "Spotify", content: "image", color: "text-neutral-300", image: "/spotify-logo.jpg" },
    { name: "Uber", content: "image", color: "text-neutral-300", image: "/uber-logo.jpg" },
    { name: "Airbnb", content: "image", color: "text-neutral-300", image: "/airbnb-logo.jpg" },
  ]

  const LogoCard = ({ logo, rowId }: { logo: any; rowId: string }) => (
    <div
      className="flex-shrink-0 mx-3"
      onMouseEnter={() => setPausedRow(rowId)}
      onMouseLeave={() => setPausedRow(null)}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
        {logo.image ? (
          <div className="relative w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12">
            <Image
              src={logo.image || "/placeholder.svg"}
              alt={logo.name}
              fill
              className="object-contain opacity-90"
              sizes="(min-width: 1024px) 128px, (min-width: 640px) 112px, 96px"
            />
          </div>
        ) : logo.bg ? (
          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${logo.bg} flex items-center justify-center`}>
            <span className={`text-sm sm:text-lg font-bold ${logo.color}`}>{logo.content}</span>
          </div>
        ) : (
          <span className={`text-lg sm:text-xl lg:text-2xl font-semibold ${logo.color}`}>{logo.content}</span>
        )}
      </div>
    </div>
  )

  return (
    <section className="text-white py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between mb-12 sm:flex-row sm:items-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center sm:text-left">
            Meet our <span className="text-lime-300">top-tier</span>
            <br />
            company
          </h2>
          <Button variant="outline" className="mt-4 sm:mt-0 liquid-glass hover:liquid-glass-enhanced bg-transparent">
            Learn More
          </Button>
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* First Row - Scrolling Right */}
          <div className="flex overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-right whitespace-nowrap ${pausedRow === "first" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "first" ? "paused" : "running",
                width: "max-content",
                transform: "translate3d(0, 0, 0)", // Added transform3d for hardware acceleration
              }}
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <LogoCard key={`first-${index}`} logo={logo} rowId="first" />
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Left */}
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
              className={`flex animate-scroll-left whitespace-nowrap ${pausedRow === "second" ? "animation-play-state-paused" : ""}`}
              style={{
                animationPlayState: pausedRow === "second" ? "paused" : "running",
                width: "max-content",
                transform: "translate3d(0, 0, 0)", // Added transform3d for hardware acceleration
              }}
            >
              {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
                <LogoCard key={`second-${index}`} logo={logo} rowId="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
