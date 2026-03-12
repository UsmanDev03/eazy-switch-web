"use client"

import React, { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="py-20 bg-primary" suppressHydrationWarning={true}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
          Secure your free energy review!
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          {"It only takes 2 minutes. Get a comprehensive review of your energy usage and discover how much you could save."}
        </p>

        {!submitted ? (
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            suppressHydrationWarning={true}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground text-foreground border-0 h-12"
              required
            />
            <Button 
              type="submit" 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 h-12 shrink-0 font-bold"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 text-primary-foreground" suppressHydrationWarning={true}>
            <CheckCircle className="w-6 h-6" />
            <span className="text-lg font-medium">{"Thanks! We'll be in touch soon."}</span>
          </div>
        )}

        <p className="mt-4 text-xs text-primary-foreground/60">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}