export default function BrandMarquee() {
  const brands = ["Apple", "Samsung", "OnePlus", "Xiaomi", "realme", "Nothing", "Vivo", "OPPO", "Motorola", "Nokia"]
  return (
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-semibold text-balance mb-6 text-white">Brands we offer</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
        {brands.map((b) => (
          <div
            key={b}
            className="border border-white/15 rounded-md py-3 px-4 bg-transparent text-white text-sm md:text-base flex items-center justify-center"
            aria-label={`Brand ${b}`}
          >
            <span className="font-medium">{b}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
