"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import {
  Mail,
  Phone,
  Clock,
  UploadCloud,
  Send,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [dragActive, setDragActive] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#1a4d4d]">
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
          <Navbar />

          <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center relative z-10">
            {/* Static H1 - No Animation */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight">
              Let's Start Your <br />
              <span className="text-[#8dae39]">Savings Journey.</span>
            </h1>

            {/* Static Paragraph - No Animation */}
            <p className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Have a question or ready to switch? Our expert consultants are
              just a message away.{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                Most businesses save up to 30% after their first review.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* --- LEFT SIDE: CONTACT INFO + TRUST POINTS --- */}
          {/* --- LEFT SIDE: CONTACT INFO + TRUST POINTS --- */}
          <motion.div {...fadeInUp} className="lg:w-1/3 space-y-12">
            <div>
              <h3 className="text-3xl font-black text-[#1a4d4d] mb-8 tracking-tight">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email us",
                    val: "hello@eazyswitch.co.uk",
                    color: "#8b5aa6",
                  },
                  {
                    icon: Phone,
                    label: "Call us",
                    val: "+44 (0) 123 456 789",
                    color: "#8dae39",
                  },
                  {
                    icon: Clock,
                    label: "Working Hours",
                    val: "Mon - Fri: 9:00 - 18:00",
                    color: "#1a4d4d",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div
                      className="p-4 rounded-2xl transition-all group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}10` }}
                    >
                      <item.icon
                        className="w-6 h-6"
                        style={{ color: item.color }}
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-black text-gray-400 tracking-[0.15em] mb-1">
                        {item.label}
                      </p>
                      <p className="font-extrabold text-xl md:text-2xl text-[#1a4d4d]">
                        {item.val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- WHY CHOOSE US (Bigger & Bolder) --- */}
            <div className="pt-10 border-t-2 border-gray-100">
              <h4 className="text-sm uppercase tracking-[0.25em] font-black text-gray-400 mb-8">
                Why Choose Us?
              </h4>
              <div className="space-y-6">
                {[
                  "No hidden brokerage fees",
                  "Full market comparison",
                  "Dedicated account manager",
                  "100% Secure Data Handling",
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="bg-[#8dae39] rounded-xl p-2 shadow-lg shadow-[#8dae39]/20 group-hover:rotate-12 transition-transform">
                      <CheckCircle2 className="text-white w-5 h-5" />
                    </div>
                    <span className="text-lg md:text-xl font-bold text-[#1a4d4d] leading-tight">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Encryption Note (Bigger) */}
              <div className="mt-10 p-6 bg-[#1a4d4d]/5 rounded-[2rem] flex items-center gap-5 border border-[#1a4d4d]/10">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <ShieldCheck className="w-8 h-8 text-[#1a4d4d]" />
                </div>
                <p className="text-sm md:text-base text-[#1a4d4d]/80 font-semibold leading-snug">
                  Your information is protected by industry-standard{" "}
                  <span className="text-[#1a4d4d] font-black underline decoration-[#8dae39] decoration-2">
                    256-bit encryption
                  </span>
                  .
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: FORM --- */}
          <motion.div
            {...fadeInUp}
            className="lg:w-2/3 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d] ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold placeholder:text-gray-400 focus:border-[#8b5aa6] focus:ring-4 focus:ring-[#8b5aa6]/5 outline-none transition-all shadow-sm"
                  />
                </div>

                {/* Business Name */}
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d] ml-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company Ltd"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold placeholder:text-gray-400 focus:border-[#8b5aa6] focus:ring-4 focus:ring-[#8b5aa6]/5 outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d] ml-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold placeholder:text-gray-400 focus:border-[#8b5aa6] focus:ring-4 focus:ring-[#8b5aa6]/5 outline-none transition-all shadow-sm"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d] ml-1">
                    Service
                  </label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-bold focus:border-[#8b5aa6] outline-none transition-all appearance-none cursor-pointer shadow-sm">
                      <option>Business Electricity</option>
                      <option>Business Gas</option>
                      <option>Water Services</option>
                    </select>
                    <ChevronRight className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#1a4d4d] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d] ml-1 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#8b5aa6]" /> How can
                  we help?
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your current energy needs or contract expiry date..."
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold placeholder:text-gray-400 focus:border-[#8b5aa6] focus:ring-4 focus:ring-[#8b5aa6]/5 outline-none transition-all resize-none shadow-sm"
                ></textarea>
              </div>

              {/* Bill Upload Section */}
              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d] ml-1">
                  Attach Recent Bill (Optional)
                </label>
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={() => setDragActive(false)}
                  className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center transition-all shadow-inner ${
                    dragActive
                      ? "border-[#8dae39] bg-[#8dae39]/10"
                      : "border-gray-300 bg-gray-50 hover:border-[#8b5aa6] hover:bg-white"
                  }`}
                >
                  <UploadCloud
                    className={`w-12 h-12 mb-3 transition-colors ${dragActive ? "text-[#8dae39]" : "text-gray-400"}`}
                  />
                  <p className="text-base font-bold text-[#1a4d4d]">
                    Drop bill here or{" "}
                    <span className="text-[#8b5aa6] underline decoration-2 underline-offset-4 cursor-pointer">
                      browse files
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 mt-2 font-medium text-center">
                    Supported formats: PDF, JPG, PNG (Max 5MB)
                  </p>
                  <input type="file" className="hidden" />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ y: -3, backgroundColor: "#153d3d" }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-6 bg-[#1a4d4d] text-white font-black text-xl rounded-2xl flex items-center justify-center gap-4 shadow-2xl shadow-[#1a4d4d]/30 transition-all tracking-wide"
              >
                Send Request <Send className="w-6 h-6" />
              </motion.button>

              <p className="text-xs text-gray-500 text-center font-bold tracking-tight">
                🔒 Your data is 100% secure and will never be shared with third
                parties.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
