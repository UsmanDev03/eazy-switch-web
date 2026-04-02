"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import {
  Zap,
  BarChart3,
  Leaf,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Coins,
  Globe,
  Sun, // Added for Solar context
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const SolarSolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#1a4d4d] font-sans selection:bg-[#8dae39] selection:text-white">
      {/* 1. HERO SECTION */}
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0 bg-[#1a4d4d]">
            <Image
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2069&auto=format&fit=crop"
              alt="Commercial Solar Panels"
              fill
              priority
              className="object-cover opacity-30"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d4d]/80 via-[#1a4d4d]/20 to-[#1a4d4d]" />
          </div>

          <Navbar />

          <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight"
            >
              Commercial <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Solar Solutions.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              Power your business and protect your future. We provide{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                reliable, cost-effective on-site renewable power
              </span>{" "}
              to help UK businesses gain control over energy spend.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. SOLAR INVESTMENT SECTION */}
      <section className="py-16 bg-[#f9fbf2]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
                Solar is an Investment That Works for You
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In today’s volatile energy market, electricity costs are unpredictable. 
                  Installing solar panels gives your business greater control over energy spend, 
                  providing a reliable source of clean power.
                </p>
                <p>
                  Supported by a comprehensive maintenance package and a 25-year panel warranty, 
                  a commercial PV installation is a secure, long-term investment that lowers 
                  your carbon footprint and enhances sustainability credentials.
                </p>
                <p className="font-bold text-[#1a4d4d]">
                  Contact our team today to see if solar is the right fit for your business.
                </p>
              </div>
            </div>

            <div className="bg-[#1a4d4d] p-8 rounded-2xl text-white shadow-xl border-l-4 border-[#8dae39]">
              <h3 className="text-xl font-bold mb-6 text-[#8dae39]">
                Commercial Solar Made Accessible
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start group">
                  <Coins className="w-6 h-6 text-[#8dae39] shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold block text-base">Capital Allowances</span> 
                    Claim up to £1 million per year on qualifying assets like solar installations, reducing taxable profits.
                  </p>
                </li>
                <li className="flex gap-4 items-start group">
                  <Globe className="w-6 h-6 text-[#8dae39] shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold block text-base">Regional Grants</span> 
                    Explore local government funding schemes to supplement your investment.
                  </p>
                </li>
                <li className="flex gap-4 items-start group">
                  <BarChart3 className="w-6 h-6 text-[#8dae39] shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold block text-base">Flexible Payment Options</span> 
                    Choose between CAPEX or third-party finance arrangements for added flexibility.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PROCESS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold mb-4">Our Seamless Solar Process</h2>
            <div className="w-20 h-1.5 bg-[#8dae39]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "1",
                t: "Tailored Quote",
                d: "A bespoke proposal outlining costs aligned with your business requirements.",
              },
              {
                n: "2",
                t: "Feasibility Assessment",
                d: "Our team evaluates your site to confirm suitability before moving forward.",
              },
              {
                n: "3",
                t: "Project Management",
                d: "We manage everything from planning permissions to site coordination.",
              },
              {
                n: "4",
                t: "Professional Installation",
                d: "Our experienced team installs your system, delivering clean energy straight to your business.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-[#8dae39] hover:shadow-lg transition-all group"
              >
                <span className="text-3xl font-black text-[#8dae39]/30 group-hover:text-[#8dae39] transition-colors mb-4 block">
                  {item.n}.
                </span>
                <h4 className="font-bold text-lg mb-2">{item.t}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE SOLAR WITH EAZY SWITCH */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold">Why Choose Eazy Switch?</h2>
              <p className="text-gray-600 italic -mt-4">
                We simplify the journey to solar with full advisory support:
              </p>
              <div className="space-y-4">
                {[
                  "Custom Solutions – Maximise energy output for your specific site.",
                  "Peace of Mind – 25-year panel warranty included as standard.",
                  "Maintenance & Support – Optional packages for ongoing servicing.",
                  "Independent Guidance – We coordinate with suppliers on your behalf.",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#8dae39] shrink-0" />
                    <span className="text-sm font-semibold">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a4d4d] text-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center">
              <Sun className="absolute top-[-20px] right-[-20px] w-32 h-32 text-white/5 rotate-12" />
              <h4 className="text-2xl font-bold mb-4 text-[#8dae39]">
                Sustainable Energy, Stronger Business
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Solar PV systems produce clean electricity with zero direct emissions, 
                helping your business meet net zero targets and demonstrate sustainability leadership.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Integrating solar provides a complete toolkit to lower costs, secure 
                your energy future, and strengthen your brand with stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-16 container mx-auto px-6">
        <div className="bg-[#1a4d4d] rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Zap className="w-40 h-40 text-white" />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black text-white mb-6 relative z-10 italic leading-tight max-w-4xl mx-auto"
          >
            "We act as your independent energy advisor to make your solar transition simple and effective."
          </motion.h3>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#8dae39] text-[#1a4d4d] font-black text-xl rounded-2xl flex items-center gap-3 shadow-lg hover:bg-white transition-all cursor-pointer"
              >
                Request a Solar Quote <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>

            <div className="flex items-center gap-3 text-white bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
              <ShieldCheck className="w-8 h-8 text-[#8dae39]" />
              <div className="text-left">
                <span className="block font-bold tracking-tight text-white">
                  Independent Solar Advice
                </span>
                <span className="text-xs text-gray-400">
                  Secure & Professional Installation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarSolutionsPage;