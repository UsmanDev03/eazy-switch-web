"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ConsultationModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/75 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            // Height ko 85vh kiya hai aur my-8 add kiya hai taake top/bottom space miley
            className="relative w-full max-w-4xl max-h-[85vh] my-8 overflow-y-auto md:overflow-hidden rounded-2xl shadow-2xl border border-white/10"
            style={{
              background: "linear-gradient(135deg, #2d1b4d 0%, #8b5aa6 100%)",
            }}
          >
            {/* Close Button - Thora mazeed adjust kiya hai safe area ke liye */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 md:right-5 md:top-5 text-white/70 hover:text-white z-30 p-2 bg-black/20 md:bg-transparent rounded-full"
            >
              <X size={20} className="md:w-7 md:h-7" />
            </button>

            <div className="flex flex-col md:flex-row p-5 md:p-14 gap-6 md:gap-10 items-center relative z-10">
              {/* Animation Section */}
              <div className="w-full md:w-1/2 flex flex-col items-center text-center order-first md:order-last mt-4 md:mt-0">
                <div className="w-full max-w-[160px] md:max-w-full aspect-square mb-2 md:mb-6 relative">
                  <DotLottieReact
                    src="https://lottie.host/1674ad82-293b-4faf-b486-713df3412d3a/RSRG1OvdVV.lottie"
                    loop
                    autoplay
                  />
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl -z-10" />
                </div>

                <div className="hidden md:block text-[11px] text-purple-200 leading-relaxed max-w-sm px-4">
                  <p>
                    Eazy Switch needs your info to contact you. Unsubscribe
                    anytime. Review our{" "}
                    <a
                      href="#"
                      className="underline hover:text-white transition-colors"
                    >
                      privacy policy
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <div className="w-full md:w-1/2 text-white pb-4 md:pb-0">
                <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 tracking-tight">
                  Book a free consultation
                </h2>
                <p className="text-[11px] md:text-sm text-purple-100 mb-5 md:mb-8 leading-relaxed">
                  Not sure if your setup{"'"}s working? We{"'"}ll help you find
                  a better option.
                </p>

                <form
                  className="space-y-3 md:space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-[9px] md:text-[10px] font-semibold text-purple-200 uppercase tracking-wider">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 md:p-2.5 rounded bg-white text-gray-900 text-sm outline-none border border-transparent focus:border-[#8b5aa6] transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[9px] md:text-[10px] font-semibold text-purple-200 uppercase tracking-wider">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 md:p-2.5 rounded bg-white text-gray-900 text-sm outline-none border border-transparent focus:border-[#8b5aa6] transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[9px] md:text-[10px] font-semibold text-purple-200 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 md:p-2.5 rounded bg-white text-gray-900 text-sm outline-none border border-transparent focus:border-[#8b5aa6] transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[9px] md:text-[10px] font-semibold text-purple-200 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full p-2 md:p-2.5 rounded bg-white text-gray-900 text-sm outline-none border border-transparent focus:border-[#8b5aa6] transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[9px] md:text-[10px] font-semibold text-purple-200 uppercase tracking-wider">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 md:p-2.5 rounded bg-white text-gray-900 text-sm outline-none border border-transparent focus:border-[#8b5aa6] transition-all"
                      required
                    />
                  </div>

                  {/* --- Static Human Verification Checkbox --- */}
                  <div className="flex items-start gap-3 px-2 py-3 bg-white/5 rounded-lg border border-white/10 mt-2">
                    <div className="flex items-center h-5">
                      <input
                        id="human_verify"
                        name="is_human"
                        type="checkbox"
                        required
                        className="w-5 h-5 rounded border-2 border-gray-300 text-[#8b5aa6] focus:ring-[#8b5aa6] cursor-pointer transition-all accent-[#8b5aa6]"
                      />
                    </div>
                    <label
                      htmlFor="human_verify"
                      className="text-sm font-bold text-white cursor-pointer select-none"
                    >
                      I am not a robot. <span className="text-red-500">*</span>
                      <p className="text-[10px] text-purple-200/60 font-medium normal-case tracking-normal">
                        Confirming you are a real person for security purposes.
                      </p>
                    </label>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full md:w-auto bg-[#38b2ac] hover:bg-[#2c8d88] text-white font-bold py-2.5 md:py-3 px-10 rounded-full text-sm transition-all shadow-lg uppercase tracking-wider"
                  >
                    Check my setup
                  </motion.button>
                </form>

                <p className="mt-4 md:hidden text-[9px] text-center text-purple-200">
                  By clicking, you agree to our{" "}
                  <a href="#" className="underline">
                    privacy policy
                  </a>
                  .
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
