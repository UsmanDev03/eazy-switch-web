"use client";

import React from "react";
import { 
  Droplets, 
  Flame, 
  Zap, 
  Unplug, 
  Sun,
  PlugZap, // New EV Icon
  ArrowUpRight 
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Water",
    desc: "Efficient Supply",
    icon: <Droplets className="w-8 h-8" />,
    href: "/services/water",
  },
  {
    title: "Gas",
    desc: "Energy Sourcing",
    icon: <Flame className="w-8 h-8" />,
    href: "/services/gas",
  },
  {
    title: "Electricity",
    desc: "Power Solutions",
    icon: <Zap className="w-8 h-8" />,
    href: "/services/electricity",
  },
  {
    title: "Connections",
    desc: "Site Utilities",
    icon: <Unplug className="w-8 h-8" />,
    href: "/services/connections",
  },
  {
    title: "Solar Energy",
    desc: "Green Power",
    icon: <Sun className="w-8 h-8" />,
    href: "/services/solar",
  },
  {
    title: "EV Charging",
    desc: "Future Ready",
    icon: <PlugZap className="w-8 h-8" />, // New Addition
    href: "/services/ev-charging",
  },
];

export function EnergyChallenge() {
  return (
    <section 
      className="bg-[#8b5aa6] pb-20 px-6 relative z-30 overflow-hidden" 
      suppressHydrationWarning={true}
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"> 
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Our <span className="text-[#8dae39]">Expertise</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg mt-3 font-medium">
              We provide end-to-end utility management and sustainable infrastructure for UK businesses.
            </p>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-white/20 to-transparent mb-4 hidden md:block mx-12" />
        </div>

        {/* 6 Columns Grid - Updated to handle 6 items properly */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {services.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ y: -8 }}
              className="group relative bg-[#2d1b4d] hover:bg-[#1f1235] transition-all duration-500 rounded-[2rem] p-6 flex flex-col items-center text-center border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              {/* Icon Container */}
              <div 
                className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:text-[#8dae39] group-hover:bg-[#8dae39]/10 transition-all duration-300 mb-6 border border-white/10 relative"
                suppressHydrationWarning={true}
              >
                <div className="shrink-0 transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                
                {/* Small floating arrow */}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#8dae39] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100 shadow-lg">
                  <ArrowUpRight className="w-4 h-4 text-[#1a4d4d]" />
                </div>
              </div>

              <h3 className="text-white text-lg font-bold group-hover:text-[#8dae39] transition-colors leading-tight mb-1">
                {item.title}
              </h3>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold group-hover:text-white/60 transition-colors">
                {item.desc}
              </p>
              
              {/* Bottom Glow Line */}
              <div className="mt-6 h-1 w-8 bg-white/10 group-hover:w-full group-hover:bg-[#8dae39] transition-all duration-500 rounded-full group-hover:shadow-[0_0_15px_#8dae39]" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}