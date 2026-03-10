"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 py-4 lg:px-12">
        <div className="flex items-center justify-between" suppressHydrationWarning={true}>
          
          {/* 1. Logo (Left Side) */}
          <a href="/" className="text-3xl font-bold text-white tracking-tight">
            Eazy Switch
            {/* <span className="text-[#8dae39]">.</span> */}
          </a>

          {/* 2. Grouped Actions (Right Side) */}
          <div className="flex items-center gap-4">             
            <a
              href="/free-review"
              className="hidden md:inline-block px-6 py-3 bg-[#1a4d4d] hover:bg-[#133a3a] text-white font-medium rounded-full transition-colors text-center border border-white/10"
            >
              Secure your free energy review
            </a>

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center justify-center p-2 bg-[#1a4d4d] hover:bg-[#133a3a] text-white rounded-lg transition-all duration-300 shadow-lg border border-white/10 active:scale-95"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}