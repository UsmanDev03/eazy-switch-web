"use client";

import React, { useState } from "react";
import {
  Zap,
  Flame,
  Droplets,
  Network,
  Sun,
  ArrowRight,
  CheckCircle2,
  PlugZap,
} from "lucide-react";
import Link from "next/link";
const services = [
  {
    id: "01",
    icon: Zap,
    title: "Business Electricity",
    description:
      "Secure competitive commercial rates with flexible fixed-term contracts tailored to your usage patterns.",
    features: ["Half-hourly metering", "Green energy options"],
    href: "/services/electricity",
  },
  {
    id: "02",
    icon: Flame,
    title: "Commercial Gas",
    description:
      "Protect your business from market volatility with smart gas procurement and strategic hedging.",
    features: ["Market monitoring", "Multi-site billing"],
    href: "/services/gas",
  },
  {
    id: "03",
    icon: Droplets,
    title: "Water Management",
    description:
      "Professional audits to identify leakages and streamline your water billing across all locations.",
    features: ["Leak detection", "Bill validation"],
    href: "/services/water",
  },
  {
    id: "04",
    icon: Network, // Sidebar link ke mutabiq aap yahan Activity bhi use kar sakte hain
    title: "New Connections",
    description:
      "End-to-end management for meter installations and site upgrades for expanding businesses.",
    features: ["Infrastructure planning", "Fast-track setup"],
    href: "/services/connections",
  },
  {
    id: "05",
    icon: Sun,
    title: "Solar & Renewables",
    description:
      "Future-proof your business with zero-upfront solar installations and battery storage solutions.",
    features: ["Zero-upfront cost", "Carbon reporting"],
    href: "/services/solar",
  },
  {
    id: "06",
    icon: PlugZap, // Sidebar link wala icon
    title: "EV Charging",
    description:
      "Future-proof your infrastructure with scalable charging solutions to support staff and attract customers.",
    features: ["Smart load management", "Revenue opportunities"],
    href: "/services/ev-charging",
  },
];

export function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="services"
      className="py-12 md:py-20 bg-[#1a4d4d] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-[#8dae39] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
              Our Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mt-2 leading-tight">
              Solutions for{" "}
              <span className="text-[#8b5aa6]">Modern Business</span>
            </h2>
          </div>
          <div className="hidden md:block h-12 w-[1px] bg-white/20 mx-8"></div>
          <p className="text-gray-400 text-xs md:text-base max-w-[280px]">
            Smart utility management powered by Eazy Switch innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left: Dynamic Service Detail (Desktop Only) */}
          {/* Left: Dynamic Service Detail (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="sticky top-24 rounded-[2.5rem] overflow-hidden bg-[#163f3f] border border-white/5 shadow-2xl">
              {/* Image Height Adjusted for Content */}
              <div className="relative h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop"
                  alt="Business Energy"
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163f3f] via-transparent to-transparent" />
              </div>

              {/* Is box ki height ab points ke mutabiq auto-adjust hogi */}
              <div className="p-8 bg-[#163f3f]">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 h-auto">
                  <h4 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#8dae39]" /> Included
                    Features
                  </h4>
                  <ul className="space-y-3">
                    {services[activeIndex].features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-gray-300 text-sm flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8b5aa6] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Right: The Interactive List (Responsive) */}
          <div className="lg:col-span-7 space-y-3 w-full">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)} // Mobile support
                  className={`relative cursor-pointer transition-all duration-300 rounded-[1.2rem] md:rounded-[1.5rem] px-5 py-4 md:px-6 md:py-5 border ${
                    isActive
                      ? "bg-white border-white shadow-xl translate-y-[-2px] md:translate-x-2"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4 md:gap-5">
                    {/* Index Number */}
                    <span
                      className={`text-[10px] md:text-xs font-mono font-bold ${isActive ? "text-[#8b5aa6]" : "text-white/20"}`}
                    >
                      {service.id}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-base md:text-xl font-bold truncate transition-colors ${isActive ? "text-[#1a4d4d]" : "text-white"}`}
                        >
                          {service.title}
                        </h3>
                        <div
                          className={`p-2 rounded-lg transition-all shrink-0 ${isActive ? "bg-[#1a4d4d] text-[#8dae39]" : "bg-white/10 text-white"}`}
                        >
                          <Icon className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                      </div>

                      {/* Expandable Content (Works on Tap for Mobile) */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isActive ? "max-h-[200px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}
                      >
                        <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>

                        {/* Features visible on mobile inside the card when active */}
                        <div className="lg:hidden mb-4 space-y-1">
                          {service.features.map((f, i) => (
                            <div
                              key={i}
                              className="text-[11px] text-[#1a4d4d]/70 flex items-center gap-2 italic"
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#8dae39]" />{" "}
                              {f}
                            </div>
                          ))}
                        </div>

                        <Link href={service.href}>
                          <span className="inline-flex items-center gap-2 text-[10px] font-bold text-[#8b5aa6] hover:text-[#1a4d4d] transition-colors uppercase tracking-wider cursor-pointer">
                            Learn More <ArrowRight className="w-3 h-3" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
