"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, MessageCircle } from "lucide-react"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline:
    "All major smartphone brands under one roof. Genuine mobiles, best prices, and friendly service in Chickballapur.",
  copyright: "© 2025 Sri Tele Links – All Rights Reserved",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    const savedContent = typeof window !== "undefined" ? localStorage.getItem("skitbit-content") : null
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch {
        // ignore
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild className="rounded-full px-6 py-2 text-sm font-medium">
            <a href="https://wa.me/9035101337" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6 py-2 text-sm font-medium bg-transparent">
            <a href="tel:9035101337">Call Now</a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image
                  src="/icons/skitbit-white.svg"
                  alt="Sri Tele Links logo"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-xl font-semibold text-lime-300">Sri Tele Links</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
              <div className="mt-3 text-sm text-neutral-300 space-y-1">
                <div>Phone: 9035101337 / 9886872388</div>
                <div>WhatsApp: 9035101337</div>
                <div>
                  Email:{" "}
                  <a href="mailto:lalithasripad@gmail.com" className="hover:text-lime-300">
                    lalithasripad@gmail.com
                  </a>
                </div>
                <div>
                  Address: Opp. Belaku Eye Care, Beside Bhavani Coffee Works, B B Road, Chickballapur, Pin – 562101
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Quick Links</h5>
              <ul className="space-y-2 text-sm text-neutral-300">
                {[
                  { label: "Home", href: "/" },
                  { label: "Products", href: "/products" },
                  { label: "Brands We Offer", href: "/brands" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-lime-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Social</h5>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-neutral-400" />
                  <a
                    href="https://wa.me/9035101337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lime-300"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Facebook className="h-4 w-4 text-neutral-400" />
                  <a href="#" className="hover:text-lime-300">
                    Facebook
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-neutral-400" />
                  <a href="#" className="hover:text-lime-300">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/revisions" className="hover:text-lime-300">
                Privacy & Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
