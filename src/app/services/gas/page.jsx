"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import {
  Flame,
  ShieldCheck,
  SearchCheck,
  FileSearch,
  ArrowRight,
  AlertCircle,
  BarChart3,
  TrendingUp,
  Settings2,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const GasPage = () => {
  const gasCharges = [
    { label: "Transportation", desc: "Costs to move gas through the grid" },
    { label: "Shipper Fees", desc: "Costs charged by gas shippers" },
    { label: "Green Gas Levy", desc: "Environmental support scheme costs" },
    { label: "Metering Fees", desc: "Meter provision and maintenance" },
    { label: "Admin Fees", desc: "Supplier administration and billing" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#1a4d4d]">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
          {/* Live HD Background Image for Gas Supply */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop"
              alt="Business Gas Supply"
              fill
              priority
              className="object-cover opacity-20"
              sizes="100vw"
              quality={85}
            />
            {/* Dark Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d4d]/90 via-transparent to-[#1a4d4d]/95" />
          </div>

          <Navbar />

          {/* Content Container */}
          <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight"
            >
              Managing Your <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Business Gas Supply.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              From transportation to Green Gas Levies, we ensure every component
              of your gas bill is accurate. Guiding your business with{" "}
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
                Beyond the Meter <br />
                <span className="text-[#8dae39]">Reading.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Gas billing includes complex layers like shipper costs and
                administration fees. Misapplied charges or meter issues can
                result in significant unnecessary expenditure.
              </p>

              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-[#8dae39]/10 rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp className="text-[#8dae39] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a4d4d]">Market Timing</h4>
                  <p className="text-sm text-gray-500">
                    Understanding renewal timing is crucial to avoiding price
                    spikes in the volatile gas market.
                  </p>
                </div>
              </div>
            </div>

            {/* Gas Charges Breakdown Card */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Settings2 className="text-[#8dae39]" />
                Gas Billing Components
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {gasCharges.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-[#8dae39]/5 transition-colors group border border-transparent hover:border-[#8dae39]/20"
                  >
                    <span className="font-black text-[#1a4d4d] group-hover:text-[#8dae39]">
                      {item.label}
                    </span>
                    <span className="text-xs text-gray-500 font-medium text-right max-w-[150px]">
                      {item.desc}
                    </span>
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
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              How We Assist.
            </h2>
            <p className="text-[#8dae39] font-medium text-lg italic">
              Your Independent Gas Consultant
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileSearch,
                title: "Comprehensive Review",
                text: "Auditing transportation, shipper fees, and Green Gas Levies.",
              },
              {
                icon: AlertCircle,
                title: "Error Detection",
                text: "Identifying billing anomalies or administrative errors.",
              },
              {
                icon: ShieldCheck,
                title: "Supplier Liaison",
                text: "Managing communication and clarifications with gas suppliers.",
              },
              {
                icon: BarChart3,
                title: "Renewal Strategy",
                text: "Expert insight on contract options and optimal renewal timing.",
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
            Expert Insight for Informed Decisions.
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Don't let hidden gas fees impact your budget. Let our consultants
            provide the clarity and accuracy your business deserves.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#1a4d4d] text-white rounded-2xl font-black hover:bg-[#8dae39] hover:text-[#1a4d4d] transition-all group shadow-lg shadow-[#1a4d4d]/20"
          >
            Review My Gas Bill
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GasPage;
