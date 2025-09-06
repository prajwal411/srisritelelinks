import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

import { Inter } from "next/font/google"
import Plasma from "@/components/plasma"
import DynamicScripts from "@/components/dynamic-scripts"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingButtons } from "@/components/floating-buttons"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Skitbit | 3D Animation Made Simple, Reliable & Scalable",
  description:
    "From product launches to full-scale campaigns, Skitbit delivers 3D animation that's fast, consistent, and built to wow your audience.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font Preload */}
        <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Client components properly wrapped in ThemeProvider */}
          <DynamicScripts />
          <div className="fixed inset-0 z-0 bg-black">
            <Plasma color="#8B00FF" speed={1.2} direction="forward" scale={2.5} opacity={0.7} mouseInteractive={true} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(45deg, rgba(138,43,226,0.2), rgba(75,0,130,0.2))', mixBlendMode: 'overlay' }}></div>
          </div>
          <div className="relative z-10 bg-transparent">
            {children}
            <FloatingButtons />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
