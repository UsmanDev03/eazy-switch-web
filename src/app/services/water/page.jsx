"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import { 
  Droplets, 
  ShieldCheck, 
  SearchCheck, 
  FileSearch, 
  ArrowRight, 
  Waves,
  BarChart3,
  Droplet,
  GlassWater
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const WaterPage = () => {
  const waterCharges = [
    { label: "Clean Water", desc: "Supply of fresh water to your premises" },
    { label: "Wastewater", desc: "Removal and treatment of used water" },
    { label: "Surface Water", desc: "Drainage of rainwater from your site" },
    { label: "Trade Effluent", desc: "Industry-specific waste liquid fees" },
    { label: "Fixed Charges", desc: "Meter standing and administration fees" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#1a4d4d]">
      <Navbar />

      {/* Hero Section - EXACT SAME LAYOUT AS ELECTRICITY & GAS */}
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
          <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight"
            >
              Reviewing Your <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Business Water Costs.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              From wastewater to industry-specific fees, we ensure every drop is 
              accounted for accurately. Guiding your business with{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                clarity, expertise, and full transparency.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-[#1a4d4d] leading-tight">
                The Cost of <br /><span className="text-[#8dae39]">Inaccuracy.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Water bills often include clean water, wastewater, and drainage fees that 
                can be incorrectly applied. Even minor inaccuracies can accumulate over 
                time, significantly affecting your overall utility spend.
              </p>
              
              <div className="flex items-start gap-4 p-5 bg-[#8dae39]/5 rounded-2xl border border-[#8dae39]/20 shadow-sm">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm text-[#1a4d4d]">
                  <Waves className="w-6 h-6 text-[#8dae39]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a4d4d]">Hidden Overcharges</h4>
                  <p className="text-sm text-gray-500 italic">Incorrect meter sizes or surface water bands are common reasons for overpaying.</p>
                </div>
              </div>
            </div>

            {/* Water Charges Card */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <GlassWater className="text-[#8dae39]" /> 
                Water Billing Breakdown
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {waterCharges.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-[#8dae39]/5 transition-colors group border border-transparent hover:border-[#8dae39]/20">
                    <span className="font-black text-[#1a4d4d] group-hover:text-[#8dae39]">{item.label}</span>
                    <span className="text-xs text-gray-500 font-medium text-right max-w-[150px]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Role Section */}
      <section className="py-20 bg-[#1a4d4d] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Our Methodology.</h2>
            <p className="text-[#8dae39] font-medium text-lg">Independent Water Consultancy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileSearch,
                title: "Deep Audit",
                text: "Reviewing clean water, wastewater, and site-specific fees."
              },
              {
                icon: SearchCheck,
                title: "Spot Discrepancies",
                text: "Identifying errors in tariffs or incorrect meter data."
              },
              {
                icon: ShieldCheck,
                title: "Supplier Liaison",
                text: "Managing all communications and disputes with water suppliers."
              },
              {
                icon: BarChart3,
                title: "Optimization",
                text: "Advising on tariff structures and usage monitoring strategies."
              }
            ].map((box, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group">
                <box.icon className="w-10 h-10 text-[#8dae39] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-3">{box.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{box.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 container mx-auto px-6 max-w-4xl text-center">
        <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100">
          <h2 className="text-3xl font-black text-[#1a4d4d] mb-6">Accurate Management, Real Savings.</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Stop overpaying for water services. Let our expert consultants 
            provide the accuracy and transparency your business needs.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#1a4d4d] text-white rounded-2xl font-black hover:bg-[#8dae39] hover:text-[#1a4d4d] transition-all group shadow-lg shadow-[#1a4d4d]/20"
          >
            Start Your Water Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WaterPage;