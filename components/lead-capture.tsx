"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LeadCapture() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("I’d like to know more about the latest phones and offers.")

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const text = `Hi, I am ${name || "a customer"} (${phone || "no phone provided"}). ${message}`
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-semibold text-balance mb-4">Quick inquiry</h2>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 XXXXXXXXXX" />
        </div>
        <div className="md:col-span-2 space-y-2">
          <label htmlFor="msg" className="text-sm font-medium">
            Message
          </label>
          <Textarea id="msg" value={message} onChange={(e) => setMessage(e.target.value)} className="min-h-[120px]" />
        </div>
        <div className="md:col-span-2">
          <Button type="submit">Send via WhatsApp</Button>
        </div>
      </form>
    </div>
  )
}
