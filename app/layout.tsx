import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

import { Inter } from "next/font/google"
import Plasma from "@/components/plasma"
import DynamicScripts from "@/components/dynamic-scripts"
import { ThemeProvider } from "@/components/theme-provider"

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
            <Plasma color="#8b5cf6" speed={0.8} direction="forward" scale={1.5} opacity={0.4} mouseInteractive={true} />
          </div>
          <div className="relative z-10 bg-transparent">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
