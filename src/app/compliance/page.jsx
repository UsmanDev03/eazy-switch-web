"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import {
  ShieldCheck,
  Scale,
  Search,
  Lock,
  CheckCircle,
  ArrowRight,
  Gavel,
  FileText,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const CompliancePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const standards = [
    {
      icon: Scale,
      title: "Independent Consultancy",
      desc: "We are not tied to any specific energy supplier. Our advice is completely neutral to ensure you receive the best possible market rates.",
      color: "#8dae39",
    },
    {
      icon: Search,
      title: "Market Transparency",
      desc: "We conduct comprehensive market analysis. Our reporting is clear and transparent, allowing you to make informed decisions without any pressure.",
      color: "#8b5aa6",
    },
    {
      icon: Gavel,
      title: "Regulatory Adherence",
      desc: "We strictly follow all legal protocols and marketing regulations within the UK utility market to maintain the highest professional standards.",
      color: "#1a4d4d",
    },
    {
      icon: Lock,
      title: "Data Integrity",
      desc: "Your utility data is safe with us. We utilize 256-bit encryption and strictly adhere to UK GDPR regulations for maximum security.",
      color: "#8dae39",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#1a4d4d]">
      {/* 1. Hero Section - Animated & Branded */}
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
          <Navbar />

          <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight"
            >
              Our Compliance <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                & Standards.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              Eazy Switch follows strict guidelines to ensure UK businesses
              receive honest utility reviews. We operate with{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                clarity, expertise, and full transparency.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Main Standards Grid */}
      <section className="pt-12 container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((item, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50 group hover:border-[#8dae39] transition-all"
            >
              <div
                className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-transform group-hover:rotate-6 shadow-lg"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="w-8 h-8" style={{ color: item.color }} />
              </div>
              <h3 className="text-2xl font-black mb-4">{item.title}</h3>
              <p className="text-gray-500 font-bold leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3. Operational Principles Checklist Box */}
        <motion.div
          {...fadeInUp}
          className="mt-16 bg-[#1a4d4d]/5 rounded-[3rem] p-8 md:p-16 border border-[#1a4d4d]/10"
        >
          <h2 className="text-3xl font-black mb-10 text-center">
            Operational Compliance
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              {[
                "Independent Consultant status (No direct supplier ties).",
                "Emphasis on data review rather than savings promises.",
                "Authoritative and legally vetted professional language.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle className="text-[#8dae39] w-6 h-6 shrink-0 mt-1" />
                  <span className="text-lg font-extrabold text-[#1a4d4d]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                "Strict adherence to UK GDPR data handling protocols.",
                "Tailored guidance for Gas, Electricity, and Water.",
                "Transparent reporting on market insights.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle className="text-[#8b5aa6] w-6 h-6 shrink-0 mt-1" />
                  <span className="text-lg font-extrabold text-[#1a4d4d]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Final CTA Section - Modern & Premium */}
      <section className="py-16 container mx-auto px-6">
        <div className="bg-[#1a4d4d] rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <HelpCircle className="w-40 h-40 text-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Our dedicated account managers are ready to talk through your
            specific business needs.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
            {/* Link ko simple rakhen, legacyBehavior aur passHref hata dein */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#8dae39] text-[#1a4d4d] font-black text-xl rounded-2xl flex items-center gap-3 shadow-lg hover:bg-white transition-all cursor-pointer"
              >
                Contact Support <MessageCircle className="w-6 h-6" />
              </motion.button>
            </Link>

            <div className="flex items-center gap-3 text-white">
              <ShieldCheck className="w-8 h-8 text-[#8dae39]" />
              <span className="font-bold tracking-tight">
                Ethical & Transparent Advice
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;
