"use client";

import React from "react"
import { ShieldCheck, Users, HeadphonesIcon, Eye } from "lucide-react"

const differentiators = [
  {
    icon: ShieldCheck,
    title: "No quick sales",
    description: "Ongoing support and long-term value, not just a transaction.",
  },
  {
    icon: Users,
    title: "One partner",
    description: "Contracts, compliance, and efficiency managed in one place.",
  },
  {
    icon: HeadphonesIcon,
    title: "Full support",
    description: "We handle billing issues and market changes for you.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Upfront pricing with no hidden fees or surprise charges.",
  },
]

export function Differentiators() {
  return (
    <section 
      className="py-12 bg-[#ECE7ED]" 
      suppressHydrationWarning={true}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14 text-center" suppressHydrationWarning={true}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d4d] tracking-tight">
            What makes us <span className="text-[#8b5aa6]">different?</span>
          </h2>
        </div>

        {/* Balanced 4-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" suppressHydrationWarning={true}>
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col items-center text-center" 
                suppressHydrationWarning={true}
              >
                {/* Balanced Icon Box */}
                <div className="w-14 h-14 mb-6 bg-[#1a4d4d]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#8dae39]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#1a4d4d]" />
                </div>
                
                {/* Balanced Text */}
                <h3 className="text-xl font-bold text-[#1a4d4d] mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}