"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQCompact() {
  return (
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-semibold text-balance mb-6">FAQs</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you offer manufacturer warranty?</AccordionTrigger>
          <AccordionContent>
            Yes, all new phones include standard manufacturer warranty. We also guide you on claim procedures.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is delivery available?</AccordionTrigger>
          <AccordionContent>
            Local delivery and in-store pickup are available. For other locations, contact us on WhatsApp to arrange
            shipping.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you provide exchange or buyback?</AccordionTrigger>
          <AccordionContent>
            Yes, we evaluate your device condition for exchange or buyback at fair prices. Bring your device or message
            us for a quote.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
