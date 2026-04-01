"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import {
  Activity,
  ShieldCheck,
  SearchCheck,
  Zap,
  ArrowRight,
  Construction,
  Clock,
  Layers,
  Settings,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ConnectionsPage = () => {
  const connectionServices = [
    {
      label: "New Site Setup",
      desc: "Coordinating gas, electric, and water feeds",
    },
    {
      label: "Capacity Expansions",
      desc: "Upgrading supply for business growth",
    },
    {
      label: "Meter Registration",
      desc: "Ensuring accurate data from day one",
    },
    {
      label: "Infrastructure",
      desc: "Liaising with network operators (DNO/IGT)",
    },
    {
      label: "Project Coordination",
      desc: "Timely energisation and supply setup",
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
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
              alt="Commercial Utility Infrastructure and Connections"
              fill
              priority
              className="object-cover opacity-30"
              sizes="100vw"
              quality={90}
            />
            {/* Refined Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d4d]/80 via-[#1a4d4d]/20 to-[#1a4d4d]" />
          </div>

          <Navbar />

          {/* 3. Content Container */}
          <div className="container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight"
            >
              Utility Connections <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Made Simple.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              From new site setups to infrastructure expansions, we handle the
              complexity of utility registrations. Guiding your project with{" "}
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
                Preventing <br />
                <span className="text-[#8dae39]">Project Delays.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Incorrect applications or registration errors can cause
                long-term supply problems and billing issues from day one.
                Properly managed connections ensure your business stays on
                track.
              </p>

              <div className="space-y-4">
                {[
                  "Eliminate Meter Registration Issues",
                  "Avoid Delays in Energisation",
                  "Prevent Incorrect Billing from Start",
                  "Ensure Long-term Supply Stability",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8dae39]/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#8dae39]" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connection Services Card */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Settings className="text-[#8dae39]" />
                Our Connection Focus
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {connectionServices.map((item, index) => (
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

      {/* Our Role Section - NO ROUNDED TOP */}
      <section className="py-20 bg-[#1a4d4d] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              How We Help.
            </h2>
            <p className="text-[#8dae39] font-medium text-lg">
              Independent Utility Consultancy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "Coordinate Applications",
                text: "Seamlessly managing paperwork with suppliers and network operators.",
              },
              {
                icon: ClipboardCheck,
                title: "Metering & Registration",
                text: "Expert guidance on professional meter setup and data accuracy.",
              },
              {
                icon: Clock,
                title: "Timely Supply Setup",
                text: "Ensuring your project proceeds smoothly with reliable utility activation.",
              },
            ].map((box, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-all group text-center"
              >
                <box.icon className="w-12 h-12 text-[#8dae39] mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-3 text-lg">
                  {box.title}
                </h4>
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
            Smooth Projects, Reliable Setup.
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Ready to secure your new utility connections? Let our consultants
            handle the technical coordination for your peace of mind.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#1a4d4d] text-white rounded-2xl font-black hover:bg-[#8dae39] hover:text-[#1a4d4d] transition-all group shadow-lg shadow-[#1a4d4d]/20"
          >
            Start Your Connection
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ConnectionsPage;
