"use client";

import React from "react";
import { 
  Droplets, 
  Flame, 
  Zap, 
  Unplug, 
  Sun,
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    title: "Water",
    icon: <Droplets className="w-8 h-8 text-white group-hover:text-[#8dae39]" />,
    href: "/services/water",
  },
  {
    title: "Gas",
    icon: <Flame className="w-8 h-8 text-white group-hover:text-[#8dae39]" />,
    href: "/services/gas",
  },
  {
    title: "Electricity",
    icon: <Zap className="w-8 h-8 text-white group-hover:text-[#8dae39]" />,
    href: "/services/electricity",
  },
  {
    title: "Connections",
    icon: <Unplug className="w-8 h-8 text-white group-hover:text-[#8dae39]" />,
    href: "/services/connections",
  },
  {
    title: "Solar Energy",
    icon: <Sun className="w-8 h-8 text-white group-hover:text-[#8dae39]" />,
    href: "/services/solar",
  },
];

export function EnergyChallenge() {
  return (
    <section 
      className="bg-[#8b5aa6] pb-16 px-6 relative z-30 overflow-hidden" 
      suppressHydrationWarning={true}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"> 
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Our <span className="text-[#8dae39]">Expertise</span>
            </h2>
            <p className="text-white/80 text-sm md:text-base mt-2 font-medium">
              Comprehensive utility management for your business.
            </p>
          </div>
          <div className="h-[1px] flex-1 bg-white/10 mb-2 hidden md:block mx-8" />
        </div>

        {/* 5 Columns Grid - Colors updated to match image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative bg-[#2d1b4d] hover:bg-[#1f1235] transition-all duration-300 rounded-2xl p-6 flex flex-col border border-white/5 shadow-2xl hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div 
                  className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-[#8dae39]/20 transition-all duration-300 border border-white/10"
                  suppressHydrationWarning={true}
                >
                  <div className="shrink-0 scale-90">{item.icon}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-[#8dae39] group-hover:translate-x-0.5 transition-all" />
              </div>

              <h3 className="text-white text-lg font-bold group-hover:text-[#8dae39] transition-colors leading-tight">
                {item.title}
              </h3>
              
              <div className="mt-4 h-1 w-0 bg-[#8dae39] group-hover:w-full transition-all duration-500 rounded-full shadow-[0_0_8px_#8dae39]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}