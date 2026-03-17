"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";
import ConsultationModal from "./ConsultationModal";

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 py-4 lg:px-12">
        <div
          className="flex items-center justify-between"
          suppressHydrationWarning={true}
        >
          <a href="/" className="text-3xl font-bold text-white tracking-tight">
            Eazy Switch
          </a>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:inline-block px-6 py-3 bg-[#1a4d4d] hover:bg-[#133a3a] text-white font-medium rounded-full transition-colors text-center border border-white/10 cursor-pointer"
            >
              Secure your free energy review
            </button>

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
