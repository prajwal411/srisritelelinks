export default function Testimonials() {
  const items = [
    {
      name: "Rohit S.",
      quote:
        "Great prices and quick delivery. They helped me pick the right model and transferred my data hassle-free.",
    },
    {
      name: "Ananya P.",
      quote: "Trusted shop. Genuine phones and courteous staff. The after-sales support was excellent.",
    },
    {
      name: "Karan M.",
      quote: "Upgraded to a flagship without breaking the bank. Smooth experience and transparent pricing.",
    },
  ]
  return (
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-semibold text-balance mb-6">What customers say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((t) => (
          <blockquote key={t.name} className="border rounded-lg p-4 bg-background">
            <p className="text-lg leading-relaxed">{"★★★★★"}</p>
            <p className="mt-2 text-pretty">{t.quote}</p>
            <footer className="mt-3 text-sm text-muted-foreground">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  )
}
