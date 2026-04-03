"use client";
import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import {
  Zap,
  Car,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Settings,
  Lightbulb,
  Handshake,
  LayoutDashboard,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const EVChargingPage = () => {
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
              src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop"
              alt="EV Charging Infrastructure"
              fill
              priority
              className="object-cover opacity-25"
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
              EV Charging <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Solutions for Business.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              Future-proof your infrastructure with scalable charging solutions. 
              We help you{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                support staff, attract customers, and drive sustainability.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. INFRASTRUCTURE STRATEGY */}
      <section className="py-16 bg-[#f9fbf2]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
                Future-Proof Your Business Infrastructure
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Planning for the growing number of electric vehicles ensures your business remains 
                  competitive. Our scalable EV charging solutions provide a seamless experience 
                  for staff, customers, and visitors.
                </p>
                <p>
                  By implementing flexible EV solutions, you can meet your sustainability objectives 
                  while enhancing operational efficiency. With strategic planning, your EV 
                  infrastructure can also generate additional revenue and build brand loyalty.
                </p>
                <p className="font-bold text-[#1a4d4d]">
                  Talk to our specialists today to design a charging strategy that fits your site.
                </p>
              </div>
            </div>

            <div className="bg-[#1a4d4d] p-8 rounded-2xl text-white shadow-xl border-l-4 border-[#8dae39]">
              <h3 className="text-xl font-bold mb-6 text-[#8dae39]">
                Strategic EV Integration
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start group">
                  <Car className="w-6 h-6 text-[#8dae39] shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold block text-base">Attract & Retain</span> 
                    Provide essential charging facilities for employees and visitors who drive EVs.
                  </p>
                </li>
                <li className="flex gap-4 items-start group">
                  <LayoutDashboard className="w-6 h-6 text-[#8dae39] shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold block text-base">Revenue Opportunities</span> 
                    Optionally monetize your charging points through public or semi-public usage.
                  </p>
                </li>
                <li className="flex gap-4 items-start group">
                  <Zap className="w-6 h-6 text-[#8dae39] shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold block text-base">Smart Load Management</span> 
                    Optimize power usage across multiple chargers without overloading your site supply.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EV SERVICES PROCESS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold mb-4">Our EV Charging Services</h2>
            <div className="w-20 h-1.5 bg-[#8dae39]"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                i: Lightbulb,
                t: "Design",
                d: "Tailored solutions crafted by experts to match your specific business and site needs.",
              },
              {
                i: Zap,
                t: "Installation",
                d: "Professional installation of smart chargers and all necessary supporting infrastructure.",
              },
              {
                i: Handshake,
                t: "Consultancy",
                d: "We assess your requirements to recommend the most effective and scalable solutions.",
              },
              {
                i: Settings,
                t: "Maintenance",
                d: "Ongoing servicing and support to keep your EV chargers fully operational and reliable.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-[#8dae39] hover:shadow-lg transition-all text-center"
              >
                <item.i className="w-12 h-12 text-[#8dae39] mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">{item.t}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE EV WITH EAZY SWITCH */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold">Transition Made Simple</h2>
              <p className="text-gray-600 italic -mt-4">
                We coordinate the entire journey from design to power-up:
              </p>
              <div className="space-y-4">
                {[
                  "Scalable Solutions – Start small and expand as your fleet grows.",
                  "Independent Advice – We work for you, not the charger manufacturers.",
                  "Seamless Management – We coordinate with suppliers and installers on your behalf.",
                  "Reliable Support – Ongoing maintenance to ensure zero downtime for users.",
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
              <Car className="absolute top-[-20px] right-[-20px] w-32 h-32 text-white/5 rotate-12" />
              <h4 className="text-2xl font-bold mb-4 text-[#8dae39]">
                Drive Sustainability, Boost Loyalty
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                By offering EV charging, you demonstrate sustainability leadership and 
                support the UK's transition to zero-emission transport.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Integrating charging points into your energy strategy enhances your 
                operational efficiency and strengthens your brand with customers and investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL ADVISOR CTA */}
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
            "We act as your independent energy advisor to make your EV transition simple and effective."
          </motion.h3>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#8dae39] text-[#1a4d4d] font-black text-xl rounded-2xl flex items-center gap-3 shadow-lg hover:bg-white transition-all cursor-pointer"
              >
                Get an EV Charging Quote <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>

            <div className="flex items-center gap-3 text-white bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
              <ShieldCheck className="w-8 h-8 text-[#8dae39]" />
              <div className="text-left">
                <span className="block font-bold tracking-tight text-white">
                  Future-Ready Infrastructure
                </span>
                <span className="text-xs text-gray-400">
                  Professional Design & Consultancy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EVChargingPage;