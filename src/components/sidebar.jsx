"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  ArrowRight,
  ChevronLeft 
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Who We Are", href: "/about" },
  { label: "Our Standards", href: "/standards" },
  { label: "Complaints Procedure", href: "/complaints" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
];

export function Sidebar({ isOpen, onClose, setIsModalOpen }) {
  
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const sidebarVariants = {
    closed: { x: "100%", transition: { duration: 0.4, ease: "easeInOut" } },
    open: { x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.05, duration: 0.3 }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. Ultra Light Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[100]"
          />

          {/* 2. Sleek Glass Sidebar */}
          <motion.aside
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-full max-w-[380px] bg-white/60 backdrop-blur-xl z-[110] shadow-2xl flex flex-col border-l border-white/30"
          >
            {/* Header: Eazy Switch ki jagah Back Button */}
            <div className="flex items-center justify-between p-6">
               <button 
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 bg-white/40 hover:bg-white/80 rounded-full transition-all text-[#1a4d4d] font-bold text-sm border border-white/60 shadow-sm active:scale-95"
               >
                 <ChevronLeft className="w-4 h-4" />
                 Back
               </button>
               
               <button 
                onClick={onClose} 
                className="p-2.5 bg-[#1a4d4d] text-white rounded-full hover:rotate-90 transition-all duration-300 shadow-md active:scale-90"
               >
                 <X className="w-5 h-5" />
               </button>
            </div>

            {/* Navigation: No Scroller, Compact Glass Items */}
            <nav className="flex-1 px-6 pt-2">
              <ul className="space-y-2.5">
                {navItems.map((item, i) => (
                  <motion.li 
                    key={item.label}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between py-3.5 px-5 rounded-xl bg-white/30 border border-white/40 hover:bg-white/90 hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-base font-bold text-[#1a4d4d] transition-colors">
                        {item.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#1a4d4d]/30 group-hover:text-[#1a4d4d] group-hover:translate-x-1 transition-all" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 space-y-6"
            >
              <button
                onClick={() => {
                  onClose();
                  if (setIsModalOpen) setIsModalOpen(true);
                }}
                className="w-full py-4 bg-[#1a4d4d] text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#143a3a] transition-all shadow-lg active:scale-95 group"
              >
                Secure Free Review
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-5">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center text-[#1a4d4d] hover:bg-white transition-all shadow-sm border border-white/60"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}