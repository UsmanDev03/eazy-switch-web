"use client";

import React from "react"
import { Handshake, Zap, LifeBuoy, SearchCheck } from "lucide-react"

const differentiators = [
  {
    icon: Handshake,
    title: "Partner, Not Sales",
    description: "Building long-term trust, not just closing short-term deals.",
  },
  {
    icon: Zap,
    title: "Direct Efficiency",
    description: "Your entire energy portfolio managed under one expert roof.",
  },
  {
    icon: LifeBuoy,
    title: "Always On Your Side",
    description: "Real people solving your billing and market issues instantly.",
  },
  {
    icon: SearchCheck,
    title: "Zero Hidden Fees",
    description: "Total transparency with upfront pricing—no surprises, ever.",
  },
]

export function Differentiators() {
  return (
    <section 
      className="py-16 bg-[#ECE7ED]" 
      suppressHydrationWarning={true}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center" suppressHydrationWarning={true}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d4d] tracking-tight">
            The <span className="text-[#8b5aa6]">Eazy Switch</span> Edge
          </h2>
          <p className="mt-3 text-gray-600 font-medium text-sm md:text-base">
            Where energy management meets simplicity.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" suppressHydrationWarning={true}>
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index} 
                className="bg-white p-7 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 group flex flex-col items-center text-center" 
                suppressHydrationWarning={true}
              >
                {/* Icon Box */}
                <div className="w-14 h-14 mb-5 bg-[#1a4d4d]/5 rounded-2xl flex items-center justify-center group-hover:bg-[#8dae39]/20 transition-all duration-500">
                  <Icon className="w-7 h-7 text-[#1a4d4d] group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Text Content */}
                <h3 className="text-lg font-bold text-[#1a4d4d] mb-2 leading-tight group-hover:text-[#8b5aa6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed px-2">
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