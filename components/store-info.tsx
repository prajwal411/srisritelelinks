export default function StoreInfo() {
  return (
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-semibold text-balance mb-4">Visit our store</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 bg-background">
          <h3 className="font-semibold mb-2">Address</h3>
          <p className="text-sm text-muted-foreground">Sri Tele Links, Main Market Road, Your City, PIN 560000</p>
        </div>
        <div className="border rounded-lg p-4 bg-background">
          <h3 className="font-semibold mb-2">Hours</h3>
          <p className="text-sm text-muted-foreground">
            Mon–Sat: 10:00 AM – 8:00 PM
            <br />
            Sun: 11:00 AM – 6:00 PM
          </p>
        </div>
        <div className="border rounded-lg p-4 bg-background">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm text-muted-foreground">Phone: +91 99999 99999</p>
          <div className="mt-2 space-x-3">
            <a className="underline underline-offset-4" href="tel:+919999999999">
              Call
            </a>
            <a
              className="underline underline-offset-4"
              href="https://wa.me/?text=Hi%2C%20I%27d%20like%20store%20directions."
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <a
          className="text-sm underline underline-offset-4"
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  )
}
