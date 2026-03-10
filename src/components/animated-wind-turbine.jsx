"use client";

import React from 'react';

export function AnimatedWindTurbine({ size = "w-32 h-48", className = "" }) {
  return (
    <div className={`flex items-center justify-center bg-transparent ${className}`}>
      <svg
        viewBox="0 0 100 150"
        xmlns="http://www.w3.org/2000/svg"
        className={size}
        fill="none"
      >
        {/* Turbine Tower */}
        <path
          d="M48 140 L52 140 L50 60 Z"
          fill="#1a4d4d"
          stroke="#1a4d4d"
          strokeWidth="1"
        />
        
        {/* Nacelle */}
        <circle cx="50" cy="60" r="4" fill="#1a4d4d" />

        {/* Rotating Blades */}
        <g className="animate-[spin_10s_linear_infinite] origin-[50px_60px]">
          <path d="M50 60 L50 10 L48 35 L52 35 Z" fill="#8dae39" />
          <path d="M50 60 L50 10 L48 35 L52 35 Z" fill="#8dae39" transform="rotate(120, 50, 60)" />
          <path d="M50 60 L50 10 L48 35 L52 35 Z" fill="#8dae39" transform="rotate(240, 50, 60)" />
        </g>
      </svg>
    </div>
  );
}