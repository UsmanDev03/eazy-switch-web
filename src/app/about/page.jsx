"use client";
import { Navbar } from "@/components/navbar";
import {
  ArrowRight,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Heart,
  Search,
  FileText,
  MousePointerClick,
  Sparkles,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  // NORMAL/SUBTLE Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 },
  };

  return (
    <div className="min-h-screen bg-[#fcfdfd] overflow-x-hidden text-[#1a4d4d]">
      {/* 1. Hero Section - Padding Reduced */}
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
          <Navbar />

          {/* Purple Gradient removed from here */}

          <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight"
            >
              A Smarter Way to <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Secure Business Utilities.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              Professional energy broker and consultant services. We guide your
              business with{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                clarity, expertise, and full transparency.
              </span>
            </motion.p>
          </div>

          {/* Purple Blur Circle removed from here */}
        </div>
      </section>

      {/* 2. Our 5-Step Journey Section - Light Green Shady BG & Reduced Padding */}
      <section className="py-16 bg-[#8dae39]/5 overflow-hidden relative border-b border-[#8dae39]/10">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#8b5aa6]/10 px-4 py-1 rounded-full mb-3 text-[#8b5aa6] font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> The Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d4d] mb-2 text-balance">
              The Eazy Switch Journey
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
          >
            {[
              {
                step: "01",
                icon: Search,
                title: "Share Your Bill",
                desc: "Send us your bill or a meter photo.",
              },
              {
                step: "02",
                icon: FileText,
                title: "Sign Our LOA",
                desc: "Digital authorization in seconds.",
              },
              {
                step: "03",
                icon: Globe,
                title: "Market Review",
                desc: "Scanning 20+ top UK suppliers.",
              },
              {
                step: "04",
                icon: ShieldCheck,
                title: "Clause Check",
                desc: "We read the fine print for you.",
              },
              {
                step: "05",
                icon: MousePointerClick,
                title: "On-going Support",
                desc: "Always here when you need us.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5, borderColor: "#8b5aa6" }}
                className="relative p-6 rounded-2xl bg-white border border-gray-100 flex flex-col items-center text-center group shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl font-black text-[#8b5aa6]/10 group-hover:text-[#8b5aa6]/25 mb-3 tracking-tighter transition-colors">
                  {s.step}
                </div>
                <s.icon className="w-8 h-8 text-[#8b5aa6] mb-4" />
                <h3 className="font-bold text-[#1a4d4d] text-base mb-1">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {s.desc}
                </p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#8b5aa6] rounded-full group-hover:w-1/2 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Transparency & Fees Section - Light Purple Shady BG & Reduced Padding */}
      <section className="py-16 bg-[#8b5aa6]/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <motion.div {...fadeInUp} className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-[#8dae39]/15 px-4 py-1.5 rounded-full mb-4 text-[#1a4d4d] font-bold text-xs uppercase tracking-widest border border-[#8dae39]/30">
                Ethical Brokerage
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a4d4d] mb-4 leading-tight">
                Clarity, Fairness &{" "}
                <span className="text-[#8dae39]">No Surprises.</span>
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                At Eazy Switch, we pride ourselves on keeping fees fair and
                fully disclosed. Our standard fee ranges from{" "}
                <span className="font-semibold text-[#8b5aa6] bg-[#8b5aa6]/10 px-2 py-0.5 rounded">
                  0.5p to 1.5p per kWh.
                </span>
              </p>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-white p-6 rounded-2xl border border-[#8b5aa6]/10 shadow-sm relative overflow-hidden group"
              >
                <div className="flex items-start gap-4 relative z-10">
                  <Heart className="w-8 h-8 text-[#8b5aa6] fill-[#8b5aa6]/10 shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#1a4d4d] text-lg">
                      Community Commitment
                    </h4>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      For charities and places of worship, we apply a reduced
                      flat fee of{" "}
                      <strong className="text-[#8b5aa6]">0.1p per kWh</strong>.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  t: "Fully Disclosed",
                  d: "Fees mentioned clearly in paperwork.",
                },
                { t: "Risk Analysis", d: "We highlight risks others ignore." },
                { t: "Life-long Support", d: "We stay for the full term." },
                { t: "Market Experts", d: "Decades of industry experience." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-5 bg-white rounded-xl flex flex-col gap-2 shadow-sm border border-gray-50 hover:border-[#8b5aa6]/20 transition-colors group"
                >
                  <CheckCircle2 className="text-[#8dae39] w-6 h-6 group-hover:text-[#8b5aa6] transition-colors" />
                  <div>
                    <h5 className="font-bold text-[#1a4d4d] text-base">
                      {item.t}
                    </h5>
                    <p className="text-gray-500 text-xs mt-0.5">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Serving the UK Section - Darker Subtle Shady BG */}
      <section className="bg-[#1a4d4d] py-16 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[#8b5aa6]/10 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Serving Businesses Across the UK
            </h2>
            <p className="text-gray-300 text-base font-light">
              From single-site retailers to industrial warehouses, we’ve got you
              covered.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {[
              "Retail & Food",
              "Corporate Offices",
              "Hotels & Hospitality",
              "Property Managers",
              "Charities & Worship",
              "Industrial & Logistics",
            ].map((sector, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center transition-all duration-300"
              >
                <span className="text-xs font-medium tracking-wide text-gray-100">
                  {sector}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Final CTA Section - Soft Light BG & Reduced Padding */}
      <section className="py-16 bg-[#f7fafc] container mx-auto px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto py-12 md:py-16 px-6 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#8b5aa6]/10 rounded-full blur-3xl"></div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a4d4d] mb-4 tracking-tight">
            Ready to Start Your <br />{" "}
            <span className="text-[#8b5aa6]">Energy Journey?</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto font-light">
            Don't navigate the complex utility market alone. Our consultants are
            ready to provide clarity and savings.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center relative z-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-[#8b5aa6] text-white font-bold text-base rounded-full hover:bg-[#7a4f93] transition-all flex items-center gap-2 shadow-lg shadow-purple-100"
            >
              Begin Today <ArrowRight className="w-4 h-4" />
            </motion.button>

            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-0.5 text-yellow-500 text-lg">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-[#1a4d4d] font-bold text-xs tracking-tight uppercase">
                Ethical Brokerage
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#8dae39]"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
