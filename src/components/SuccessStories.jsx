"use client";

import React from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

const caseStudies = [
  {
    title: "Resolving billing errors and securing lower energy costs",
    date: "Sep 15, 2025",
    description: "Working in partnership to provide energy solutions for agricultural businesses, resulting in significant cost savings.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
  },
  {
    title: "Solar and EV install for Green Meadows",
    date: "Jul 25, 2025",
    description: "Helping a rural business reduce grid reliance and run more sustainably with comprehensive renewable solutions.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80",
  },
  {
    title: "Local Sports Club takes control of energy costs",
    date: "Jul 25, 2025",
    description: "A well-established sports club earned savings through strategic energy procurement and efficiency measures.",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&q=80",
  },
  {
    title: "Helping an Estate find the right solar setup",
    date: "Jul 25, 2025",
    description: "Investing in solar for a working estate with multiple buildings and varied energy needs.",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400&q=80",
  },
]

export function SuccessStories() {
  return (
    <section 
      id="case-studies" 
      className="py-20 bg-[#f4f7f0]"
      suppressHydrationWarning={true}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" suppressHydrationWarning={true}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Success stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how we have helped businesses like yours take control of their energy needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" suppressHydrationWarning={true}>
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
            >
              {/* Image Section */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Header Section */}
              <div className="p-6 pb-2">
                <p className="text-xs text-muted-foreground mb-1">{study.date}</p>

                <h3 className="text-base font-semibold leading-tight group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
              </div>

              {/* Content Section */}
              <div className="p-6 pt-0">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center" suppressHydrationWarning={true}>
       <Button 
            variant="outline" 
            size="lg"
            className="border-[#1a4d4d] text-[#1a4d4d] hover:bg-[#1a4d4d] hover:text-white transition-colors"
            >
            Read more case studies
            <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        </div>
      </div>
    </section>
  )
}