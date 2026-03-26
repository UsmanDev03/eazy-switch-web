"use client";

import { useState } from "react";
import { Menu, Sparkles } from "lucide-react";
import { Sidebar } from "./sidebar";
import ConsultationModal from "./ConsultationModal";
import Link from "next/link";

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* 1. Announcement Bar - Ab Navbar ka hissa hai */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-[#1a4d4d] text-white px-4 py-3 text-center text-xs md:text-sm flex items-center justify-center gap-2 border-b border-white/5">
        <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        <p>
          <span className="font-semibold text-amber-400">Zero Upfront Cost Solar:</span>{" "}
          <span className="hidden sm:inline">Unlock sustainable savings for your business today</span>
          <span className="sm:hidden text-[10px]">Sustainable savings for your business</span>
        </p>
      </div>

      {/* 2. Main Navigation - Added mt-10/12 to offset the announcement bar height */}
      <nav className="absolute top-10 md:top-12 left-0 right-0 z-40 px-6 py-4 lg:px-12">
        <div
          className="flex items-center justify-between"
          suppressHydrationWarning={true}
        >
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold text-white tracking-tight"
          >
            Eazy Switch
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:inline-block px-6 py-3 bg-[#8b5aa6] hover:bg-[#724a8d] text-white font-medium rounded-full transition-colors text-center border border-white/10 cursor-pointer text-sm shadow-lg"
            >
              Secure your free energy review
            </button>

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center justify-center p-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all duration-300 shadow-lg border border-white/10 active:scale-95"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
            </button>
          </div>
        </div>
      </nav>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        setIsModalOpen={setIsModalOpen}
      />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}