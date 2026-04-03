"use client";
import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { CompanyInfo } from "@/components/company-info"; // Import the component
import {
  ShieldAlert,
  Users,
  FileCheck,
  Search,
  GraduationCap,
  BarChart3,
  HeartHandshake,
  Mail,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const ModernSlaveryStatement = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfa] text-[#1a4d4d] font-sans selection:bg-[#8dae39] selection:text-white">
      {/* --- HERO SECTION --- */}
 <section
  className="relative overflow-hidden bg-[#1a4d4d]"
  suppressHydrationWarning={true}
>
  <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center text-center">
    
    {/* 1. Background Image Layer - Ethical & Professional Theme */}
    <div className="absolute inset-0 z-0 bg-[#1a4d4d]">
      <Image
        // Professional teamwork/ethics related image
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1500"
        alt="Modern Slavery Statement Background"
        fill
        priority
        className="object-cover opacity-20" 
        sizes="100vw"
      />
      {/* Consistent Dark Teal Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d4d]/90 via-[#1a4d4d]/40 to-[#1a4d4d]" />
    </div>

    {/* 2. Navbar */}
    <Navbar />

    {/* 3. Content Container */}
    <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 tracking-tight drop-shadow-md"
      >
        Modern Slavery <br />
        <motion.span
          initial={{ color: "#ffffff" }}
          animate={{ color: "#8dae39" }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Statement.
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
      >
        Effective Date:{" "}
        <span className="text-white font-medium underline decoration-[#8dae39]">
          01 April 2026
        </span>.{" "}
        <br />
        We ensure{" "}
        <span className="text-white font-medium italic">
          ethical practices and full transparency
        </span>{" "}
        against modern slavery in all our operations.
      </motion.p>
    </div>
  </div>
</section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto bg-white rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100 p-6 sm:p-10 md:p-16 lg:p-24 space-y-16">
            {/* Introduction Quote */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border-l-8 border-[#8dae39]">
              <p className="text-lg md:text-xl text-[#1a4d4d] leading-relaxed italic">
                "We are committed to acting ethically, with integrity and
                transparency in all business dealings, and to implementing
                effective systems and controls to safeguard against modern
                slavery."
              </p>
            </div>

            {/* 1 & 2: Business & Governance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Users className="text-[#8dae39] w-8 h-8" />
                  <h2 className="text-2xl font-bold">
                    1. Our Business and Supply Chains
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Eazy Switch Limited operates as an energy consultancy across
                  the UK. Our supply chains primarily include licensed energy
                  suppliers, IT providers, and professional advisors. We assess
                  our direct exposure as low but remain vigilant.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Scale className="text-[#8dae39] w-8 h-8" />
                  <h2 className="text-2xl font-bold">
                    2. Policies and Governance
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We maintain a zero-tolerance approach. Our governance includes
                  internal ethical policies, whistleblowing procedures, and
                  strict supplier onboarding compliance checks.
                </p>
              </div>
            </div>

            {/* 3 & 4: Risk & Training */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
              <div className="space-y-6 bg-gray-50 p-8 rounded-3xl">
                <div className="flex items-center gap-3">
                  <Search className="text-[#8dae39] w-8 h-8" />
                  <h2 className="text-2xl font-bold">3. Risk Assessment</h2>
                </div>
                <ul className="space-y-3 text-gray-600 list-disc pl-5">
                  <li>Assessing suppliers at onboarding stage</li>
                  <li>
                    Requiring confirmation of anti-slavery legislation adherence
                  </li>
                  <li>Contractual provisions for Modern Slavery Act 2015</li>
                </ul>
              </div>

              <div className="space-y-6 bg-gray-50 p-8 rounded-3xl">
                <div className="flex items-center gap-3">
                  <GraduationCap className="text-[#8dae39] w-8 h-8" />
                  <h2 className="text-2xl font-bold">
                    4. Training and Awareness
                  </h2>
                </div>
                <p className="text-gray-600">
                  Employees are informed of the risks and encouraged to raise
                  concerns through internal channels. Management ensures all
                  reports are addressed promptly.
                </p>
              </div>
            </div>

            {/* 5, 6 & Approval */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 border border-gray-100 rounded-2xl">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <BarChart3 className="text-[#8dae39]" /> 5. Monitoring
                  </h3>
                  <p className="text-sm text-gray-600">
                    Periodic reviews of supplier compliance and internal
                    oversight of our policies.
                  </p>
                </div>
                <div className="p-6 border border-gray-100 rounded-2xl">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <HeartHandshake className="text-[#8dae39]" /> 6. Ongoing
                    Commitments
                  </h3>
                  <p className="text-sm text-gray-600">
                    Strengthening due diligence and increasing internal training
                    to reflect best practices.
                  </p>
                </div>
              </div>

              {/* 7. Reporting Concerns (CONTACT BOX) */}
              <div className="bg-[#1a4d4d] text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">
                      7. Reporting Concerns
                    </h2>
                    <p className="text-gray-300 max-w-xl">
                      Any concerns relating to modern slavery within our supply
                      chain should be reported in confidence to our support
                      team.
                    </p>
                  </div>
                  <a
                    href="mailto:support@eazy-switch.com"
                    className="bg-[#8dae39] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-white hover:text-[#1a4d4d] transition-all"
                  >
                    <Mail className="w-5 h-5" /> support@eazy-switch.com
                  </a>
                </div>
              </div>

              {/* 8. Approval Section */}
              <div className="pt-10 border-t border-gray-100">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">8. Approval and Review</h3>
                  <p className="text-sm text-gray-500 max-w-3xl leading-relaxed">
                    This statement has been approved by the Board of Directors
                    of Eazy Switch Limited and is reviewed annually to ensure
                    ongoing alignment with the Modern Slavery Act 2015.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REUSABLE COMPANY INFO SECTION --- */}
      <CompanyInfo />
    </div>
  );
};

export default ModernSlaveryStatement;
