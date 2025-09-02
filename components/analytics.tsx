"use client"

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

export function Analytics() {
  useEffect(() => {
    // Initialize dataLayer array if it doesn't exist
    window.dataLayer = window.dataLayer || []
    
    // Define gtag function if it doesn't exist
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag
  }, [])

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="lazyOnload"
      >
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');
        `}
      </Script>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R"
        strategy="lazyOnload"
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W6LV22900R');
        `}
      </Script>
    </>
  )
}
