"use client";

import { Sparkles, ArrowRight, Zap } from "lucide-react"; 
import { AnimatedWindTurbine } from "./animated-wind-turbine";
import { Navbar } from "./navbar";
import { AnimatedWaves } from "./animated-waves";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a4d4d]" suppressHydrationWarning={true}>
      
      {/* 1. Announcement Bar */}
      <div className="bg-[#1a4d4d] text-white px-4 py-4 text-center text-xs md:text-sm flex items-center justify-center gap-2 border-b border-white/5 relative z-50">
        <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        <p>
          <span className="font-semibold text-amber-400">Zero Upfront Cost Solar:</span>{" "}
          <span className="hidden sm:inline">Unlock sustainable savings for your business today</span>
          <span className="sm:hidden">Sustainable savings for your business</span>
        </p>
      </div>

      <div className="relative bg-[#1a4d4d] overflow-hidden min-h-screen lg:min-h-0">
        
        {/* Turbine Animation - Original size kept */}
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

        {/* Content Wrapper - Added pt-20 for mobile spacing from Navbar */}
        <div 
          className="relative z-30 px-4 md:px-6 lg:px-12 pt-20 md:pt-24 pb-20 md:pb-56 flex justify-center lg:justify-start"
          suppressHydrationWarning={true}
        >
          {/* Glass Card - Added mt-10 for extra breathing room on mobile */}
          <div className="w-full max-w-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2.5rem] px-6 md:px-12 py-8 md:py-16 mt-10 md:mt-8 shadow-2xl text-center lg:text-left">
            
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-[1.1] mb-5 drop-shadow-md">
              Effortless Energy Solutions
              <span className="text-[#8dae39]">.</span>
            </h1>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-base md:text-xl text-gray-200 font-medium mb-2 drop-shadow-sm">
                  Join Eazy Switch Limited, your trusted UK energy consultancy.
                </p>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We simplify the switching process for businesses, ensuring you secure 
                  the best contracts while improving efficiency.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <a
                  href="/services"
                  className="inline-block w-full sm:w-auto px-10 py-3.5 bg-[#8b5aa6] hover:bg-[#724a8d] text-white font-bold rounded-full transition-all duration-300 text-base shadow-xl active:scale-95 text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}