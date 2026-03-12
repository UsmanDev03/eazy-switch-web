"use client";

import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section 
      id="about" 
      className="py-20 bg-[#f9f9f7]"
      suppressHydrationWarning={true}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div suppressHydrationWarning={true}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a4d4d] mb-6 text-balance">
              Energy consultants, helping you take control of business energy
            </h2>
            <div className="space-y-4 text-[#2d4a4a]">
              <p>
                {"Energy isn't simple. It's time-consuming, high stakes, and often full of things you're expected to just figure out."}
              </p>
              <p>
                {"At Eazy Switch Limited, we're not here to sell you a quick fix, but to be the team that helps you make sense of it all. From business energy contracts to sustainability plans, we shape support around your business and stay with you for the long haul."}
              </p>
              <p>
                {"We'll understand what matters to you, give clear advice, and take ownership of the hard parts, so energy becomes one less thing to worry about."}
              </p>
            </div>
            <Button className="mt-8 bg-[#8b5aa6] hover:bg-[#724a8d] text-white" size="lg">
              Learn more about us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative" suppressHydrationWarning={true}>
            <div className="aspect-square rounded-2xl overflow-hidden bg-white border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#8dae39]/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#8b5aa6]/10 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Values Strip */}
        {/* <div className="mt-20 text-center border-t border-gray-200 pt-10" suppressHydrationWarning={true}>
          <p className="text-2xl sm:text-3xl font-semibold text-[#1a4d4d]">
            We <span className="text-[#8dae39]">listen</span>, <span className="text-[#1a4d4d]">deliver</span>, <span className="text-[#8dae39]">care</span>.
          </p>
          <p className="mt-2 text-[#2d4a4a]">
            {"That's how we work and why our customers stay with us."}
          </p>
        </div> */}
      </div>
    </section>
  );
}