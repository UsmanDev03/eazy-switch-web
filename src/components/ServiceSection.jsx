"use client";

import React from "react"
import { FileSignature, Gauge, Sun, ClipboardCheck, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

const services = [
  {
    icon: FileSignature,
    title: "Smart Energy Contracts",
    description: "We negotiate and secure energy contracts tailored to your business needs, ensuring competitive rates and favorable terms.",
  },
  {
    icon: Gauge,
    title: "Efficiency Optimization",
    description: "Identify waste and optimize your energy consumption with our comprehensive efficiency assessments and solutions.",
  },
  {
    icon: Sun,
    title: "On-site Power Generation",
    description: "Explore solar, battery storage, and other on-site generation options to reduce costs and increase energy independence.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Compliance",
    description: "Navigate complex compliance requirements with expert guidance on ESOS, SECR, and other regulatory frameworks.",
  },
]

export function ServiceSection() {
  return (
    <section 
      id="services" 
      className="py-24 bg-white" 
      suppressHydrationWarning={true}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Content + Image Box */}
          <div className="lg:sticky lg:top-24 space-y-8" suppressHydrationWarning={true}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a4d4d] mb-6 leading-[1.1]">
                Comprehensive <span className="text-[#8b5aa6]">energy services</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                Your business deserves solutions that work together seamlessly. We help you take control of costs while building a sustainable future.
              </p>
            </div>

            {/* Visual Element: Image with Overlay */}
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a4d4d]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl">
                <p className="text-[#1a4d4d] font-bold text-sm uppercase tracking-widest mb-1">Tailored for you</p>
                <p className="text-gray-600 text-sm">Customized energy strategies for UK businesses.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Services Cards Stack */}
          <div className="space-y-6" suppressHydrationWarning={true}>
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group p-8 rounded-[2rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-[#8b5aa6]/30 transition-all duration-500"
                  suppressHydrationWarning={true}
                >
                  <div className="flex gap-6">
                    {/* Icon Box */}
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#8b5aa6] transition-colors duration-500">
                      <Icon className="w-7 h-7 text-[#1a4d4d] group-hover:text-white" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-bold text-xl text-[#1a4d4d]">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>
                      <Button 
                        variant="link" 
                        className="p-0 text-[#8b5aa6] hover:text-[#1a4d4d] font-bold flex items-center gap-2"
                      >
                        Learn details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}