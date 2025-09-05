"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowUp } from "lucide-react"

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Button
        asChild
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg h-14 w-14 p-0"
      >
        <a
          href="https://wa.me/9035101337?text=Hello%20Sri%20Tele%20Links,%20I%20want%20to%20enquire%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="lg"
          variant="outline"
          className="rounded-full bg-white/10 hover:bg-white/20 border-white/20 text-white shadow-lg h-14 w-14 p-0 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
