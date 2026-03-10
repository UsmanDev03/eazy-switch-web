"use client";

import React from "react";

export function AnimatedWaves() {
  return (
    /* Height and position fixed */
    <div className="absolute -bottom-1 left-0 right-0 z-20 pointer-events-none overflow-hidden h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px]">
      
      {/* Layer 1: Deep Base (Slowest) */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-full opacity-20"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: "wave-logic 25s linear infinite" }}
      >
        <path d="M0 100C300 150 600 50 900 100C1200 150 1500 50 1800 100V200H0V100Z" fill="#8b5aa6" />
      </svg>

      {/* Layer 2: Middle Layer (Reverse) */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[85%] opacity-40"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: "wave-logic 18s linear infinite reverse" }}
      >
        <path d="M0 100C300 50 600 150 900 100C1200 50 1500 150 1800 100V200H0V100Z" fill="#a47db8" />
      </svg>

      {/* Layer 3: Top Layer (Fastest) */}
      <svg
        className="absolute bottom-[-2px] left-0 w-[200%] h-[70%]"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: "wave-logic 12s linear infinite" }}
      >
        <path d="M0 100C400 160 800 40 1200 100C1600 160 2000 40 2400 100V200H0V100Z" fill="#8b5aa6" />
      </svg>

      {/* Animation definition using standard style tag */}
      <style>{`
        @keyframes wave-logic {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}