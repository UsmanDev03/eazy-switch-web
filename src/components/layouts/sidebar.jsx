"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  ChevronLeft,
  ChevronDown,
  Zap,
  Flame,
  Droplets,
  Activity,
  Sun,
  PlugZap,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    isDropdown: true,
    subItems: [
      { label: "Electricity", href: "/services/electricity", icon: Zap },
      { label: "Gas", href: "/services/gas", icon: Flame },
      { label: "Water", href: "/services/water", icon: Droplets },
      { label: "Connections", href: "/services/connections", icon: Activity },
      { label: "Solar", href: "/services/solar", icon: Sun },
      { label: "EV Charging", href: "/services/ev-charging", icon: PlugZap },
    ],
  },
  { label: "Who We Are", href: "/about" },
  { label: "Our Expertise", href: "/expertise" },
  { label: "Complaints Procedure", href: "/complaints-procedure" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
];

export function Sidebar({ isOpen, onClose, setIsModalOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => {
        setServicesOpen(false);
      }, 0);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[100]"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-[380px] bg-white/70 backdrop-blur-2xl z-[110] shadow-2xl flex flex-col border-l border-white/30"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 bg-white/40 hover:bg-white/80 rounded-full transition-all text-[#1a4d4d] font-bold text-sm border border-white/60 shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>

              <button
                onClick={onClose}
                className="p-2.5 bg-[#1a4d4d] text-white rounded-full hover:rotate-90 transition-all duration-300 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6 pt-2 overflow-y-auto custom-scrollbar">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    // Desktop Hover Logic
                    onMouseEnter={() =>
                      item.isDropdown && setServicesOpen(true)
                    }
                    onMouseLeave={() =>
                      item.isDropdown && setServicesOpen(false)
                    }
                  >
                    {item.isDropdown ? (
                      <div className="relative">
                        <button
                          // Mobile Click Logic
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className={`w-full flex items-center justify-between py-3.5 px-5 rounded-xl border transition-all duration-300 ${
                            servicesOpen
                              ? "bg-[#1a4d4d] text-white border-[#1a4d4d] shadow-lg"
                              : "bg-white/40 border-white/40 text-[#1a4d4d] hover:bg-white/90"
                          }`}
                        >
                          <span className="font-bold">{item.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.ul
                              initial={{ opacity: 0, y: -10, height: 0 }}
                              animate={{ opacity: 1, y: 0, height: "auto" }}
                              exit={{ opacity: 0, y: -10, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 space-y-2 overflow-hidden bg-white/40 rounded-2xl p-2 border border-white/40 shadow-inner"
                            >
                              {item.subItems.map((sub) => (
                                <li key={sub.label}>
                                  <Link
                                    href={sub.href}
                                    onClick={onClose}
                                    className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-[#8dae39] hover:text-[#1a4d4d] text-[#1a4d4d] font-bold text-sm transition-all group/sub"
                                  >
                                    <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center group-hover/sub:bg-white transition-colors">
                                      <sub.icon className="w-4 h-4 text-[#1a4d4d]" />
                                    </div>
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center justify-between py-3.5 px-5 rounded-xl bg-white/30 border border-white/40 hover:bg-white/90 transition-all shadow-sm"
                      >
                        <span className="text-base font-bold text-[#1a4d4d]">
                          {item.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-[#1a4d4d]/30 group-hover:text-[#1a4d4d] group-hover:translate-x-1 transition-all" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-6 space-y-6 bg-white/20 border-t border-white/30">
              <button
                onClick={() => {
                  onClose();
                  if (setIsModalOpen) setIsModalOpen(true);
                }}
                className="w-full py-4 bg-[#1a4d4d] text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#8dae39] hover:text-[#1a4d4d] transition-all shadow-lg active:scale-95 group"
              >
                Secure Free Review
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-5">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center text-[#1a4d4d] hover:bg-[#8dae39] hover:scale-110 transition-all border border-white/60 shadow-sm"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
