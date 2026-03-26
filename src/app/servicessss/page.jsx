"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import {
  Zap,
  Flame,
  Droplets,
  Sun,
  Activity,
  LineChart,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  TrendingDown,
  Scale,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Common Header Style
  const sectionHeaderStyle =
    "text-3xl md:text-4xl lg:text-5xl font-black text-[#1a4d4d] tracking-tight";

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const services = [
    {
      title: "Business Electricity",
      description:
        "We don't just find you a price; we find you the right strategy. From fixed-term contracts that protect you from market volatility to green energy solutions.",
      icon: Zap,
      color: "#8dae39",
      detailedFeatures: [
        {
          head: "Fixed-Term Contracts",
          desc: "Lock in rates for 1-5 years for total budget certainty.",
        },
        {
          head: "Renewable Energy",
          desc: "100% REGO-backed green power for sustainable brands.",
        },
        {
          head: "HH Metering",
          desc: "Half-Hourly data analysis for large-scale industrial users.",
        },
      ],
    },
    {
      title: "Business Gas",
      description:
        "The gas market is unpredictable. Our specialists monitor wholesale price fluctuations daily to ensure you strike when the market is at its lowest.",
      icon: Flame,
      color: "#8b5aa6",
      detailedFeatures: [
        {
          head: "Strategic Procurement",
          desc: "Buying at the right time to secure the best possible rates.",
        },
        {
          head: "Clause Audit",
          desc: "Reviewing the fine print to protect you from hidden charges.",
        },
        {
          head: "Usage Analysis",
          desc: "Identifying waste and optimizing consumption patterns.",
        },
      ],
    },
    {
      title: "Water Services",
      description:
        "Since deregulation, businesses can now switch water suppliers. We identify billing errors and implement leak detection systems.",
      icon: Droplets,
      color: "#3b82f6",
      detailedFeatures: [
        {
          head: "Billing Audits",
          desc: "Recovering overpayments from historical billing errors.",
        },
        {
          head: "Leak Detection",
          desc: "Smart monitoring to stop wasted water and rising costs.",
        },
        {
          head: "Consolidated Billing",
          desc: "One simple bill for all your business locations.",
        },
      ],
    },
    {
      title: "Solar Energy",
      description:
        "Take control of your own energy generation. We manage panel installation and battery storage to maximize your business ROI.",
      icon: Sun,
      color: "#f59e0b",
      detailedFeatures: [
        {
          head: "Panel Installation",
          desc: "Tier-1 PV modules tailored to your roof capacity.",
        },
        {
          head: "Battery Storage",
          desc: "Store excess power for use during peak tariff hours.",
        },
        {
          head: "Smart Export",
          desc: "Sell your excess generated power back to the grid.",
        },
      ],
    },
    {
      title: "New Connections",
      description:
        "Moving to a new site? We manage the technical infrastructure, meter installations, and capacity upgrades seamlessly.",
      icon: Activity,
      color: "#1a4d4d",
      detailedFeatures: [
        {
          head: "Meter Installations",
          desc: "Fast-tracked gas and electric meter fit-outs.",
        },
        {
          head: "Capacity Upgrades",
          desc: "Ensuring your site has the power required for growth.",
        },
        {
          head: "DNO Liaison",
          desc: "We handle the complex paperwork with local networks.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#1a4d4d]">
      <Navbar />

      {/* Hero Section */}
      {/* Hero Section - Height matched with About Page */}
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
              Our Utility <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Expertise & Services.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              At Eazy Switch, we guide your business through energy decisions
              with{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                clarity, expertise, and full transparency.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Navigation */}
    <section className="container mx-auto px-4 py-10 relative z-20">
  <div className="flex flex-wrap justify-center gap-3 md:gap-4 bg-white p-3 rounded-3xl shadow-2xl border border-gray-200 max-w-5xl mx-auto">
    {services.map((service, index) => (
      <button
        key={index}
        onClick={() => setActiveTab(index)}
        className={`flex items-center gap-3 px-6 py-3.5 md:px-8 md:py-4 rounded-2xl transition-all font-black text-[12px] md:text-sm uppercase tracking-wider ${
          activeTab === index
            ? "bg-[#1a4d4d] text-white shadow-lg scale-105"
            : "bg-gray-100 text-[#1a4d4d]/70 hover:bg-gray-200 hover:text-[#1a4d4d]"
        }`}
      >
        {React.createElement(service.icon, {
          className: `w-5 h-5 ${activeTab === index ? "text-[#8dae39]" : "text-[#1a4d4d]"}`,
        })}
        <span className="hidden sm:inline">{service.title}</span>
        <span className="sm:hidden">
          {service.title.split(" ")[1] || service.title}
        </span>
      </button>
    ))}
  </div>
</section>

      {/* Main Service Content */}
      <section className="py-12 md:py-16 container mx-auto px-6 max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h2 className={sectionHeaderStyle}>
                  {services[activeTab].title}
                </h2>
                <div className="h-1.5 w-16 bg-[#8dae39] rounded-full" />
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {services[activeTab].description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {services[activeTab].detailedFeatures.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#8dae39] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[#1a4d4d] text-sm">
                        {item.head}
                      </h4>
                      <p className="text-gray-500 text-xs mt-1 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a4d4d] text-white rounded-xl font-bold text-sm hover:bg-[#8dae39] hover:text-[#1a4d4d] transition-all group"
              >
                Get Expert Advice{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-5 hidden lg:flex justify-center">
              <div
                className="w-full max-w-[350px] aspect-square rounded-[3rem] flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: `${services[activeTab].color}10` }}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="bg-white p-12 rounded-[2.5rem] shadow-xl z-10 border border-gray-50"
                >
                  {React.createElement(services[activeTab].icon, {
                    className: "w-24 h-24",
                    style: { color: services[activeTab].color },
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Advocacy Section */}
      <section className="py-16 bg-gray-50/50 border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-5 text-center lg:text-left">
              <h2 className={sectionHeaderStyle}>
                More Than a Broker. <br />
                <span className="text-[#8dae39]">Your Utility Advocate.</span>
              </h2>
              <p className="text-gray-600 italic text-sm">
                "Our commitment doesn’t end at the contract."
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-xl border border-gray-100 text-left">
                  <Scale className="w-5 h-5 text-[#1a4d4d] mb-2" />
                  <h4 className="font-bold text-xs uppercase">Ethical Fees</h4>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 text-left">
                  <TrendingDown className="w-5 h-5 text-[#1a4d4d] mb-2" />
                  <h4 className="font-bold text-xs uppercase">Intelligence</h4>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full bg-[#1a4d4d] rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl">
              <h3 className="text-xl font-bold mb-5">Expert Consultancy</h3>
              <ul className="space-y-3 relative z-10">
                {[
                  "Billing Dispute Resolution",
                  "LOA Management",
                  "Contract Audits",
                  "Site Work Coordination",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#8dae39] shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Charity Section */}
      <section className="py-16 container mx-auto px-6 max-w-6xl">
        <div className="bg-[#8dae39]/10 rounded-[2.5rem] p-8 md:p-12 border border-[#8dae39]/20 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <div className="inline-block bg-[#8dae39] px-3 py-1 rounded-full text-[#1a4d4d] font-bold text-[9px] uppercase tracking-widest">
              Community First
            </div>
            <h2 className={sectionHeaderStyle}>Charity Rates.</h2>
            <p className="text-base text-gray-700">
              Reduced flat fee of{" "}
              <span className="text-[#1a4d4d] font-black underline decoration-[#8dae39]">
                0.1p per kWh
              </span>{" "}
              for non-profits.
            </p>
            <Link href="/contact" className="inline-block mt-2">
              <button className="px-8 py-3 bg-[#1a4d4d] text-white font-bold rounded-xl text-sm hover:bg-[#8dae39] hover:text-[#1a4d4d] transition-all">
                Register Your Charity
              </button>
            </Link>
          </div>
          <div className="w-40 h-40 shrink-0 bg-white flex flex-col items-center justify-center rounded-full shadow-lg border-[6px] border-[#8dae39]">
            <p className="text-[#8dae39] font-black text-4xl">0.1p</p>
            <p className="text-[#1a4d4d] font-bold text-[9px] uppercase mt-1">
              Flat Fee
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
