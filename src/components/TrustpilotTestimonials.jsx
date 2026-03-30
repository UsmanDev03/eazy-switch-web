"use client"

import React, { useEffect, useState } from "react"
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "./ui/button"

const trustpilotReviews = [
  {
    quote: "Excellent service! They managed to save us 30% on our annual energy bills. Highly professional team.",
    author: "Tech Solutions Ltd",
    rating: 5
  },
  {
    quote: "The switching process was seamless. I didn't have to do anything, they handled it all. 5 stars!",
    author: "Blue Horizon Cafe",
    rating: 5
  },
  {
    quote: "Very impressed with the transparency. No hidden fees and they found us a great fixed-rate deal.",
    author: "Green Valley Logistics",
    rating: 5
  },
  {
    quote: "Top notch communication. They kept us updated at every stage of the contract renewal.",
    author: "Smith & Sons Manufacturing",
    rating: 5
  },
  {
    quote: "Finally an energy broker that actually cares about the client's bottom line. Amazing work.",
    author: "Urban Style Retail",
    rating: 5
  },
  {
    quote: "Brilliant expertise. They identified billing errors we didn't even know existed. Thank you!",
    author: "City Health Clinic",
    rating: 5
  }
]

export function TrustpilotTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const visibleCount = 3
  const maxIndex = trustpilotReviews.length - visibleCount

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
      id="trustpilot-reviews" 
      className="py-20 bg-background text-foreground border-t border-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trustpilot Branding Header */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-2">
               <Star className="w-8 h-8 fill-[#00b67a] text-[#00b67a]" />
               <span className="text-2xl font-bold tracking-tight">Trustpilot</span>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center rounded-sm">
                  <Star className="w-4 h-4 fill-white text-white" />
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See our latest Trustpilot reviews
          </h2>
          <p className="text-muted-foreground">
            Rated <strong>4.9 / 5</strong> based on our verified customer feedback.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
          >
            {trustpilotReviews.map((review, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
              >
                <div className="h-full p-8 rounded-2xl bg-muted/30 border border-muted flex flex-col justify-between">
                  <div>
                    {/* Trustpilot Specific Star Layout */}
                    <div className="flex gap-[2px] mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-sm">
                          <Star className="w-3 h-3 fill-white text-white" />
                        </div>
                      ))}
                    </div>
                    <p className="text-foreground/90 mb-6 text-lg italic leading-relaxed">
                      {`"${review.quote}"`}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-muted">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#00b67a]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#00b67a]" />
                      </div>
                      <p className="text-sm font-semibold">{review.author}</p>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrev}
            className="rounded-full border-muted-foreground/20 hover:bg-muted"
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
                  currentIndex === i ? "w-8 bg-[#00b67a]" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="rounded-full border-muted-foreground/20 hover:bg-muted"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}