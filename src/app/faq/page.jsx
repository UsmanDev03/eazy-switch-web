"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import {
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What does Eazy Switch do?",
      a: "We are an independent energy broker and consultant, specialising in electricity, gas, and water for businesses. Unlike typical brokers, we guide you throughout the entire contract term, from initial review to ongoing support. Our role is to simplify utilities, highlight key contract clauses, and ensure you get competitive rates.",
    },
    {
      q: "Is there a cost to use Eazy Switch?",
      a: "There is no upfront cost for our service. Brokerage fees are included in the contract and fully disclosed in your paperwork, so there are no surprises. Our typical fee ranges 0.5p – 1.5p per kWh, while charities and all places of worship benefit from a reduced flat rate of 0.1p per kWh.",
    },
    {
      q: "What is a Letter of Authority (LOA) and why is it needed?",
      a: "A Letter of Authority authorises us to liaise directly with your current suppliers to obtain accurate supply and meter information. This ensures that quotes and comparisons are precise. The LOA covers electricity, gas, and water, and it is especially helpful if you do not have a recent bill.",
    },
    {
      q: "Do I need a copy of my energy bill to start?",
      a: "While having your latest bill is helpful, it’s not mandatory. A clear photo of your meter and the full supply address is enough for us to accurately identify your supply and begin the process.",
    },
    {
      q: "Will switching suppliers interrupt my energy or water supply?",
      a: "No. The switch process is seamless. Your supply continues uninterrupted while we manage all the paperwork and liaise with suppliers on your behalf.",
    },
    {
      q: "How long does it take to get quotes and switch?",
      a: "Once we receive your information and LOA, we can often present competitive options within a few days. The exact timeline depends on your current contract and supplier response times, but our goal is to make the process as stress-free as possible.",
    },
    {
      q: "Can you help after my contract has started?",
      a: "Absolutely. At Eazy Switch, we provide ongoing support throughout the term of your contract. Whether it’s understanding invoices, reviewing usage, or exploring early renewal options, we’re here to guide you every step of the way.",
    },
    {
      q: "Can Eazy Switch support businesses of all sizes?",
      a: "Yes. We work with organisations of all sizes, including Retailers, Corporate Offices, Hotels, Property Managers, Charities, Places of Worship, and Industrial facilities.",
    },
    {
      q: "What makes Eazy Switch different from other brokers?",
      a: "Our service is transparent, compliant, and focused on your long-term benefit. We don’t just provide quotes — we explain contracts, highlight risks, and offer support beyond sign-up. Our goal is a stress-free experience for every client.",
    },
    {
      q: "How do I get started?",
      a: "It’s simple: 1. Share a recent bill or meter photo. 2. Sign a Letter of Authority (LOA). 3. We review the market, present your options, and continue supporting you throughout your contract.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#1a4d4d]">
      {/* Hero Section - Static (Matching About Page) */}
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
          <Navbar />

          {/* Exact Same Structure & Animations as your About Section */}
          <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight"
            >
              Common <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Questions & Answers.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              Everything you need to know about our transparent brokerage
              process. We guide your business with{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                clarity, expertise, and full transparency.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left Side: Question List */}
            <div className="w-full lg:w-5/12 space-y-3">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-[#8dae39]/10 px-4 py-2 rounded-full mb-4 text-[#1a4d4d] font-bold text-sm uppercase tracking-widest">
                  <HelpCircle className="w-4 h-4 text-[#8dae39]" /> Knowledge
                  Base
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#1a4d4d]">
                  Browse <span className="text-[#8b5aa6]">Questions.</span>
                </h2>
              </div>

              {faqs.map((faq, index) => (
                <div key={index} className="flex flex-col">
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border-2 flex items-center justify-between group ${
                      activeIndex === index
                        ? "border-[#8dae39] bg-[#8dae39]/5 shadow-sm"
                        : "border-gray-100 bg-gray-50/50 hover:border-gray-200"
                    }`}
                  >
                    <span
                      className={`font-bold transition-colors ${
                        activeIndex === index
                          ? "text-[#1a4d4d]"
                          : "text-gray-500"
                      }`}
                    >
                      {faq.q}
                    </span>
                    {/* Desktop Arrow */}
                    <ArrowRight
                      className={`hidden lg:block w-5 h-5 transition-transform duration-300 ${
                        activeIndex === index
                          ? "translate-x-0 opacity-100 text-[#8dae39]"
                          : "-translate-x-2 opacity-0 text-gray-300"
                      }`}
                    />
                    {/* Mobile Plus/Minus Icon */}
                    <div className="lg:hidden">
                      {activeIndex === index ? (
                        <Minus className="w-5 h-5 text-[#8dae39]" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Mobile Answer (Only visible on small screens) */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden overflow-hidden"
                      >
                        <div className="p-6 bg-[#1a4d4d] text-white rounded-2xl mt-2 mb-4 shadow-lg">
                          <p className="text-gray-200 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Side: Answer Box (Hidden on Mobile) */}
            <div className="hidden lg:block w-full lg:w-7/12 relative">
              <div className="lg:sticky lg:top-32 lg:h-fit">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex || "default"}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#1a4d4d] rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-center min-h-[450px]"
                  >
                    <Zap className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />

                    {activeIndex !== null ? (
                      <div className="relative z-10">
                        <div className="w-12 h-1 text-[#8dae39] bg-[#8dae39] mb-8 rounded-full"></div>
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
                          {faqs[activeIndex].q}
                        </h3>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                          {faqs[activeIndex].a}
                        </p>
                        <div className="mt-10 flex items-center gap-4 text-[#8dae39] font-bold">
                          <ShieldCheck className="w-6 h-6" />
                          <span>Verified Response</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center relative z-10">
                        <HelpCircle className="w-16 h-16 text-[#8dae39] mx-auto mb-6 opacity-50" />
                        <h3 className="text-2xl font-bold text-white mb-4">
                          Select a question
                        </h3>
                        <p className="text-gray-400">
                          Click on any question to see details.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & CTA Section */}
      <section className="pb-16 container mx-auto px-6">
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

export default FAQPage;
