import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@/components/analytics"
import PlasmaWrapper from "@/components/plasma-wrapper"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Sri Tele Links | Your Trusted Mobile Partner in Chickballapur",
  description: "Discover the latest smartphones from Realme, Oppo, Vivo, Apple, and Samsung in Chickballapur. Genuine products, best prices, and reliable after-sales service.",
  keywords: "Mobile shop in Chickballapur, Buy Realme phones in Chickballapur, Oppo smartphones BB Road, iPhone store Chickballapur, Samsung Galaxy S25 Ultra Chickballapur, Vivo X100 Ultra near me, Best phone shop Chickballapur",
  generator: "Next.js",
  openGraph: {
    title: "Sri Tele Links - Premium Mobile Store in Chickballapur",
    description: "Your one-stop shop for all leading mobile phone brands. Latest smartphones, genuine accessories, and expert guidance.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/icons/favicon-dark.svg" />
        <Script id="dynamic-favicon">
          {`
            (function() {
              function updateFavicon() {
                const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const faviconHref = darkMode ? '/icons/skitbit-white.svg' : '/icons/favicon-dark.svg';
                let link = document.querySelector("link[rel~='icon']");
                if (!link) {
                  link = document.createElement('link');
                  link.rel = 'icon';
                  document.getElementsByTagName('head')[0].appendChild(link);
                }
                link.href = faviconHref;
              }
              
              // Initial setup
              updateFavicon();
              
              // Listen for changes in color scheme
              window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
            })();
          `}
        </Script>
      </head>
      <body className="bg-black">
        <Analytics />
        <PlasmaWrapper />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
