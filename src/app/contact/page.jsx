"use client";
import React, { useState, useRef } from "react";
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
  MapPin,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

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

      {/* Main Form Section */}
      <section className="py-16 container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* --- LEFT SIDE: TRUST POINTS --- */}
          <motion.div {...fadeInUp} className="lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-3xl font-black text-[#1a4d4d] mb-6 tracking-tight">
                Connect With Us
              </h3>
              <p className="text-gray-500 font-medium mb-8">
                Fill out the form and our team will get back to you within 24
                business hours.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    val: "hello@eazyswitch.co.uk",
                    color: "#8b5aa6",
                  },
                  {
                    icon: Phone,
                    label: "Call",
                    val: "+44 (0) 123 456 789",
                    color: "#8dae39",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="p-4 rounded-2xl transition-all bg-white shadow-sm border border-gray-100 group-hover:border-[#8dae39]">
                      <item.icon
                        className="w-6 h-6"
                        style={{ color: item.color }}
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-black text-gray-400 tracking-widest">
                        {item.label}
                      </p>
                      <p className="font-extrabold text-xl text-[#1a4d4d]">
                        {item.val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t-2 border-gray-100 space-y-6">
              <h4 className="text-sm uppercase tracking-[0.25em] font-black text-gray-400 mb-4">
                Why Choose Us?
              </h4>
              {[
                "No hidden brokerage fees",
                "Full market comparison",
                "Dedicated account manager",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="bg-[#8dae39] rounded-xl p-2 shadow-lg shadow-[#8dae39]/20 group-hover:rotate-12 transition-transform">
                    <CheckCircle2 className="text-white w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold text-[#1a4d4d] leading-tight">
                    {text}
                  </span>
                </div>
              ))}

              <div className="mt-8 p-6 bg-[#1a4d4d]/5 rounded-[2rem] flex items-center gap-4 border border-[#1a4d4d]/10">
                <ShieldCheck className="w-10 h-10 text-[#1a4d4d] shrink-0" />
                <p className="text-sm text-[#1a4d4d]/80 font-semibold leading-snug">
                  Encrypted{" "}
                  <span className="text-[#1a4d4d] font-black">256-bit</span>{" "}
                  data handling.
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
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold focus:border-[#8b5aa6] outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d]">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company Ltd"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold focus:border-[#8b5aa6] outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d]">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold focus:border-[#8b5aa6] outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d]">
                    Service
                  </label>
                  <select className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-bold appearance-none cursor-pointer outline-none focus:border-[#8b5aa6]">
                    <option>Business Electricity</option>
                    <option>Business Gas</option>
                    <option>Water Services</option>
                  </select>
                  <ChevronRight className="w-5 h-5 absolute right-4 top-[70%] -translate-y-1/2 rotate-90 text-[#1a4d4d] pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d] flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#8b5aa6]" /> How can
                  we help?
                </label>
                <textarea
                  rows="4"
                  placeholder="Contract expiry dates or specific requirements..."
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold focus:border-[#8b5aa6] outline-none transition-all resize-none shadow-sm"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d]">
                  Attach Recent Bill (Optional)
                </label>
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={() => setDragActive(false)}
                  onClick={() => fileInputRef.current.click()}
                  className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center transition-all cursor-pointer ${dragActive ? "border-[#8dae39] bg-[#8dae39]/10" : "border-gray-300 bg-gray-50 hover:bg-white"}`}
                >
                  <UploadCloud
                    className={`w-12 h-12 mb-3 ${dragActive ? "text-[#8dae39]" : "text-gray-400"}`}
                  />
                  <p className="text-base font-bold text-[#1a4d4d]">
                    Drop bill here or{" "}
                    <span className="text-[#8b5aa6] underline underline-offset-4">
                      browse files
                    </span>
                  </p>
                  <input type="file" ref={fileInputRef} className="hidden" />
                </div>
              </div>

              <motion.button
                whileHover={{ y: -3, backgroundColor: "#153d3d" }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-6 bg-[#1a4d4d] text-white font-black text-xl rounded-2xl flex items-center justify-center gap-4 shadow-xl transition-all"
              >
                Send Request <Send className="w-6 h-6" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* --- NEW SECTION: OFFICE & LOCATION --- */}
      <section className="py-12 bg-gray-50/50 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-[#1a4d4d] mb-4">
                Our <span className="text-[#8dae39]">Offices</span>
              </h2>
              <p className="text-gray-500 font-bold">
                Prefer a face-to-face chat? Visit our headquarters in the heart
                of the business district.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#8b5aa6] font-black uppercase tracking-widest text-sm cursor-pointer hover:gap-4 transition-all">
              Open in Google Maps <ExternalLink className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Map Area */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white p-4 rounded-[2.5rem] shadow-xl border border-gray-100 min-h-[400px] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                {/* Embed Map Here - Using a placeholder design */}
                <div className="text-center p-8">
                  <div className="bg-[#1a4d4d] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <MapPin className="text-white w-8 h-8" />
                  </div>
                  <p className="font-black text-[#1a4d4d]">
                    Google Maps Integration
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    123 Business Way, London, EC1A 1BB
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Address & Hours Detail Cards */}
            <div className="lg:col-span-5 grid gap-6">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#8dae39]/10 w-fit p-3 rounded-xl mb-4">
                  <Clock className="w-6 h-6 text-[#8dae39]" />
                </div>
                <h4 className="font-black text-[#1a4d4d] uppercase text-xs tracking-widest mb-2 opacity-50">
                  Business Hours
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between font-bold text-[#1a4d4d]">
                    <span>Monday - Friday</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-400">
                    <span>Weekend</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a4d4d] p-8 rounded-[2rem] text-white shadow-xl shadow-[#1a4d4d]/20 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-black uppercase text-xs tracking-widest mb-4 text-[#8dae39]">
                    Direct Contact
                  </h4>
                  <div className="space-y-4">
                    <p className="text-xl font-extrabold leading-tight">
                      Switchboard: <br /> +44 (0) 123 456 789
                    </p>
                    <p className="text-xl font-extrabold leading-tight">
                      Support: <br /> support@eazyswitch.co.uk
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 opacity-10">
                  <Phone className="w-32 h-32 rotate-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
