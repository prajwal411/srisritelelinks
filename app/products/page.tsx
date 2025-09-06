"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { FloatingButtons } from "@/components/floating-buttons"


type Product = {
  brand: string
  name: string
  image: string
  additionalImages?: string[] // Optional array of additional images
  features: string[]
}

const byBrand: Record<string, Product[]> = {
  Apple: [
    {
      brand: "Apple",
      name: "iPhone 16",
      image: "/products/iPhone 16.webp",
      additionalImages: ["/products/iPhone 16 Plus.jpg", "/products/iPhone 16 Pro.webp"],
      features: ["A18 Bionic chip", "48MP Main camera", "6.1-inch Super Retina XDR", "Action Button", "USB-C"],
    },
    {
      brand: "Apple",
      name: "iPhone 16 Plus",
      image: "/products/iPhone 16 Plus.jpg",
      additionalImages: ["/products/iPhone 16.webp", "/products/iPhone 16 Pro Max.jpg"],
      features: ["A18 Bionic chip", "48MP Main camera", "6.7-inch Super Retina XDR", "Action Button", "USB-C"],
    },
    {
      brand: "Apple",
      name: "iPhone 16 Pro",
      image: "/products/iPhone 16 Pro.webp",
      additionalImages: ["/products/iPhone 16 Pro Max.jpg", "/products/iPhone 16.webp"],
      features: [
        "A18 Pro chip",
        "48MP Pro camera system",
        "6.3-inch ProMotion display",
        "Titanium design",
        "5x Telephoto zoom",
      ],
    },
    {
      brand: "Apple",
      name: "iPhone 16 Pro Max",
      image: "/products/iPhone 16 Pro Max.jpg",
      additionalImages: ["/products/iPhone 16 Pro.webp", "/products/iPhone 16 Plus.jpg"],
      features: [
        "A18 Pro chip",
        "48MP Pro camera system",
        "6.9-inch ProMotion display",
        "Titanium design",
        "5x Telephoto zoom",
      ],
    },
  ],
  Samsung: [
    {
      brand: "Samsung",
      name: "Galaxy S25 Ultra",
      image: "/products/Galaxy S25 Ultra.jpg",
      additionalImages: ["/products/Galaxy S25+.jpg", "/products/Galaxy S25.jpg"],
      features: [
        "Snapdragon 8 Elite",
        "200MP main camera",
        "6.8-inch Dynamic AMOLED 2X",
        "S Pen included",
        "5000mAh battery",
      ],
    },
    {
      brand: "Samsung",
      name: "Galaxy S25+",
      image: "/products/Galaxy S25+.jpg",
      additionalImages: ["/products/Galaxy S25.jpg", "/products/Galaxy S25 Ultra.jpg"],
      features: [
        "Snapdragon 8 Elite",
        "50MP triple camera",
        "6.7-inch Dynamic AMOLED 2X",
        "4900mAh battery",
        "45W fast charging",
      ],
    },
    {
      brand: "Samsung",
      name: "Galaxy S25",
      image: "/products/Galaxy S25.jpg",
      additionalImages: ["/products/Galaxy S25+.jpg", "/products/Galaxy S25 Ultra.jpg"],
      features: [
        "Snapdragon 8 Elite",
        "50MP triple camera",
        "6.2-inch Dynamic AMOLED 2X",
        "4000mAh battery",
        "25W fast charging",
      ],
    },
    {
      brand: "Samsung",
      name: "Galaxy Z Fold6",
      image: "/products/Galaxy Z Fold6.jpg",
      additionalImages: ["/products/Galaxy S25 Ultra.jpg", "/products/Galaxy S25+.jpg"],
      features: [
        "Snapdragon 8 Gen 3",
        "50MP triple camera",
        "7.6-inch foldable display",
        "4400mAh battery",
        "S Pen support",
      ],
    },
    {
      brand: "Samsung",
      name: "Galaxy Z Flip6",
      image: "/products/Galaxy Z Flip6.jpg",
      additionalImages: ["/products/Galaxy Z Fold6.jpg", "/products/Galaxy S25 Ultra.jpg"],
      features: [
        "Snapdragon 8 Gen 3",
        "50MP dual camera",
        "6.7-inch foldable display",
        "4000mAh battery",
        "Compact flip design",
      ],
    },
    {
      brand: "Samsung",
      name: "Galaxy A55 5G",
      image: "/products/Galaxy A55 5G.jpg",
      additionalImages: ["/products/Galaxy A35 5G.jpg", "/products/Galaxy M55 5G.jpg"],
      features: ["Exynos 1480", "50MP OIS camera", "6.6-inch Super AMOLED", "5000mAh battery", "25W fast charging"],
    },
    {
      brand: "Samsung",
      name: "Galaxy A35 5G",
      image: "/products/Galaxy A35 5G.jpg",
      additionalImages: ["/products/Galaxy A55 5G.jpg", "/products/Galaxy M55 5G.jpg"],
      features: ["Exynos 1380", "50MP main camera", "6.6-inch Super AMOLED", "5000mAh battery", "25W charging"],
    },
    {
      brand: "Samsung",
      name: "Galaxy M55 5G",
      image: "/products/Galaxy M55 5G.jpg",
      additionalImages: ["/products/Galaxy A55 5G.jpg", "/products/Galaxy A35 5G.jpg"],
      features: [
        "Snapdragon 7 Gen 1",
        "50MP triple camera",
        "6.7-inch Super AMOLED+",
        "5000mAh battery",
        "45W charging",
      ],
    },
  ],
  Realme: [
    {
      brand: "Realme",
      name: "GT7 Pro 5G",
      image: "/products/GT7 Pro 5G.jpg",
      additionalImages: ["/products/GT7 5G.jpg", "/products/GT7T 5G.jpg"],
      features: [
        "Snapdragon 8 Elite",
        "50MP periscope camera",
        "6.78-inch curved AMOLED",
        "6500mAh battery",
        "120W SuperVOOC",
      ],
    },
    {
      brand: "Realme",
      name: "GT7T 5G",
      image: "/products/GT7T 5G.jpg",
      additionalImages: ["/products/GT7 Pro 5G.jpg", "/products/GT7 5G.jpg"],
      features: [
        "Snapdragon 8 Gen 3",
        "50MP triple camera",
        "6.74-inch AMOLED",
        "5800mAh battery",
        "100W fast charging",
      ],
    },
    {
      brand: "Realme",
      name: "GT7 5G",
      image: "/products/GT7 5G.jpg",
      additionalImages: ["/products/GT7 Pro 5G.jpg", "/products/GT7T 5G.jpg"],
      features: ["Snapdragon 8 Gen 3", "50MP main camera", "6.7-inch AMOLED", "5400mAh battery", "80W SuperVOOC"],
    },
    {
      brand: "Realme",
      name: "Narzo 80 Pro 5G",
      image: "/products/Narzo 80 Pro 5G.jpg",
      additionalImages: ["/products/GT7 Pro 5G.jpg", "/products/Narzo 80x 5G.jpg"],
      features: ["Dimensity 7050", "50MP AI camera", "6.67-inch AMOLED", "5000mAh battery", "67W SuperVOOC"],
    },
    {
      brand: "Realme",
      name: "Narzo 80x 5G",
      image: "/products/Narzo 80x 5G.jpg",
      additionalImages: ["/products/Narzo 80 Pro 5G.jpg", "/products/GT7 5G.jpg"],
      features: ["Dimensity 6300", "50MP dual camera", "6.72-inch display", "5000mAh battery", "45W fast charging"],
    },
    {
      brand: "Realme",
      name: "15 Pro 5G",
      image: "/products/15 Pro 5G.jpg",
      additionalImages: ["/products/15T 5G.jpg", "/products/15 Pro.jpg"],
      features: [
        "Snapdragon 6 Gen 1",
        "50MP OIS camera",
        "6.67-inch curved AMOLED",
        "5000mAh battery",
        "67W SuperVOOC",
      ],
    },
    {
      brand: "Realme",
      name: "15T 5G",
      image: "/products/15T 5G.jpg",
      additionalImages: ["/products/15 Pro 5G.jpg", "/products/15.jpg"],
      features: ["Dimensity 7300", "50MP main camera", "6.67-inch AMOLED", "5000mAh battery", "45W fast charging"],
    },
    {
      brand: "Realme",
      name: "C75 5G",
      image: "/products/C75 5G.jpg",
      additionalImages: ["/products/C65 5G.jpg", "/products/GT7 5G.jpg"],
      features: ["Dimensity 6300", "50MP AI camera", "6.72-inch display", "6000mAh battery", "45W fast charging"],
    },
    {
      brand: "Realme",
      name: "C65 5G",
      image: "/products/C65 5G.jpg",
      additionalImages: ["/products/C75 5G.jpg", "/products/15T 5G.jpg"],
      features: ["Dimensity 6300", "50MP AI camera", "6.67-inch display", "5000mAh battery", "15W charging"],
    },
    {
      brand: "Realme",
      name: "13+ 5G",
      image: "/products/13+ 5G.jpg",
      additionalImages: ["/products/13 5G.jpg", "/products/GT7 5G.jpg"],
      features: [
        "Dimensity 7300",
        "50MP LYT-600 camera",
        "6.67-inch curved AMOLED",
        "5000mAh battery",
        "80W SuperVOOC",
      ],
    },
    {
      brand: "Realme",
      name: "13 5G",
      image: "/products/13 5G.jpg",
      additionalImages: ["/products/13+ 5G.jpg", "/products/GT7 5G.jpg"],
      features: ["Dimensity 6300", "50MP AI camera", "6.72-inch display", "5000mAh battery", "45W fast charging"],
    },
  ],
  Oppo: [
    {
      brand: "Oppo",
      name: "Find X8 Pro",
      image: "/products/Find X8 Pro.jpg",
      additionalImages: ["/products/Find X8.jpg", "/products/Find X8 Ultra (2025).jpg"],
      features: [
        "Dimensity 9400",
        "50MP Hasselblad camera",
        "6.78-inch curved AMOLED",
        "5910mAh battery",
        "80W SuperVOOC",
      ],
    },
    {
      brand: "Oppo",
      name: "Find X8",
      image: "/products/Find X8.jpg",
      additionalImages: ["/products/Find X8 Pro.jpg", "/products/Find X8s  X8 Plus (2025).jpg"],
      features: ["Dimensity 9400", "50MP triple camera", "6.59-inch AMOLED", "5630mAh battery", "80W fast charging"],
    },
    {
      brand: "Oppo",
      name: "Find X8 Ultra (2025)",
      image: "/products/Find X8 Ultra (2025).jpg",
      additionalImages: ["/products/Find X8 Pro.jpg", "/products/Find X8s  X8 Plus (2025).jpg"],
      features: [
        "Snapdragon 8 Elite",
        "200MP periscope camera",
        "6.82-inch curved display",
        "6000mAh battery",
        "100W SuperVOOC",
      ],
    },
    {
      brand: "Oppo",
      name: "Find X8s / X8 Plus (2025)",
      image: "/products/Find X8s  X8 Plus (2025).jpg",
      additionalImages: ["/products/Find X8 Ultra (2025).jpg", "/products/Find X8.jpg"],
      features: ["Dimensity 9400+", "50MP Hasselblad system", "6.7-inch AMOLED", "5800mAh battery", "100W charging"],
    },
    {
      brand: "Oppo",
      name: "Reno 14 Pro",
      image: "/products/Reno 14 Pro.jpg",
      additionalImages: ["/products/Reno 14.jpg", "/products/Reno 13 Pro.jpg"],
      features: [
        "Dimensity 7300",
        "50MP portrait camera",
        "6.7-inch curved AMOLED",
        "4700mAh battery",
        "80W SuperVOOC",
      ],
    },
    {
      brand: "Oppo",
      name: "Reno 14",
      image: "/products/Reno 14.jpg",
      additionalImages: ["/products/Reno 14 Pro.jpg", "/products/Reno 13.jpg"],
      features: ["Snapdragon 7 Gen 3", "50MP main camera", "6.7-inch AMOLED", "5000mAh battery", "80W fast charging"],
    },
    {
      brand: "Oppo",
      name: "Reno 13 Pro",
      image: "/products/Reno 13 Pro.jpg",
      additionalImages: ["/products/Reno 13.jpg", "/products/Reno 14 Pro.jpg"],
      features: [
        "Snapdragon 8+ Gen 1",
        "50MP IMX890 camera",
        "6.7-inch curved AMOLED",
        "4700mAh battery",
        "80W SuperVOOC",
      ],
    },
    {
      brand: "Oppo",
      name: "Reno 13",
      image: "/products/Reno 13.jpg",
      additionalImages: ["/products/Reno 13 Pro.jpg", "/products/Reno 14.jpg"],
      features: ["Snapdragon 778G", "64MP periscope camera", "6.7-inch AMOLED", "4500mAh battery", "67W fast charging"],
    },
    {
      brand: "Oppo",
      name: "Find N5 (Foldable)",
      image: "/products/Find N5 (Foldable).jpg",
      additionalImages: ["/products/Find X8 Ultra (2025).jpg", "/products/Find X8 Pro.jpg"],
      features: [
        "Snapdragon 8 Gen 4",
        "50MP Hasselblad camera",
        "7.82-inch foldable display",
        "4805mAh battery",
        "67W wireless charging",
      ],
    },
    {
      brand: "Oppo",
      name: "A3 Pro 5G",
      image: "/products/A3 Pro 5G.jpg",
      additionalImages: ["/products/A80 5G.jpg", "/products/K12x 5G.jpg"],
      features: ["Snapdragon 695", "50MP AI camera", "6.7-inch AMOLED", "5000mAh battery", "67W SuperVOOC"],
    },
    {
      brand: "Oppo",
      name: "A80 5G",
      image: "/products/A80 5G.jpg",
      additionalImages: ["/products/A3 Pro 5G.jpg", "/products/K12x 5G.jpg"],
      features: ["Dimensity 6300", "50MP dual camera", "6.67-inch display", "5100mAh battery", "45W fast charging"],
    },
    {
      brand: "Oppo",
      name: "K12x 5G",
      image: "/products/K12x 5G.jpg",
      additionalImages: ["/products/A80 5G.jpg", "/products/A3 Pro 5G.jpg"],
      features: ["Snapdragon 695", "50MP main camera", "6.67-inch display", "5100mAh battery", "80W SuperVOOC"],
    },
  ],
  Vivo: [
    {
      brand: "Vivo",
      name: "X100 Ultra",
      image: "/products/X100 Ultra.jpg",
      additionalImages: ["/products/X100 Pro.jpg", "/products/X100.jpg"],
      features: [
        "Snapdragon 8 Gen 3",
        "200MP Zeiss camera",
        "6.78-inch curved AMOLED",
        "5500mAh battery",
        "80W fast charging",
      ],
    },
    {
      brand: "Vivo",
      name: "X100 Pro",
      image: "/products/X100 Pro.jpg",
      additionalImages: ["/products/X100 Ultra.jpg", "/products/X100.jpg"],
      features: [
        "Dimensity 9300",
        "50MP Zeiss camera",
        "6.78-inch curved AMOLED",
        "5400mAh battery",
        "100W fast charging",
      ],
    },
    {
      brand: "Vivo",
      name: "X100",
      image: "/products/X100.jpg",
      additionalImages: ["/products/X100 Ultra.jpg", "/products/X100 Pro.jpg"],
      features: ["Dimensity 9300", "50MP OIS camera", "6.78-inch AMOLED", "5000mAh battery", "120W fast charging"],
    },
    {
      brand: "Vivo",
      name: "V40 Pro",
      image: "/products/V40 Pro.jpg",
      additionalImages: ["/products/V40.jpg", "/products/X100.jpg"],
      features: [
        "Dimensity 9200+",
        "50MP Zeiss camera",
        "6.78-inch curved AMOLED",
        "5500mAh battery",
        "80W fast charging",
      ],
    },
    {
      brand: "Vivo",
      name: "V40",
      image: "/products/V40.jpg",
      additionalImages: ["/products/V40 Pro.jpg", "/products/T3 Ultra 5G.jpg"],
      features: ["Snapdragon 7 Gen 3", "50MP OIS camera", "6.78-inch AMOLED", "5500mAh battery", "80W charging"],
    },
    {
      brand: "Vivo",
      name: "T3 Ultra 5G",
      image: "/products/T3 Ultra 5G.jpg",
      additionalImages: ["/products/T3 Pro 5G.jpg", "/products/V40.jpg"],
      features: ["Dimensity 9200+", "50MP Sony IMX921", "6.78-inch curved AMOLED", "5500mAh battery", "80W charging"],
    },
    {
      brand: "Vivo",
      name: "T3 Pro 5G",
      image: "/products/T3 Pro 5G.jpg",
      additionalImages: ["/products/T3 Ultra 5G.jpg", "/products/V40 Pro.jpg"],
      features: [
        "Snapdragon 7 Gen 3",
        "50MP Sony camera",
        "6.77-inch curved AMOLED",
        "5500mAh battery",
        "80W charging",
      ],
    },
    {
      brand: "Vivo",
      name: "Y28 5G",
      image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f",
      additionalImages: ["/products/Y28 5G.jpg", "/products/T3 Pro 5G.jpg"],
      features: ["Dimensity 6020", "50MP main camera", "6.68-inch display", "6000mAh battery", "44W fast charging"],
    },
  ],
  OnePlus: [
    {
      brand: "OnePlus",
      name: "13 5G",
      image: "/products/one plus 13 5G.jpg",
      additionalImages: ["/products/13R 5G.jpg", "/products/13+ 5G.jpg"],
      features: [
        "Snapdragon 8 Elite",
        "50MP Hasselblad camera",
        "6.82-inch LTPO AMOLED",
        "6000mAh battery",
        "100W SuperVOOC",
      ],
    },
    {
      brand: "OnePlus",
      name: "13R 5G",
      image: "/products/13R 5G.jpg",
      additionalImages: ["/products/one plus 13 5G.jpg", "/products/13+ 5G.jpg"],
      features: [
        "Snapdragon 8 Gen 3",
        "50MP Sony LYT-700",
        "6.78-inch LTPO AMOLED",
        "6000mAh battery",
        "100W charging",
      ],
    },
    {
      brand: "OnePlus",
      name: "13+ 5G",
      image: "/products/13+ 5G.jpg",
      additionalImages: ["/products/one plus 13 5G.jpg", "/products/13R 5G.jpg"],
      features: [
        "Snapdragon 8 Gen 3",
        "50MP Hasselblad camera",
        "6.82-inch LTPO AMOLED",
        "5400mAh battery",
        "100W SuperVOOC",
      ],
    },
    {
      brand: "OnePlus",
      name: "12 5G",
      image: "/products/12 5G.jpg",
      additionalImages: ["/products/13+ 5G.jpg", "/products/13R 5G.jpg"],
      features: [
        "Snapdragon 8 Gen 3",
        "50MP Hasselblad camera",
        "6.82-inch LTPO AMOLED",
        "5400mAh battery",
        "100W SuperVOOC",
      ],
    },
    {
      brand: "OnePlus",
      name: "Nord CE4 5G",
      image: "/products/Nord CE4 5G.jpg",
      additionalImages: ["/products/12 5G.jpg", "/products/13+ 5G.jpg"],
      features: ["Snapdragon 7 Gen 3", "50MP LYT-600 camera", "6.7-inch AMOLED", "5500mAh battery", "100W SuperVOOC"],
    },
  ],
  Xiaomi: [
    {
      brand: "Xiaomi",
      name: "15 Pro",
      image: "/products/15 Pro.jpg",
      additionalImages: ["/products/15.jpg", "/products/14 Ultra.jpg"],
      features: [
        "Snapdragon 8 Elite",
        "50MP Leica camera",
        "6.73-inch LTPO AMOLED",
        "6100mAh battery",
        "90W HyperCharge",
      ],
    },
    {
      brand: "Xiaomi",
      name: "15",
      image: "/products/15.jpg",
      additionalImages: ["/products/15 Pro.jpg", "/products/14 Ultra.jpg"],
      features: [
        "Snapdragon 8 Elite",
        "50MP Leica triple camera",
        "6.36-inch LTPO AMOLED",
        "4700mAh battery",
        "90W charging",
      ],
    },
    {
      brand: "Xiaomi",
      name: "14 Ultra",
      image: "/products/14 Ultra.jpg",
      additionalImages: ["/products/15 Pro.jpg", "/products/15.jpg"],
      features: [
        "Snapdragon 8 Gen 3",
        "50MP Leica quad camera",
        "6.73-inch LTPO AMOLED",
        "5300mAh battery",
        "90W HyperCharge",
      ],
    },
    {
      brand: "Xiaomi",
      name: "Redmi Note 14 Pro+ 5G",
      image: "/products/Redmi Note 14 Pro+ 5G.jpg",
      additionalImages: ["/products/Redmi Note 14 Pro 5G.jpg", "/products/14 Ultra.jpg"],
      features: [
        "Snapdragon 7s Gen 3",
        "200MP OIS camera",
        "6.67-inch curved AMOLED",
        "6200mAh battery",
        "90W HyperCharge",
      ],
    },
    {
      brand: "Xiaomi",
      name: "Redmi Note 14 Pro 5G",
      image: "/products/Redmi Note 14 Pro 5G.jpg",
      additionalImages: ["/products/Redmi Note 14 Pro+ 5G.jpg", "/products/15.jpg"],
      features: [
        "Dimensity 7300",
        "50MP OIS camera",
        "6.67-inch curved AMOLED",
        "5110mAh battery",
        "45W fast charging",
      ],
    },
  ],
  Nothing: [
    {
      brand: "Nothing",
      name: "Phone (2a) Plus",
      image: "/products/Phone (2a) Plus.jpg",
      additionalImages: ["/products/Phone (2a).jpg", "/products/Phone (2).jpg"],
      features: ["Dimensity 7350 Pro", "50MP dual camera", "6.7-inch LTPO AMOLED", "5000mAh battery", "50W charging"],
    },
    {
      brand: "Nothing",
      name: "Phone (2a)",
      image: "/products/Phone (2a).jpg",
      additionalImages: ["/products/Phone (2a) Plus.jpg", "/products/Phone (2).jpg"],
      features: ["Dimensity 7200 Pro", "50MP main camera", "6.7-inch AMOLED", "5000mAh battery", "45W fast charging"],
    },
    {
      brand: "Nothing",
      name: "Phone (2)",
      image: "/products/Phone (2).jpg",
      additionalImages: ["/products/Phone (2a) Plus.jpg", "/products/Phone (2a).jpg"],
      features: [
        "Snapdragon 8+ Gen 1",
        "50MP dual camera",
        "6.7-inch LTPO OLED",
        "4700mAh battery",
        "45W wireless charging",
      ],
    },
  ],
}

type Accessory = {
  name: string
  category: string
  image: string
  features: string[]
}

const accessories: Accessory[] = [
  {
    name: "Fast Chargers 65W",
    category: "Charging",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
    features: ["65W Power", "USB-C", "Quick Charge", "Universal"],
  },
  {
    name: "Wireless Chargers",
    category: "Charging",
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe",
    features: ["15W Wireless", "Qi Compatible", "LED Indicator", "Safe Charging"],
  },
  {
    name: "Power Banks 20000mAh",
    category: "Power",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5",
    features: ["20000mAh", "Fast Charging", "Dual USB", "LED Display"],
  },
  {
    name: "USB-C Cables",
    category: "Cables",
    image: "https://images.unsplash.com/photo-1602526429747-ac387a91d43b",
    features: ["Fast Data Transfer", "Durable", "3A Current", "1m Length"],
  },
  {
    name: "Lightning Cables",
    category: "Cables",
    image: "https://images.unsplash.com/photo-1588156979401-db3dc31817cb",
    features: ["MFi Certified", "Fast Charging", "Data Sync", "Tangle-free"],
  },
  {
    name: "Bluetooth Earphones",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46",
    features: ["Wireless", "Noise Cancellation", "Long Battery", "Touch Control"],
  },
  {
    name: "Mobile Covers",
    category: "Protection",
    image: "https://images.unsplash.com/photo-1541877944-ac82a091518a",
    features: ["Shock Proof", "All Models", "Transparent", "Anti-Yellow"],
  },
  {
    name: "Tempered Glass",
    category: "Protection",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb",
    features: ["9H Hardness", "Bubble-free", "HD Clear", "Easy Install"],
  },
  {
    name: "Smartwatches",
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    features: ["Health Tracking", "Notifications", "Long Battery", "Water Resistant"],
  },
  {
    name: "Over-Ear Headphones",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    features: ["Premium Sound", "Noise Cancellation", "Comfortable Fit", "Long Battery"],
  },
  {
    name: "Bluetooth Speakers",
    category: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    features: ["Waterproof", "360° Sound", "Portable", "Long Battery Life"],
  }
]

function waLink(model: string) {
  const text = encodeURIComponent(`Hello Sri Tele Links, I want to enquire about ${model}.`)
  return `https://wa.me/9035101337?text=${text}`
}

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const filterOptions = [
    "All",
    "Apple",
    "Samsung",
    "Realme",
    "Oppo",
    "Vivo",
    "OnePlus",
    "Xiaomi",
    "Nothing",
    "Accessories",
  ]

  const filteredProducts =
    activeFilter === "All"
      ? Object.entries(byBrand).flatMap(([brand, products]) => products)
      : activeFilter === "Accessories"
        ? []
        : byBrand[activeFilter] || []

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto px-4 py-12 text-white">
        {/* Header / Intro */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight">Explore the Latest Smartphones & Accessories</h1>
          <p className="text-neutral-400 mt-2">
            Discover top models from Apple, Samsung, Realme, Oppo, Vivo, OnePlus, Xiaomi, and Nothing, along with
            genuine accessories and service options.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Button asChild className="rounded-full">
              <a href="tel:9035101337">Call Now</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <a href="https://wa.me/9035101337" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </header>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filterOptions.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`rounded-full ${
                activeFilter === filter
                  ? "bg-lime-500 text-black hover:bg-lime-400"
                  : "bg-transparent border-white/20 text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        {activeFilter === "All" && (
          <>
            {/* Smartphones by Brand */}
            {Object.entries(byBrand).map(([brand, items]) => (
              <section key={brand} className="mb-10">
                <h2 className="text-2xl font-bold mb-4">{brand}</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <Card key={p.name} className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">{p.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="w-full overflow-hidden rounded-xl border border-white/10">
                          <div className="relative aspect-square w-full">
                            <Image
                              src={p.image || `/placeholder.svg?height=600&width=600&query=${p.name} phone`}
                              alt={p.name}
                              fill
                              className="object-contain"
                              sizes="(min-width: 1024px) 360px, 90vw"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                          <ul className="text-xs text-neutral-300 space-y-1">
                            {p.features.map((feature, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <span className="w-1 h-1 bg-lime-400 rounded-full flex-shrink-0"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-2">
                          <Button asChild className="rounded-full bg-green-500 text-black hover:bg-green-400">
                            <a href={waLink(p.name)} target="_blank" rel="noopener noreferrer">
                              Enquire on WhatsApp
                            </a>
                          </Button>
                          <Button asChild variant="outline" className="rounded-full bg-transparent">
                            <a href="tel:9035101337">Call Now</a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}

            {/* Accessories */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Mobile Accessories</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {accessories.map((accessory) => (
                  <Card key={accessory.name} className="border border-white/10 bg-white/5 backdrop-blur-xl">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-orange-500/20 text-orange-300">
                          {accessory.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-lg">{accessory.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Image
                        src={accessory.image || "/placeholder.svg"}
                        alt={accessory.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-contain rounded-lg border border-white/10" // Changed from object-cover to object-contain for accessories too
                      />
                      <div className="space-y-1">
                        <h4 className="font-semibold text-white text-sm">Features:</h4>
                        <ul className="space-y-1">
                          {accessory.features.map((feature) => (
                            <li key={feature} className="text-xs text-neutral-300 flex items-center gap-2">
                              <span className="w-1 h-1 bg-lime-400 rounded-full flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-2">
                        <Button asChild className="rounded-full bg-green-500 text-black hover:bg-green-400 text-xs">
                          <a href={waLink(accessory.name)} target="_blank" rel="noopener noreferrer">
                            Enquire on WhatsApp
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="rounded-full bg-transparent text-xs">
                          <a href="tel:9035101337">Call Now</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </>
        )}

        {activeFilter === "Accessories" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Mobile Accessories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {accessories.map((accessory) => (
                <Card key={accessory.name} className="border border-white/10 bg-white/5 backdrop-blur-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-orange-500/20 text-orange-300">
                        {accessory.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-lg">{accessory.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Image
                      src={accessory.image || "/placeholder.svg"}
                      alt={accessory.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-contain rounded-lg border border-white/10" // Changed from object-cover to object-contain for accessories too
                    />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-white text-sm">Features:</h4>
                      <ul className="space-y-1">
                        {accessory.features.map((feature) => (
                          <li key={feature} className="text-xs text-neutral-300 flex items-center gap-2">
                            <span className="w-1 h-1 bg-lime-400 rounded-full flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="rounded-full bg-green-500 text-black hover:bg-green-400 text-xs">
                        <a href={waLink(accessory.name)} target="_blank" rel="noopener noreferrer">
                          Enquire on WhatsApp
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="rounded-full bg-transparent text-xs">
                        <a href="tel:9035101337">Call Now</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeFilter !== "All" && activeFilter !== "Accessories" && filteredProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4">{activeFilter} Smartphones</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((p) => (
                <Card key={p.name} className="liquid-glass border border-white/10 bg-white/5 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{p.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="w-full overflow-hidden rounded-xl border border-white/10">
                      <div className="relative aspect-square w-full">
                        <Image
                          src={p.image || `/placeholder.svg?height=600&width=600&query=${p.name} phone`}
                          alt={p.name}
                          fill
                          className="object-contain"
                          sizes="(min-width: 1024px) 360px, 90vw"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                      <ul className="text-xs text-neutral-300 space-y-1">
                        {p.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-lime-400 rounded-full flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="rounded-full bg-green-500 text-black hover:bg-green-400">
                        <a href={waLink(p.name)} target="_blank" rel="noopener noreferrer">
                          Enquire on WhatsApp
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="rounded-full bg-transparent">
                        <a href="tel:9035101337">Call Now</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Realme Authorized Service */}
        <section className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold mb-2">Realme Authorized Service</h2>
          <p className="text-neutral-300">
            Warranty support, genuine spare parts, certified repairs, and software updates – all under one roof.
          </p>
          <div className="mt-4">
            <Button asChild className="rounded-full">
              <a
                href="https://wa.me/9035101337?text=Hello%20Sri%20Tele%20Links,%20I%20want%20to%20book%20a%20Realme%20service."
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Service via WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>
      <AppverseFooter />
      <FloatingButtons />
    </>
  )
}
