"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Home, Store, Building2, MessageSquare, BadgeCheck } from "lucide-react"

export function SiteHeader() {
  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/About", label: "About Us", icon: Building2 },
    { href: "/products", label: "Products", icon: Store },
    { href: "/brands", label: "Brands We Offer", icon: BadgeCheck },
    { href: "/contact", label: "Contact Us", icon: MessageSquare },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <Image
              src="/icons/skitbit-white.svg"
              alt="Sri Tele Links logo"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span className="font-semibold tracking-wide text-white">Sri Tele Links</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-white md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-lime-300 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Button asChild className="rounded-lg">
              <a href="tel:9035101337">Call Now</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-lg bg-transparent text-white border-white/20 hover:bg-white/10"
            >
              <a href="https://wa.me/9035101337" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <Image
                    src="/icons/skitbit-white.svg"
                    alt="Sri Tele Links logo"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="font-semibold tracking-wide text-white text-lg">Sri Tele Links</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-white">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-lime-300 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-white">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Buttons at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4 space-y-2">
                  <Button asChild className="w-full rounded-lg">
                    <a href="tel:9035101337">Call Now</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-lg bg-transparent text-white border-white/20 hover:bg-white/10"
                  >
                    <a href="https://wa.me/9035101337" target="_blank" rel="noopener noreferrer">
                      WhatsApp Us
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
