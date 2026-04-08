"use client";

import React from "react"
// Icons ko naye titles ke mutabiq thora change kiya hai (e.g., LayoutDashboard for Centralised Management)
import { Handshake, LayoutDashboard, ShieldCheck, SearchCheck } from "lucide-react"

const differentiators = [
  {
    icon: Handshake,
    title: "Strategic Energy Partner",
    description: "We act as a long-term energy partner, providing expert guidance, market insight, and ongoing support to help your business make informed decisions.",
  },
  {
    icon: LayoutDashboard,
    title: "Centralised Energy Management",
    description: "We manage your energy contracts, accounts, and processes in one place, giving you greater visibility and control across your entire portfolio.",
  },
  {
    icon: ShieldCheck,
    title: "Proactive Support",
    description: "We actively monitor your energy position, resolving issues and reviewing usage to ensure your business stays protected from unnecessary costs.",
  },
  {
    icon: SearchCheck,
    title: "Transparent & Fair Pricing",
    description: "We operate with clear, upfront pricing and full transparency—so you always know exactly what you’re paying for, with no hidden surprises.",
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
          {/* Badge Style Heading */}
          <span className="text-[#8b5aa6] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Why Choose Us</span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d4d] tracking-tight mt-3">
            The <span className="text-[#8b5aa6]">Eazy Switch</span> Advantage
          </h2>
          <p className="mt-4 text-gray-500 font-medium text-sm md:text-base max-w-2xl mx-auto">
            Hassle-free energy management designed for the modern UK business—focused on control, clarity, and measurable results.
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