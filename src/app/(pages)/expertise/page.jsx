"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/layouts/navbar";
import {
  Zap,
  Flame,
  Droplets,
  Activity,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  Scale,
  ShieldCheck,
  Building2,
  HeartHandshake,
  Sun,
  BatteryCharging,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ExpertisePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Common Header Style
  const sectionHeaderStyle =
    "text-3xl md:text-4xl lg:text-5xl font-black text-[#1a4d4d] tracking-tight";

  const services = [
    {
      title: "Electricity",
      description:
        "We act as your independent energy consultant, providing an expert review of your bills and non-commodity charges to ensure complete transparency.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
      icon: Zap,
      color: "#8dae39",
      detailedFeatures: [
        {
          head: "Bill Review",
          desc: "Comprehensive audit of historical and current electricity invoices.",
        },
        {
          head: "Non-Commodity Charges",
          desc: "Deep dive into DUoS, TNUoS, and other pass-through costs.",
        },
        {
          head: "Contract Guidance",
          desc: "Independent advice on fixed vs. flexible procurement strategies.",
        },
      ],
    },
    {
      title: "Gas",
      // GAS IMAGE CHANGED BELOW
      description:
        "The gas market is complex. We provide professional guidance on all applicable charges and proactive contract management for your business.",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
      icon: Flame,
      color: "#8b5aa6",
      detailedFeatures: [
        {
          head: "Charge Analysis",
          desc: "Full breakdown of transportation and metering costs.",
        },
        {
          head: "Strategic Management",
          desc: "Ongoing support to manage renewals before price spikes.",
        },
        {
          head: "Market Intelligence",
          desc: "Daily monitoring of wholesale trends to protect your budget.",
        },
      ],
    },
    {
      title: "Water",
      description:
        "Since deregulation, we help businesses review tariffs, usage patterns, and industry-specific fees to optimize their water expenditure.",
      image:
        "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800",
      icon: Droplets,
      color: "#3b82f6",
      detailedFeatures: [
        {
          head: "Tariff Review",
          desc: "Ensuring your business is on the most cost-effective retail tariff.",
        },
        {
          head: "Usage Optimization",
          desc: "Identifying inefficiencies and high-consumption areas.",
        },
        {
          head: "Industry Fees",
          desc: "Reviewing surface water drainage and trade effluent charges.",
        },
      ],
    },
    {
      title: "Connections",
      description:
        "Moving or expanding? We provide end-to-end advice and support for new utility connections and infrastructure upgrades.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
      icon: Activity,
      color: "#1a4d4d",
      detailedFeatures: [
        {
          head: "Technical Advice",
          desc: "Expert guidance on required capacity and meter types.",
        },
        {
          head: "New Site Support",
          desc: "Managing the coordination between developers and networks.",
        },
        {
          head: "Site Upgrades",
          desc: "Smooth handling of meter removals or capacity increases.",
        },
      ],
    },
    {
      title: "Commercial Solar PV",
      description:
        "Empowering UK businesses with on-site renewable generation. We provide strategic energy infrastructure and long-term cost stability.",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop", 
      icon: Sun,
      color: "#eab308",
      detailedFeatures: [
        {
          head: "Custom Installations",
          desc: "Bespoke on-site generation tailored to your building's capacity.",
        },
        {
          head: "Warranty & Support",
          desc: "Long-term performance with 25-year panel warranties.",
        },
        {
          head: "Financial ROI",
          desc: "Guidance on Capital Allowances, grants, and flexible finance.",
        },
      ],
    },
    {
      title: "EV Charging Infrastructure",
      description:
        "Scalable charging solutions for staff, customers, and fleet vehicles. Future-proof your business premises.",
      image:
        "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format",
      icon: BatteryCharging, 
      color: "#22c55e", 
      detailedFeatures: [
        {
          head: "Smart Charging",
          desc: "Advanced software for monitoring usage and managing load.",
        },
        {
          head: "Universal Access",
          desc: "Scalable solutions for staff, customers, and visitors.",
        },
        {
          head: "Grant Assistance",
          desc: "Help with OZEV grants and government incentives.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#1a4d4d]">
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0 bg-[#1a4d4d]">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
              alt="Business Utility Data Analysis Expertise"
              fill
              priority
              className="object-cover opacity-30"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d4d]/80 via-[#1a4d4d]/20 to-[#1a4d4d]" />
          </div>

          <Navbar />

          <div className="container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight"
            >
              Our Utility <br />
              <span className="text-[#8dae39]">Expertise.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              Comprehensive Utility Management for Businesses. At Eazy Switch,
              we act as your{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                independent energy consultant
              </span>{" "}
              providing professional guidance.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Building2 className="w-8 h-8 text-[#8dae39] mx-auto mb-3" />
              <h3 className="font-black text-lg">All Business Sizes</h3>
              <p className="text-gray-500 text-sm">
                From single sites to complex multi-site operations.
              </p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-gray-100 py-6 md:py-0">
              <ShieldCheck className="w-8 h-8 text-[#8b5aa6] mx-auto mb-3" />
              <h3 className="font-black text-lg">Independent Advice</h3>
              <p className="text-gray-500 text-sm">
                Actionable guidance on contracts and billing issues.
              </p>
            </div>
            <div className="space-y-2">
              <HeartHandshake className="w-8 h-8 text-[#1a4d4d] mx-auto mb-3" />
              <h3 className="font-black text-lg">Ongoing Support</h3>
              <p className="text-gray-500 text-sm">
                Consistent liaison with suppliers on your behalf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Navigation */}
      <section className="container mx-auto px-4 py-10 relative z-20">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 bg-white p-3 rounded-3xl shadow-2xl border border-gray-200 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-3 px-6 py-3.5 md:px-8 md:py-4 rounded-2xl transition-all font-black text-[12px] md:text-sm uppercase tracking-wider ${
                activeTab === index
                  ? "bg-[#1a4d4d] text-white shadow-lg scale-105"
                  : "bg-gray-100 text-[#1a4d4d]/70 hover:bg-gray-200"
              }`}
            >
              {React.createElement(service.icon, {
                className: `w-5 h-5 ${activeTab === index ? "text-[#8dae39]" : "text-[#1a4d4d]"}`,
              })}
              <span>{service.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Main Expertise Content */}
      <section className="py-12 md:py-16 container mx-auto px-6 max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className={sectionHeaderStyle}>
                  {services[activeTab].title} Guidance
                </h2>
                <div className="h-1.5 w-16 bg-[#8dae39] rounded-full" />
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  {services[activeTab].description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services[activeTab].detailedFeatures.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-[#8dae39]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#8dae39] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[#1a4d4d] text-sm uppercase tracking-wide">
                        {item.head}
                      </h4>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a4d4d] text-white rounded-xl font-bold text-sm hover:bg-[#8dae39] hover:text-[#1a4d4d] transition-all group shadow-xl shadow-[#1a4d4d]/10"
              >
                Request a Review{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-5 hidden lg:flex justify-center">
              <div
                className="w-full max-w-[420px] aspect-square rounded-[4rem] flex items-center justify-center relative overflow-hidden shadow-2xl"
                style={{ backgroundColor: `${services[activeTab].color}15` }}
              >
                {/* Background Dotted Pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, ${services[activeTab].color} 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-[85%] h-[85%] z-10"
                >
                  {/* IMAGE DISPLAY INSTEAD OF BIG ICON */}
                  <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-gray-200">
                    <Image
                      src={services[activeTab].image}
                      alt={services[activeTab].title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>

                  {/* Small floating icon overlay */}
                  <div className="absolute -bottom-2 -right-2 p-5 rounded-2xl bg-white shadow-xl z-20 border border-gray-100">
                    {React.createElement(services[activeTab].icon, {
                      className: "w-8 h-8",
                      style: { color: services[activeTab].color },
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Advocate Section */}
      <section className="py-20 bg-[#1a4d4d] text-white overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Left Column: Heading and Main Description */}
            <div className="lg:w-1/2 space-y-6 lg:sticky lg:top-24">
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                More Than a Broker. <br />
                <span className="text-[#8dae39]">
                  Your Energy Procurement Partner.
                </span>
              </h2>
              <p className="text-gray-300 text-lg font-light leading-relaxed">
                We don’t stop at securing your contract. Our commitment
                continues as we actively manage your energy position—analysing
                usage, identifying savings opportunities, and resolving
                issues—while continuously reviewing your accounts and addressing
                billing discrepancies.
              </p>
              <p className="text-gray-300 text-lg font-light leading-relaxed border-l-2 border-[#8dae39] pl-4">
                This proactive approach ensures your business benefits from the
                most efficient and cost-effective energy strategy, so you can
                focus on running your business.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
                  <Scale className="w-5 h-5 text-[#8dae39]" />
                  <span className="font-bold text-sm uppercase tracking-widest">
                    Ethical Fees
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
                  <TrendingDown className="w-5 h-5 text-[#8dae39]" />
                  <span className="font-bold text-sm uppercase tracking-widest">
                    Market Intel
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: The 4 Detailed Boxes */}
            <div className="lg:w-1/2 w-full grid grid-cols-1 gap-4">
              {[
                {
                  title: "Billing Dispute Resolution",
                  desc: "We identify and resolve billing discrepancies on your behalf, working with suppliers to investigate issues and ensure any inaccuracies are corrected—helping protect your business from unnecessary costs.",
                },
                {
                  title: "Account & Contract Management",
                  desc: "We manage the ongoing administration of your energy accounts and contracts, handling supplier communications, documentation, and key contract processes to ensure everything runs smoothly and efficiently.",
                },
                {
                  title: "Contract Audits & Reviews",
                  desc: "We regularly review your energy contracts to assess competitiveness and suitability, highlighting opportunities to improve terms, pricing, and overall structure in line with your business needs.",
                },
                {
                  title: "Energy Usage & Cost Optimisation",
                  desc: "We analyse your energy usage to identify inefficiencies and opportunities for improvement, supporting you in making informed decisions that can help reduce costs and improve energy efficiency.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/5 flex items-start gap-4 hover:bg-white/15 transition-all duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#8dae39] shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Charity Section */}
      <section className="py-16 container mx-auto px-6 max-w-6xl">
        <div className="bg-[#8dae39]/10 rounded-[3rem] p-10 md:p-16 border border-[#8dae39]/20 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          <div className="flex-1 space-y-6 text-center lg:text-left z-10">
            <div className="inline-block bg-[#8dae39] px-4 py-1.5 rounded-full text-[#1a4d4d] font-black text-[10px] uppercase tracking-[0.2em]">
              Community Commitment
            </div>
            <h2 className={sectionHeaderStyle}>Special Charity Rates.</h2>
            <p className="text-lg text-gray-700 max-w-xl">
              Reduced flat fee of{" "}
              <span className="text-[#1a4d4d] font-black underline underline-offset-4 decoration-[#8dae39] decoration-4">
                0.1p per kWh
              </span>{" "}
              for non-profits and registered charities. We're here to help you
              do more.
            </p>
            <Link href="/contact" className="inline-block pt-2">
              <button className="px-10 py-4 bg-[#1a4d4d] text-white font-black rounded-xl text-sm hover:bg-[#8dae39] hover:text-[#1a4d4d] transition-all shadow-xl">
                Register Your Charity
              </button>
            </Link>
          </div>

          <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 bg-white flex flex-col items-center justify-center rounded-full shadow-2xl border-[8px] border-[#8dae39] z-10 relative">
            <p className="text-[#8dae39] font-black text-5xl md:text-6xl">
              0.1p
            </p>
            <p className="text-[#1a4d4d] font-black text-[11px] uppercase mt-2 tracking-widest">
              Flat Fee
            </p>
            {/* Sparkle effect */}
            <div className="absolute -top-2 -right-2 bg-[#8dae39] p-2 rounded-full text-white">
              <Zap className="w-4 h-4 fill-current" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;
