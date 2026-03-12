"use client";

import { Sparkles, ArrowRight } from "lucide-react"; 
import { AnimatedWindTurbine } from "./animated-wind-turbine";
import { Navbar } from "./navbar";
import { AnimatedWaves } from "./animated-waves";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a4d4d]" suppressHydrationWarning={true}>
      
      {/* 1. Announcement Bar */}
      <div className="bg-[#1a4d4d] text-white px-4 py-4 text-center text-sm flex items-center justify-center gap-2 border-b border-white/5 relative z-50">
        <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        <p>
          <span className="font-semibold text-amber-400">Zero Upfront Cost Solar:</span>{" "}
          Unlock sustainable savings for your business today
        </p>
      </div>

      <div className="relative bg-[#1a4d4d] overflow-hidden">
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute 
            left-1/2 -translate-x-1/2 bottom-0 
            lg:left-auto lg:right-[10%] lg:translate-x-0  lg:bottom-auto
            z-10 opacity-30 lg:opacity-80 transition-all duration-700" suppressHydrationWarning={true}>
            
            <AnimatedWindTurbine 
              size="w-[280px] h-[400px] md:w-[320px] md:h-[500px] lg:w-[480px] lg:h-[750px]" 
            />
          </div>
        </div>

        <AnimatedWaves />

        <Navbar />

        {/* Main Content */}
        <div 
          className="relative z-30 px-6 lg:px-12 pt-24 md:pt-32 pb-20 md:pb-48 text-center lg:text-left"
          suppressHydrationWarning={true}
        >
          <div className="max-w-3xl mx-auto lg:mx-0" suppressHydrationWarning={true}>
          
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-md">
              Effortless Energy Solutions
              <span className="text-[#8dae39]">.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-2xl text-gray-200 font-medium mb-4 drop-shadow-sm leading-snug">
              Join Eazy Switch Limited, your trusted UK-based energy consultancy.
            </p>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              We simplify the switching process for businesses, ensuring you secure 
              the best contracts while improving efficiency.
            </p>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="/services"
                className="inline-block w-full sm:w-auto px-10 py-4 bg-[#8b5aa6] hover:bg-[#724a8d] text-white font-bold rounded-full transition-all duration-300 text-lg shadow-xl hover:shadow-[#8b5aa6]/40 active:scale-95"
              >
                See how we can help
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}