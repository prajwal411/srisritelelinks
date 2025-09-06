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
  title: "Sri Tele Links | Your Trusted Mobile Store in Chickballapur",
  description:
    "Sri Tele Links offers the latest smartphones, accessories, and authorized Realme service in Chickballapur. EMI options and exchange offers available.",
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
            <Plasma color="#6d28d9" speed={1.0} direction="forward" scale={2.0} opacity={0.5} mouseInteractive={true} />
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
