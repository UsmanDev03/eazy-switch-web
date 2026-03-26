"use client";

import { ArrowRight } from "lucide-react";
import { AnimatedWindTurbine } from "./animated-wind-turbine";
import { Navbar } from "./navbar";
import { AnimatedWaves } from "./animated-waves";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#1a4d4d]"
      suppressHydrationWarning={true}
    >
      <div className="relative bg-[#1a4d4d] overflow-hidden h-auto lg:min-h-screen flex flex-col">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute 
            hidden xl:block 
            xl:left-auto xl:right-[8%] xl:translate-x-0 
            xl:top-[12%] xl:bottom-auto 
            z-10 opacity-80 transition-all duration-700"
            suppressHydrationWarning={true}
          >
            <AnimatedWindTurbine size="xl:w-[450px] xl:h-[700px]" />
          </div>
        </div>

        <AnimatedWaves />
        <Navbar />

        <div
          className="relative z-30 px-4 md:px-8 lg:px-12 pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 lg:pb-32 flex justify-center xl:justify-start flex-grow items-center min-h-[600px] lg:min-h-[800px]"
          suppressHydrationWarning={true}
        >
          <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2.5rem] px-6 md:px-12 py-10 md:py-14 shadow-2xl text-center xl:text-left transition-all">
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
                  href="/get-started"
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
