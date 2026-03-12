"use client"

import React, { useEffect, useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"

const testimonials = [
  {
    quote: "They are a pleasure to deal with and offer a friendly, timely and professional service.",
    author: "Manufacturing Business",
  },
  {
    quote: "Really proactive and helpful, making the process really easy and efficient. It makes such a difference only having to deal with one company.",
    author: "Retail Chain",
  },
  {
    quote: "Amazing help from this company. They got us out of a very poor contract and saved our company thousands of pounds!",
    author: "Hospitality Group",
  },
  {
    quote: "Extremely helpful at all stages and always on the end of the phone if needed. Would highly recommend.",
    author: "Property Management",
  },
  {
    quote: "Have been absolutely amazing with sorting all the billing issues for us, chasing the suppliers and reporting back. Absolutely professional!",
    author: "Healthcare Provider",
  },
  {
    quote: "We've had an outstanding experience. They took the time to understand our specific needs and secured excellent value for money.",
    author: "Agricultural Business",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const visibleCount = 3
  const maxIndex = testimonials.length - visibleCount

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-foreground text-background"
      suppressHydrationWarning={true}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" suppressHydrationWarning={true}>
          {/* Top Stars - Golden Color */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#FFD700] text-[#FFD700]" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            {"Don't just take our word for it..."}
          </h2>
          <p className="text-background/70">
            {"Our 4.8 star Trustpilot rating reflects how we've helped businesses like yours take control of their energy."}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden" suppressHydrationWarning={true}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
              >
                <div className="h-full p-6 rounded-xl bg-background/5 border border-background/10 backdrop-blur-sm">
                  {/* Card Stars - Golden Color */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  <p className="text-background/90 mb-4 leading-relaxed">
                    {`"${testimonial.quote}"`}
                  </p>
                  <p className="text-sm text-background/60">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8" suppressHydrationWarning={true}>
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrev}
            className="bg-transparent border-background/30 text-background hover:bg-background/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex gap-2">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(i)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === i ? "bg-[#FFD700]" : "bg-background/30"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="bg-transparent border-background/30 text-background hover:bg-background/10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}