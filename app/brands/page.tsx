import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"

const brands = [
  { name: "Apple", tagline: "Premium iPhones for Everyone", image: "/placeholder.svg?height=200&width=400" },
  { name: "Samsung", tagline: "Innovation & Flagship Quality", image: "/placeholder.svg?height=200&width=400" },
  { name: "Realme", tagline: "Power Meets Style", image: "/placeholder.svg?height=200&width=400" },
  { name: "Oppo", tagline: "Smartphones for the Trendsetters", image: "/placeholder.svg?height=200&width=400" },
  { name: "Vivo", tagline: "Photography Experts", image: "/placeholder.svg?height=200&width=400" },
]

export default function BrandsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 text-white">
        {/* Intro */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight">Brands We Offer</h1>
          <p className="text-neutral-400 mt-2 max-w-2xl mx-auto">
            At Sri Tele Links, we are proud to offer the latest smartphones and accessories from the world’s most
            trusted brands. Whether you want premium flagships or budget-friendly models, we’ve got you covered.
          </p>
        </header>

        {/* Apple */}
        <section className="mb-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Apple (Premium Experience)</h2>
          <p className="text-neutral-300 mt-2">
            Apple iPhones represent innovation and luxury. You’ll always find the latest iPhone models with us.
          </p>
          <div className="mt-3 text-sm text-neutral-300">Featured: iPhone 16, 16 Plus, 16 Pro, 16 Pro Max</div>
          <div className="mt-4">
            <Button asChild className="rounded-full">
              <a href="/products#Apple">Explore iPhones</a>
            </Button>
          </div>
        </section>

        {/* Samsung */}
        <section className="mb-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Samsung (Innovation & Flagship Power)</h2>
          <p className="text-neutral-300 mt-2">
            Samsung leads the Android world with the Galaxy S series and innovative foldables.
          </p>
          <div className="mt-3 text-sm text-neutral-300">Featured: Galaxy S25 Ultra, S25+, S25, Z Fold6, Z Flip6</div>
          <div className="mt-4">
            <Button asChild className="rounded-full">
              <a href="/products#Samsung">Explore Samsung Phones</a>
            </Button>
          </div>
        </section>

        {/* Realme */}
        <section className="mb-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Realme (Performance Meets Style)</h2>
          <p className="text-neutral-300 mt-2">
            As an Authorized Realme Service Center, we sell the latest Realme phones and provide genuine repairs and
            support.
          </p>
          <div className="mt-3 text-sm text-neutral-300">Featured: GT7 Pro 5G, GT7T 5G, Narzo 80 Pro 5G, P4 Pro 5G</div>
          <div className="mt-4">
            <Button asChild className="rounded-full">
              <a href="/products#Realme">Explore Realme Phones</a>
            </Button>
          </div>
        </section>

        {/* Oppo */}
        <section className="mb-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Oppo (Trendy & Youthful)</h2>
          <p className="text-neutral-300 mt-2">Stylish designs and strong cameras – perfect for trendsetters.</p>
          <div className="mt-3 text-sm text-neutral-300">
            Featured: Find X8 Pro, Find X8, Reno 14 Pro, Reno 14, Find N5
          </div>
          <div className="mt-4">
            <Button asChild className="rounded-full">
              <a href="/products#Oppo">Explore Oppo Phones</a>
            </Button>
          </div>
        </section>

        {/* Vivo */}
        <section className="mb-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Vivo (Photography Experts)</h2>
          <p className="text-neutral-300 mt-2">Built for photography lovers, with cutting-edge camera technology.</p>
          <div className="mt-3 text-sm text-neutral-300">Featured: Vivo X100 Ultra</div>
          <div className="mt-4">
            <Button asChild className="rounded-full">
              <a href="/products#Vivo">Explore Vivo Phones</a>
            </Button>
          </div>
        </section>

        {/* Why Shop These Brands with Us? */}
        <section className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold mb-3">Why Shop These Brands with Us?</h2>
          <ul className="grid gap-2 md:grid-cols-2 text-neutral-300">
            <li>Latest launches always available first</li>
            <li>100% genuine mobiles & accessories</li>
            <li>Best prices in Chickballapur</li>
            <li>EMI & exchange offers</li>
            <li>Realme Authorized Service Center</li>
          </ul>
        </section>
      </main>
      <AppverseFooter />
    </>
  )
}
