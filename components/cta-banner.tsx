import { Button } from "@/components/ui/button"

export default function CTABanner() {
  return (
    <div className="w-full border rounded-xl bg-background p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-balance">Ready to upgrade your phone?</h2>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          Talk to our experts for the best deals and quick delivery.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button asChild>
          <a href="tel:+919999999999" aria-label="Call now">
            Call Now
          </a>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://wa.me/?text=Hi%2C%20I%20want%20to%20buy%20a%20new%20phone."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}
