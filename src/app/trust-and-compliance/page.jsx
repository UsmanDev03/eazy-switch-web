"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import { CompanyInfo } from "@/components/company-info"; // Import Added
import {
  ShieldCheck,
  Gavel,
  ExternalLink,
  Lock,
  Scale,
  Eye,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const TrustAndCompliance = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfa] text-[#1a4d4d] font-sans selection:bg-[#8dae39] selection:text-white">
      {/* --- HERO SECTION --- */}
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center text-center">
          {/* 1. Background Image Layer - Stable Professional Trust Image */}
          <div className="absolute inset-0 z-0 bg-[#1a4d4d]">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1500"
              alt="Trust and Compliance Background"
              fill
              priority
              className="object-cover opacity-25"
              sizes="100vw"
            />
            {/* Dark Gradient Overlay for consistent UI */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d4d]/80 via-[#1a4d4d]/20 to-[#1a4d4d]" />
          </div>

          {/* 2. Navbar */}
          <Navbar />

          {/* 3. Content Layer */}
          <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight drop-shadow-md"
            >
              Trust & <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Compliance.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              At Eazy Switch Limited, trust is at our core. We operate with{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                full transparency
              </span>
              , strong governance, and a commitment to ethical energy
              consultancy.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto bg-white rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100 p-6 sm:p-10 md:p-16 lg:p-24 space-y-20">
            {/* Our Goal & Why Businesses Trust Us */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#1a4d4d]">
                  Why Businesses Trust Us
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Independent energy consultancy",
                    "Transparent processes and clear communication",
                    "Experienced in commercial and multi-site energy procurement",
                    "Strong compliance and regulatory alignment",
                    "Dedicated support from start to finish",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-transparent hover:border-[#8dae39]/20 transition-all"
                    >
                      <CheckCircle2 className="text-[#8dae39] w-5 h-5 shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#1a4d4d] p-8 md:p-12 rounded-[2rem] text-white space-y-6 self-center">
                <ShieldCheck className="text-[#8dae39] w-12 h-12" />
                <h3 className="text-2xl font-bold italic text-[#8dae39]">
                  Our Goal
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed">
                  "Our goal is simple: to give you complete confidence that your
                  energy procurement is being handled professionally,
                  responsibly, and in your best interest."
                </p>
              </div>
            </div>

            {/* Regulation & Industry Alignment */}
            <div className="space-y-10">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Regulation and Industry Alignment
                </h2>
                <p className="text-gray-600">
                  We operate in line with UK regulatory standards and guidance
                  from leading authorities.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Ofgem",
                  "Energy Ombudsman",
                  "UK GDPR",
                  "Data Protection Act 2018",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-all"
                  >
                    <Scale className="mx-auto text-[#8dae39] mb-4 w-8 h-8" />
                    <span className="font-bold text-[#1a4d4d] block">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ombudsman Membership Section */}
            <div className="bg-[#8dae39]/5 border-2 border-dashed border-[#8dae39]/30 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <Gavel className="text-[#1a4d4d] w-8 h-8" />
                    <h2 className="text-2xl font-bold text-[#1a4d4d]">
                      Energy Ombudsman Membership
                    </h2>
                  </div>
                  <p className="text-gray-600 max-w-xl">
                    We are registered with the Energy Ombudsman, providing
                    independent dispute resolution, external oversight, and
                    consumer protection.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a4d4d] text-white rounded-lg font-mono text-sm">
                    <span>Membership Reference:</span>
                    <span className="font-bold text-[#8dae39]">C35EAZY01</span>
                  </div>
                </div>
                <div className="w-full lg:w-auto">
                  <a
                    href="https://www.energyombudsman.org/raise-dispute/eazy-switch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#1a4d4d] text-white px-8 py-5 rounded-xl font-bold hover:bg-[#8dae39] transition-all flex items-center justify-center gap-3 shadow-xl group"
                  >
                    Raise a Dispute with Energy Ombudsman
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Transparency & Other Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#1a4d4d] rounded-3xl text-white space-y-5">
                <div className="flex items-center gap-3">
                  <Eye className="text-[#8dae39] w-6 h-6" />
                  <h3 className="font-bold text-xl">
                    Transparency & Protection
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#8dae39]" /> Honest and
                    clear communication
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#8dae39]" /> No hidden
                    fees
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#8dae39]" /> Full
                    visibility of options
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-[#8dae39]" /> Ethical
                    and fair treatment
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between group">
                  <div>
                    <h4 className="font-bold text-[#1a4d4d]">Complaints</h4>
                    <p className="text-sm text-gray-500">
                      View our formal process
                    </p>
                  </div>
                  <a
                    href="/complaints-procedure"
                    className="p-3 bg-white rounded-full shadow-sm text-[#8dae39] group-hover:bg-[#8dae39] group-hover:text-white transition-all"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between group">
                  <div>
                    <h4 className="font-bold text-[#1a4d4d]">
                      Data Protection
                    </h4>
                    <p className="text-sm text-gray-500">
                      How we handle your data
                    </p>
                  </div>
                  <a
                    href="/privacy-policy"
                    className="p-3 bg-white rounded-full shadow-sm text-[#8dae39] group-hover:bg-[#8dae39] group-hover:text-white transition-all"
                  >
                    <Lock className="w-5 h-5" />
                  </a>
                </div>

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between group">
                  <div>
                    <h4 className="font-bold text-[#1a4d4d]">
                      Independent Advice
                    </h4>
                    <p className="text-sm text-gray-500">
                      Impartial energy advice
                    </p>
                  </div>
                  <a
                    href="https://www.citizensadvice.org.uk/consumer/energy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full shadow-sm text-[#8dae39] group-hover:bg-[#8dae39] group-hover:text-white transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* --- Reusable Company Info Section --- */}
            <div className="pt-10">
              <CompanyInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustAndCompliance;
