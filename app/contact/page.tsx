import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-[#0a0a0a] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10 shadow-xl">
              <div className="relative space-y-8">
                <header className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-lime-300">Contact Us</h1>
                  <p className="text-neutral-400 text-lg">
                    Have questions? Get in touch with us.
                  </p>
                </header>

                <div className="grid gap-8 md:grid-cols-2">
                  {/* Contact Info */}
                  <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
                    <CardContent className="p-6 space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Visit Our Store</h3>
                        <p className="text-neutral-300">
                          Opp. Belaku Eye Care,<br />
                          Beside Bhavani Coffee Works,<br />
                          B B Road, Chickballapur - 562101
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
                        <div className="space-y-2">
                          <p className="text-neutral-300">
                            <a href="tel:+919035101337" className="hover:text-white">📞 +91 90351 01337</a>
                          </p>
                          <p className="text-neutral-300">
                            <a href="tel:+919886872388" className="hover:text-white">📞 +91 98868 72388</a>
                          </p>
                          <p className="text-neutral-300">
                            <a href="mailto:lalithasripad@gmail.com" className="hover:text-white">
                              📧 lalithasripad@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <div className="flex gap-4">
                          <Button
                            asChild
                            className="w-full bg-green-600 hover:bg-green-500"
                          >
                            <a
                              href="https://wa.me/9035101337"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              💬 WhatsApp
                            </a>
                          </Button>
                          <Button
                            asChild
                            className="w-full bg-blue-600 hover:bg-blue-500"
                          >
                            <a href="tel:+919035101337">
                              📞 Call Now
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Map */}
                  <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Location Map</h3>
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.2675164069634!2d77.72120661482443!3d13.432805690523687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1ec94b93911b1%3A0x2b2b2b2b2b2b2b2b!2sSri%20Tele%20Links!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Operating Hours */}
                <Card className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Store Hours</h3>
                    <div className="grid grid-cols-2 gap-4 text-neutral-300">
                      <div>
                        <p className="font-semibold">Monday - Saturday</p>
                        <p>9:30 AM - 8:30 PM</p>
                      </div>
                      <div>
                        <p className="font-semibold">Sunday</p>
                        <p>10:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
