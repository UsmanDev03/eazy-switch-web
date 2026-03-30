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
        
        {/* Google Branding Header */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            {/* Google Colorful Logo */}
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold tracking-tight mr-2">Google Review</span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            {"Don't just take our word for it..."}
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto">
            {"Our 5-star Google rating reflects how we've helped businesses like yours take control of their energy costs."}
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
                <div className="h-full p-8 rounded-2xl bg-background/5 border border-background/10 backdrop-blur-sm hover:bg-background/10 transition-colors">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <p className="text-background/90 mb-6 leading-relaxed italic text-lg">
                    {`"${testimonial.quote}"`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#4285F4] flex items-center justify-center text-[10px] font-bold text-white uppercase">
                      {testimonial.author.charAt(0)}
                    </div>
                    <p className="text-sm font-semibold text-background/80">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12" suppressHydrationWarning={true}>
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrev}
            className="rounded-full bg-transparent border-background/30 text-background hover:bg-background/10"
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
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "w-8 bg-[#4285F4]" : "w-2 bg-background/30"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="rounded-full bg-transparent border-background/30 text-background hover:bg-background/10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;