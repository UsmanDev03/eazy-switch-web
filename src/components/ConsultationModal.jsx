"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ConsultationModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            // Responsive width and height handling
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto md:overflow-hidden rounded-2xl shadow-2xl border border-white/10"
            style={{
              background: "linear-gradient(135deg, #2d1b4d 0%, #8b5aa6 100%)",
            }}
          >
            {/* Background Decorative Animations (Static on mobile for performance) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none hidden md:block">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-[100px]"
              />
            </div>

            {/* Close Button - Larger touch target for mobile */}
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 md:right-5 md:top-5 text-white/70 hover:text-white z-30 p-2"
            >
              <X size={24} className="md:w-7 md:h-7" />
            </button>

            <div className="flex flex-col md:flex-row p-6 md:p-14 gap-8 md:gap-10 items-center relative z-10">
              
              {/* Right Side (Animation) - Shows first on Mobile for visual impact */}
              <div className="w-full md:w-1/2 flex flex-col items-center text-center order-first md:order-last">
                <div className="w-full max-w-[200px] md:max-w-full aspect-square mb-4 md:mb-6 relative">
                  <DotLottieReact
                    src="https://lottie.host/1674ad82-293b-4faf-b486-713df3412d3a/RSRG1OvdVV.lottie"
                    loop
                    autoplay
                  />
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl -z-10" />
                </div>

                {/* Hide legal text on very small screens or keep it compact */}
                <div className="hidden md:block text-[11px] text-purple-200 leading-relaxed max-w-sm px-4">
                  <p>
                    Eazy Switch needs your info to contact you. Unsubscribe anytime. Review our{" "}
                    <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
                  </p>
                </div>
              </div>

              {/* Left Side: Form */}
              <div className="w-full md:w-1/2 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                  Book a free consultation
                </h2>
                <p className="text-xs md:text-sm text-purple-100 mb-6 md:mb-8 leading-relaxed">
                  Not sure if your setup{"'"}s working? We{"'"}ll help you find a better option.
                </p>

                <form className="space-y-3 md:space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-semibold text-purple-200 uppercase tracking-wider">First Name *</label>
                      <input type="text" className="w-full p-2 md:p-2.5 rounded bg-white text-gray-900 text-sm focus:ring-2 focus:ring-teal-400 outline-none transition" required />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] font-semibold text-purple-200 uppercase tracking-wider">Last Name *</label>
                      <input type="text" className="w-full p-2 md:p-2.5 rounded bg-white text-gray-900 text-sm focus:ring-2 focus:ring-teal-400 outline-none transition" required />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-purple-200 uppercase tracking-wider">Email *</label>
                    <input type="email" className="w-full p-2 md:p-2.5 rounded bg-white text-gray-900 text-sm focus:ring-2 focus:ring-teal-400 outline-none transition" required />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-purple-200 uppercase tracking-wider">Phone Number *</label>
                    <input type="tel" className="w-full p-2 md:p-2.5 rounded bg-white text-gray-900 text-sm focus:ring-2 focus:ring-teal-400 outline-none transition" required />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-semibold text-purple-200 uppercase tracking-wider">Company Name *</label>
                    <input type="text" className="w-full p-2 md:p-2.5 rounded bg-white text-gray-900 text-sm focus:ring-2 focus:ring-teal-400 outline-none transition" required />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 md:mt-6 w-full md:w-auto bg-[#38b2ac] hover:bg-[#2c8d88] text-white font-bold py-3 px-10 rounded-full text-sm md:text-base transition-all shadow-lg"
                  >
                    Check my setup
                  </motion.button>
                </form>

                {/* Privacy policy link for mobile (shows below button) */}
                <p className="mt-4 md:hidden text-[10px] text-center text-purple-200">
                  By clicking, you agree to our <a href="#" className="underline">privacy policy</a>.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;