"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedWindTurbine } from "./animated-wind-turbine";
import { Navbar } from "./layouts/navbar";
import { AnimatedWaves } from "./animated-waves";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#1a4d4d]"
      suppressHydrationWarning={true}
    >
      <div className="relative bg-[#1a4d4d] overflow-hidden h-auto lg:min-h-screen flex flex-col">
        {/* --- 1. Background Image Layer --- */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&q=80&w=1600"
            alt="Smarter Business Utilities Background"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d4d] via-[#1a4d4d]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a4d4d]" />
        </div>

        {/* --- 2. Wind Turbine Animation Layer (Desktop Only) --- */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          <div
            className="absolute 
            hidden 
            xl:block 
            xl:right-[5%] 
            xl:top-[10%]
            2xl:right-[5%] 
            2xl:top-[12%] 
            opacity-60 
            transition-all duration-700"
            suppressHydrationWarning={true}
          >
            <div className="xl:w-[400px] xl:h-[600px] 2xl:w-[600px] 2xl:h-[800px]">
              <AnimatedWindTurbine size="xl:w-[600px] xl:h-[800px]" />
            </div>
          </div>
        </div>

        <AnimatedWaves />
        <Navbar />

        {/* --- 3. Content Layer --- */}
        <div
          className="relative z-30 px-4 md:px-8 lg:px-12 pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 lg:pb-32 flex justify-center xl:justify-start flex-grow items-center min-h-[600px] lg:min-h-[800px]"
          suppressHydrationWarning={true}
        >
          {/* Glassmorphism Card with Bold Animated Border */}
          <div className="group relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-[2.5rem] px-6 md:px-12 py-10 md:py-14 shadow-2xl text-center xl:text-left transition-all overflow-hidden">
            
            {/* --- BOLD Animated Border Line (Mobile & Tablet Only) --- */}
            {/* <div className="xl:hidden absolute inset-0 rounded-[2.5rem] pointer-events-none">
              <div 
                className="absolute inset-[-6px] rounded-[2.5rem] bg-gradient-to-r from-[#8dae39] via-[#8b5aa6] to-[#8dae39] opacity-60 animate-[spin_5s_linear_infinite]" 
                style={{ 
                  maskImage: 'linear-gradient(white, white), linear-gradient(white, white)', 
                  maskClip: 'content-box, border-box', 
                  maskComposite: 'exclude', 
                  border: '5px solid transparent' // Bold 5px border
                }} 
              />
            </div> */}

            <div className="xl:hidden absolute inset-0 pointer-events-none">
              <div 
                className="absolute inset-x-[-6px] top-[-6px] bottom-[20%] bg-gradient-to-r from-[#8dae39] via-[#8b5aa6] to-[#8dae39] opacity-60 animate-[spin_5s_linear_infinite]" 
                style={{
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%, 50% 0%, 52% 4%, 93% 97%, 7% 97%, 50% 5%)',
                }} 
              />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-5 drop-shadow-md tracking-tight">
              A Smarter, Transparent Way to Secure Your{" "}
              <span className="text-[#8dae39]">Business Utilities</span>
            </h1>

            <div className="flex flex-col gap-6 md:gap-7">
              <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Professional{" "}
                <span className="text-[#8dae39]">
                  energy broker and consultant
                </span>{" "}
                services for electricity, gas, and water. From first quote to
                ongoing support, we guide your business through every step of
                the utility journey — with clarity, expertise, and full
                transparency.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-1">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#8b5aa6] hover:bg-[#724a8d] text-white font-bold rounded-full transition-all duration-300 text-sm md:text-base shadow-xl active:scale-95 text-center group"
                >
                  Begin Your Energy Journey Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#process"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 text-sm md:text-base border border-white/20 backdrop-blur-sm active:scale-95 text-center"
                >
                  Our 5-Step Process
                </a>
              </div>

              <div className="pt-3 flex items-center justify-center lg:justify-start gap-3 border-t border-white/5 mt-1">
                <div className="w-6 h-[1px] bg-[#8dae39]/40" />
                <p className="text-[#8dae39] text-[9px] md:text-xs font-bold tracking-widest uppercase opacity-90">
                  “Guiding Your Business Through Every Energy Decision”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}