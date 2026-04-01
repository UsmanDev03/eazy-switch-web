"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import { CompanyInfo } from "@/components/company-info"; // Import added
import {
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Gavel,
  Mail,
  Scale,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfa] text-[#1a4d4d] font-sans">
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">

          <div className="absolute inset-0 z-0 bg-[#1a4d4d]">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1500"
              alt="Eazy Switch Terms and Conditions"
              fill
              priority
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d4d]/90 via-[#1a4d4d]/40 to-[#1a4d4d]" />
          </div>

          {/* 2. Navbar */}
          <Navbar />

          <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight"
            >
              Eazy Switch Limited <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Terms & Conditions.
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
              </span>
              . These terms govern the use of our services with{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                full transparency, expertise, and professional clarity.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* FULL CONTENT - Responsive Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-14 lg:p-20 space-y-10 md:space-y-12 text-gray-600 leading-relaxed">
            {/* Grid layout for larger screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-12">
              {/* 1. Introduction */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] mb-4 flex items-center gap-2">
                  <FileText className="text-[#8dae39] w-5 h-5 md:w-6 md:h-6" />{" "}
                  1. Introduction
                </h2>
                <p className="text-sm md:text-base">
                  These Terms and Conditions (“Terms”) govern the use of
                  services provided by Eazy Switch Limited (“we”, “us”, “our”).
                  By accessing our website or engaging with our services, you
                  confirm that you have read, understood, and agree to be bound
                  by these Terms. If you do not agree, you must not use our
                  services.
                </p>
              </section>

              {/* 2. Our Role and Services */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] mb-4">
                  2. Our Role and Services
                </h2>
                <p className="text-sm md:text-base">
                  Eazy Switch Limited operates as an independent energy
                  consultancy and procurement specialist, assisting businesses
                  in sourcing and managing energy contracts. Our role is to act
                  as an intermediary between clients and energy suppliers. In
                  some instances, we may also work with third-party energy
                  aggregators to obtain pricing and facilitate contract
                  arrangements.
                </p>
              </section>

              {/* 3. Contractual Relationships */}
              <section className="lg:col-span-2 border-t border-gray-50 pt-8">
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] mb-4">
                  3. Contractual Relationships
                </h2>
                <p className="text-sm md:text-base">
                  All energy supply agreements are entered into directly between
                  the client and the relevant energy supplier. Where energy
                  aggregators are used, they may assist in pricing, procurement,
                  or contract facilitation. However, Eazy Switch Limited is not
                  a party to the energy supply contract, regardless of whether
                  pricing has been obtained directly or via an aggregator. All
                  contractual obligations, performance, billing, and service
                  delivery remain the responsibility of the energy supplier
                  and/or aggregator.
                </p>
              </section>

              {/* 4. Client Responsibilities */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] mb-4">
                  4. Client Responsibilities
                </h2>
                <p className="mb-2 text-sm md:text-base">
                  Clients are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm md:text-base">
                  <li>
                    Ensuring all information provided to us is accurate,
                    complete, and up to date
                  </li>
                  <li>
                    Reviewing all contract terms before entering into any
                    agreement
                  </li>
                  <li>
                    Ensuring they have authority to act on behalf of their
                    organisation
                  </li>
                  <li>
                    Understanding the obligations and commitments contained
                    within any energy contract
                  </li>
                </ul>
              </section>

              {/* 5. Use of Energy Aggregators */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] mb-4">
                  5. Use of Energy Aggregators
                </h2>
                <p className="text-sm md:text-base">
                  In certain cases, we may utilise energy aggregators to source
                  pricing and facilitate contracts. However:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-xs md:text-sm">
                  <li>
                    The final contract is always between the client and the
                    supplier
                  </li>
                  <li>
                    The aggregator is responsible only for its own services
                  </li>
                  <li>
                    We are not responsible for the actions or performance of any
                    aggregator
                  </li>
                </ul>
              </section>

              {/* 6. Fees and Payment */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] mb-4">
                  6. Fees and Payment
                </h2>
                <p className="text-sm md:text-base">
                  Where applicable, any fees for our services will be:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm md:text-base">
                  <li>Clearly communicated in advance</li>
                  <li>Agreed with the client prior to engagement</li>
                  <li>Transparent and outlined in writing where required</li>
                </ul>
                <p className="mt-2 font-semibold italic text-[#1a4d4d] text-sm md:text-base">
                  We are committed to maintaining full transparency.
                </p>
              </section>

              {/* 7. Complaints Procedure */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] mb-4">
                  7. Complaints Procedure
                </h2>
                <p className="text-sm md:text-base">
                  We take all complaints seriously. If you are dissatisfied,
                  please contact us first so we can attempt to resolve your
                  concerns promptly.
                </p>
                <Link
                  href="/complaints-procedure"
                  className="inline-flex items-center text-[#8dae39] font-bold mt-2 hover:underline text-sm md:text-base"
                >
                  View Full Complaints Procedure{" "}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </section>

              {/* 8. Independent Advice and Escalation */}
              <section className="lg:col-span-2 bg-[#1a4d4d] p-6 md:p-10 rounded-2xl md:rounded-3xl text-white">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  8. Independent Advice and Escalation
                </h2>
                <p className="mb-8 text-gray-300 text-sm md:text-base">
                  If a complaint cannot be resolved internally, you may have the
                  right to escalate your complaint to an independent body.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                  <div className="text-center md:text-left w-full md:w-auto">
                    <p className="text-[10px] md:text-xs font-black tracking-widest text-[#8dae39] uppercase mb-2">
                      Primary Link
                    </p>
                    <a
                      href="https://www.energyombudsman.org/raise-dispute/eazy-switch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8dae39] text-[#1a4d4d] px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white transition-all shadow-lg text-sm md:text-base"
                    >
                      Raise a Dispute{" "}
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </div>
                  <div className="bg-white/10 p-4 md:p-6 rounded-2xl border border-white/10 text-center w-full md:w-auto">
                    <p className="text-xs text-gray-400 mb-1">
                      ADR Membership Number
                    </p>
                    <p className="text-lg md:text-xl font-black text-white tracking-widest uppercase">
                      C35EAZY01
                    </p>
                  </div>
                </div>
              </section>

              {/* 9. Limitation of Liability */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] mb-4">
                  9. Limitation of Liability
                </h2>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm md:text-base">
                  <li>Any indirect, incidental, or consequential losses</li>
                  <li>Any loss from reliance on supplier terms</li>
                  <li>Any service issues outside of our control</li>
                </ul>
              </section>

              {/* 10. Data Protection and Privacy */}
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] mb-4">
                  10. Data Protection and Privacy
                </h2>
                <p className="text-sm md:text-base mb-4">
                  We comply with UK GDPR and Data Protection Act 2018.
                </p>
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center text-[#8dae39] font-bold hover:underline text-sm md:text-base"
                >
                  View Privacy Policy <ChevronRight className="w-4 h-4" />
                </Link>
              </section>
            </div>

            {/* --- 11 & 12. UPDATED REUSABLE COMPONENT --- */}
            <div className="border-t border-gray-100 pt-12 space-y-12">
              <section className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] mb-4 flex items-center justify-center md:justify-start gap-2">
                  <Scale className="w-5 h-5 md:w-6 md:h-6 text-[#8dae39]" /> 11.
                  Governing Law
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                  These Terms are governed by the laws of England and Wales.
                </p>
              </section>

              {/* Replaced Manual Section 12 with CompanyInfo */}
              <CompanyInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
