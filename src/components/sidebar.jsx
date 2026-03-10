"use client";

import { useEffect } from "react";
import {
  X,
  Plus,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sirf in labels aur hrefs ko document ke mutabiq update kiya hai
const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Who We Are", href: "/about" },
  { label: "Our Standards", href: "/standards" },
  { label: "Complaints Procedure", href: "/complaints" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Sidebar({ isOpen, onClose }) {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar Panel */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-end p-6">
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
          </div>

          {/* CTA Button */}
          <div className="px-6 pb-6">
            <a
              href="/free-review"
              className="inline-block w-full px-6 py-3 bg-[#1a4d4d] hover:bg-[#133a3a] text-white font-medium rounded-full transition-colors text-center"
            >
              Secure your free energy review
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between py-3 text-gray-800 hover:text-[#1a4d4d] font-semibold text-lg transition-colors group"
                    onClick={onClose}
                  >
                    <span>{item.label}</span>
                    {item.hasSubmenu && (
                      <Plus className="w-5 h-5 text-gray-400 group-hover:text-[#1a4d4d] transition-colors" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="p-6 border-t border-gray-100">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 text-[#1a4d4d] hover:text-[#2a6a6a] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}