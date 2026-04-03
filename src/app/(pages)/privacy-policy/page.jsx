"use client";
import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import { CompanyInfo } from "@/components/company-info"; // Import added
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Globe,
  Cookie,
  ShieldAlert,
  Mail,
  Scale,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfa] text-[#1a4d4d] font-sans selection:bg-[#8dae39] selection:text-white">
      {/* --- HERO SECTION --- */}
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
          {/* 1. Background Image Layer - Privacy & Protection Theme */}
          <div className="absolute inset-0 z-0 bg-[#1a4d4d]">
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1500"
              alt="Eazy Switch Privacy Policy"
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
                Privacy Policy.
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
              . We are committed to protecting your privacy and handling your
              personal data with{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                full transparency and lawful care.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto bg-white rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100 p-6 sm:p-10 md:p-16 lg:p-24 space-y-12 text-gray-600 leading-relaxed">
            {/* Introduction Box */}
            <div className="bg-gray-50 p-6 md:p-10 rounded-3xl border-l-4 border-[#8dae39]">
              <p className="text-sm md:text-lg mb-6 text-[#1a4d4d]">
                Eazy Switch Limited (“we”, “us”, or “our”) is committed to
                protecting your privacy and handling your personal data in a
                transparent and secure manner. This Privacy Policy explains how
                we collect, use, store, and protect your personal data when you
                interact with our services, website, or communications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="flex gap-3 items-start">
                  <ShieldCheck className="w-5 h-5 text-[#8dae39] shrink-0 mt-0.5" />
                  <p>
                    Registered member of the{" "}
                    <strong>
                      Energy Ombudsman (Membership Number: C35EAZY01)
                    </strong>
                    , an approved ADR provider overseen by Ofgem.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <UserCheck className="w-5 h-5 text-[#8dae39] shrink-0 mt-0.5" />
                  <p>
                    Compliant with the{" "}
                    <strong>
                      UK General Data Protection Regulation (UK GDPR)
                    </strong>{" "}
                    and the <strong>Data Protection Act 2018</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
              {/* 1. Information We Collect */}
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] flex items-center gap-3">
                  <Eye className="text-[#8dae39] w-6 h-6 shrink-0" /> 1.
                  Information We Collect
                </h2>
                <p className="text-sm md:text-base">
                  We collect personal data that is necessary to provide and
                  improve our services. This may include:
                </p>
                <div className="space-y-4 text-sm md:text-base pl-2">
                  <p>
                    <strong>1.1 Identity and Contact:</strong> Name, title, date
                    of birth (where relevant), postal address, email address,
                    and telephone number.
                  </p>
                  <p>
                    <strong>1.2 Account and Service:</strong> Energy account
                    details, service preferences, login credentials, and records
                    of correspondence.
                  </p>
                  <p>
                    <strong>1.3 Financial Information:</strong> Billing details,
                    payment methods, and transaction history.
                  </p>
                  <p>
                    <strong>1.4 Technical and Usage:</strong> IP address, device
                    type, browser type, and website usage data via cookies.
                  </p>
                  <p>
                    <strong>1.5 Marketing Preferences:</strong> Your
                    communication preferences and consent for marketing.
                  </p>
                </div>
              </section>

              {/* 2. How We Use Your Information */}
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] flex items-center gap-3">
                  <FileText className="text-[#8dae39] w-6 h-6 shrink-0" /> 2.
                  How We Use Your Information
                </h2>
                <ul className="space-y-3 text-sm md:text-base">
                  {[
                    "Provide and manage energy procurement and switching services",
                    "Communicate regarding your account, services, or enquiries",
                    "Comply with legal and regulatory obligations",
                    "Improve our services, systems, and website functionality",
                    "Send marketing communications where you have provided consent",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <div className="w-2 h-2 rounded-full bg-[#8dae39] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-[#1a4d4d] border-t border-gray-100 pt-4">
                  We do not sell your personal data to third parties.
                </p>
              </section>

              {/* 3. Legal Basis */}
              <section className="space-y-4 lg:col-span-2 bg-gray-50/50 p-6 md:p-10 rounded-3xl border border-gray-100">
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d]">
                  3. Legal Basis for Processing
                </h2>
                <p className="text-sm md:text-base mb-4">
                  Under UK GDPR, we rely on the following lawful bases:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <strong className="text-[#8dae39] block mb-1">
                      Contractual
                    </strong>{" "}
                    Necessary to provide services you requested.
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <strong className="text-[#8dae39] block mb-1">Legal</strong>{" "}
                    To comply with applicable laws and regulations.
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <strong className="text-[#8dae39] block mb-1">
                      Legitimate
                    </strong>{" "}
                    To operate and improve our business while respecting rights.
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <strong className="text-[#8dae39] block mb-1">
                      Consent
                    </strong>{" "}
                    For marketing and optional processing.
                  </div>
                </div>
              </section>

              {/* 4 & 5. Sharing & International */}
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d]">
                  4. Data Sharing
                </h2>
                <p className="text-sm md:text-base">
                  We may share your personal data with energy suppliers,
                  industry partners, regulators, or service providers supporting
                  our operations (IT, billing, analytics). All third parties
                  must process data in accordance with law.
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] pt-4">
                  5. International Transfers
                </h2>
                <p className="text-sm md:text-base">
                  Where data is transferred outside the UK/EEA, appropriate
                  safeguards like standard contractual clauses are implemented.
                </p>
              </section>

              {/* 6. Cookies */}
              <section className="space-y-4 bg-[#1a4d4d] p-6 md:p-8 rounded-3xl text-white relative overflow-hidden shadow-lg">
                <Cookie className="absolute -right-6 -bottom-6 w-32 h-32 text-white/5 rotate-12" />
                <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                  <Cookie className="text-[#8dae39] w-6 h-6 shrink-0" /> 6.
                  Cookies
                </h2>
                <p className="text-sm md:text-base text-gray-300">
                  We use cookies for core functionality, analytical insights
                  (usage/performance), and marketing (with consent). You can
                  control these via browser settings.
                </p>
              </section>

              {/* 7. Your Rights */}
              <section className="space-y-4 lg:col-span-1">
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d]">
                  7. Your Rights
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base list-disc pl-5">
                  <li>Request access / Portability</li>
                  <li>Correction of data</li>
                  <li>Erasure of data</li>
                  <li>Restrict / Object to processing</li>
                  <li>Withdraw consent</li>
                </ul>
                <p className="text-sm pt-2">
                  Contact:{" "}
                  <a
                    href="mailto:privacy@eazy-switch.com"
                    className="font-bold text-[#8dae39] hover:underline"
                  >
                    privacy@eazy-switch.com
                  </a>
                </p>
              </section>

              {/* 8 & 9. Retention & Security */}
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d]">
                  8. Data Retention & 9. Security
                </h2>
                <p className="text-sm md:text-base">
                  We retain data only as long as necessary for relationships and
                  legal obligations. We use secure systems, encrypted
                  communications, and access controls to protect your data.
                </p>
              </section>

              {/* 10. Complaints Box */}
              <section className="lg:col-span-2 bg-[#8dae39]/5 p-6 md:p-10 rounded-3xl border-2 border-dashed border-[#8dae39]/30">
                <h2 className="text-xl md:text-2xl font-bold text-[#1a4d4d] mb-4 flex items-center gap-3">
                  <ShieldAlert className="text-[#8dae39] w-7 h-7 shrink-0" />{" "}
                  10. Complaints and Dispute Resolution
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                  <div className="text-sm md:text-base space-y-3">
                    <p>
                      If you have concerns, contact{" "}
                      <strong>privacy@eazy-switch.com</strong>. You also have
                      the right to lodge a complaint with the{" "}
                      <strong>Information Commissioner's Office (ICO)</strong>.
                    </p>
                    <p>
                      For energy-related disputes, contact the Energy Ombudsman
                      using the membership details below.
                    </p>
                  </div>
                  <div className="bg-[#1a4d4d] p-6 rounded-2xl text-center min-w-[260px] shadow-lg">
                    <p className="text-xs text-gray-400 mb-2 tracking-widest uppercase">
                      Energy Ombudsman ID
                    </p>
                    <p className="text-2xl font-black text-white tracking-widest uppercase">
                      C35EAZY01
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* --- 11 & 12. UPDATED REUSABLE COMPONENT --- */}
            <div className="pt-12">
              <CompanyInfo />
              <p className="text-center text-xs text-gray-400 mt-12 italic">
                11. We may update this Privacy Policy from time to time. The
                latest version will always be available on our website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
