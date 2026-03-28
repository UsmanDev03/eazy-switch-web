"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import {
  Zap,
  ShieldCheck,
  SearchCheck,
  FileSearch,
  ArrowRight,
  AlertCircle,
  BarChart3,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const ElectricityPage = () => {
  const charges = [
    { label: "TNUoS", desc: "Transmission Network Use of System" },
    { label: "DUoS", desc: "Distribution Use of System" },
    { label: "BSUoS", desc: "Balancing Services Use of System" },
    { label: "RO", desc: "Renewables Obligation" },
    { label: "CfD", desc: "Contracts for Difference" },
    { label: "CM", desc: "Capacity Market" },
    { label: "Metering", desc: "MOP / DC / DA Charges" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#1a4d4d]">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
          <Navbar />

          {/* Content Container */}
          <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight"
            >
              Understanding Your <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Business Electricity Costs.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              We decode the complexity of commodity and non-commodity charges.
              Guiding your business through electricity decisions with{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                clarity, expertise, and full transparency.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why This Matters - Problem Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-[#1a4d4d] leading-tight">
                Why Complexity <br />
                <span className="text-[#8dae39]">Matters.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Electricity billing is far from simple. Errors or misapplied
                charges can quietly inflate your operational costs. Many
                businesses remain unaware of hidden fees or discrepancies that
                affect their bottom line.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-r-xl">
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500 shrink-0" />
                  <p className="text-sm text-red-800 font-medium leading-relaxed">
                    Most billing errors go unnoticed for years. Reviewing these
                    charges is the only way to ensure 100% transparency.
                  </p>
                </div>
              </div>
            </div>

            {/* Non-Commodity Charges Grid */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <BarChart3 className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <SearchCheck className="text-[#8dae39]" />
                Non-Commodity Pass-Throughs
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {charges.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-[#8dae39]/5 transition-colors group"
                  >
                    <span className="font-black text-[#1a4d4d] group-hover:text-[#8dae39]">
                      {item.label}
                    </span>
                    <span className="text-xs text-gray-500 font-medium italic">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Role - Solution Section */}
      <section className="py-20 bg-[#1a4d4d] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Our Strategic Role.
            </h2>
            <p className="text-[#8dae39] font-medium text-lg">
              Your Independent Electricity Consultant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileSearch,
                title: "Bill Review",
                text: "Deep audit of non-commodity and metering charges.",
              },
              {
                icon: ShieldCheck,
                title: "Identify Anomalies",
                text: "Spotting billing discrepancies that automated systems miss.",
              },
              {
                icon: Scale,
                title: "Supplier Liaison",
                text: "Directly managing clarifications and disputes with suppliers.",
              },
              {
                icon: BarChart3,
                title: "Tariff Insight",
                text: "Professional guidance on the best contract and tariff options.",
              },
            ].map((box, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group"
              >
                <box.icon className="w-10 h-10 text-[#8dae39] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-3">{box.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {box.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 container mx-auto px-6 max-w-4xl text-center">
        <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100">
          <h2 className="text-3xl font-black text-[#1a4d4d] mb-6">
            Clarity, Accuracy, and Confidence.
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Ready to have your electricity spend professionally reviewed? Let us
            help you manage your costs responsibly and transparently.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#1a4d4d] text-white rounded-2xl font-black hover:bg-[#8dae39] hover:text-[#1a4d4d] transition-all group shadow-lg shadow-[#1a4d4d]/20"
          >
            Book a Bill Review
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ElectricityPage;
