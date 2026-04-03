"use client";
import React from "react";
import { Navbar } from "@/components/layouts/navbar";
import {
  ShieldCheck,
  FileText,
  Clock,
  AlertTriangle,
  ExternalLink,
  ArrowRight,
  Scale,
  Gavel,
  Info,
  Mail,
  MapPin,
  PhoneCall,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const ComplaintsProcedure = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfa] text-[#1a4d4d] font-sans selection:bg-[#8dae39] selection:text-white">
      {/* --- HERO SECTION --- */}
     <section
  className="relative overflow-hidden bg-[#1a4d4d]"
  suppressHydrationWarning={true}
>
  <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
    <div className="absolute inset-0 z-0 bg-[#1a4d4d]">
      <Image
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
        alt="Customer Support and Resolution"
        fill
        priority
        className="object-cover opacity-25"
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d4d]/80 via-[#1a4d4d]/20 to-[#1a4d4d]" />
    </div>

    {/* 2. Navbar */}
    <Navbar />

    {/* 3. Content Container */}
    <div className="container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-20 text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight"
      >
        Complaints <br />
        <motion.span
          initial={{ color: "#ffffff" }}
          animate={{ color: "#8dae39" }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Procedure.
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
      >
        We are committed to high service standards. <br />
        If you're not satisfied, we'll resolve your concerns{" "}
        <span className="text-white font-medium italic underline decoration-[#8dae39]">
          quickly and transparently
        </span>{" "}
        as your trusted partner.
      </motion.p>
    </div>
  </div>
</section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto bg-white rounded-2xl md:rounded-[2.5rem] shadow-sm border border-gray-100 p-6 sm:p-10 md:p-16 lg:p-24 space-y-16">
            {/* 1. What is a Complaint & 2. How to Make one */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 bg-[#8dae39]/10 text-[#8dae39] rounded-full text-sm font-bold uppercase tracking-widest">
                  Section 1 & 2
                </div>
                <h2 className="text-3xl font-bold text-[#1a4d4d]">
                  Making a Complaint
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A complaint is any expression of dissatisfaction where a
                  response or resolution is expected.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 transition-hover hover:border-[#8dae39]/30">
                    <Mail className="text-[#8dae39] shrink-0" />
                    <div>
                      <h4 className="font-bold">Email Us</h4>
                      <p className="text-gray-600">support@eazy-switch.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 transition-hover hover:border-[#8dae39]/30">
                    <MapPin className="text-[#8dae39] shrink-0" />
                    <div>
                      <h4 className="font-bold">Post to Us</h4>
                      <p className="text-gray-600">
                        Eazy Switch Limited
                        <br />
                        Unit 14 Clements Court, Clements Lane
                        <br />
                        Ilford, Essex, IG1 2QY
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Our Process */}
              <div className="bg-[#1a4d4d] p-8 md:p-12 rounded-[2rem] text-white space-y-8">
                <div className="flex items-center gap-3">
                  <Clock className="text-[#8dae39] w-8 h-8" />
                  <h3 className="text-2xl font-bold">3. Our Process</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { title: "Acknowledgement", desc: "Within 3 working days" },
                    {
                      title: "Investigation",
                      desc: "Handled by trained staff",
                    },
                    { title: "Final Response", desc: "Within 10 working days" },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="relative pl-8 border-l border-[#8dae39]/30"
                    >
                      <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 bg-[#8dae39] rounded-full" />
                      <h4 className="font-bold text-white">{step.title}</h4>
                      <p className="text-gray-300 text-sm">{step.desc}</p>
                    </div>
                  ))}
                  <p className="text-xs italic text-gray-400">
                    We will keep you informed if more time is required.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Escalation */}
            <div className="py-12 border-y border-gray-100">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  4. Escalation
                </h2>
                <p className="text-gray-600">
                  If you are not satisfied with the initial outcome, we have a
                  clear escalation path:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Internal Review",
                  "Senior Management Review",
                  "Escalation to the Director",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-[#fcfdfa] border border-gray-100 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#8dae39]/10 flex items-center justify-center text-[#8dae39] font-bold">
                      {i + 1}
                    </div>
                    <span className="font-bold text-[#1a4d4d]">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Independent Dispute Resolution (OMBUDSMAN) */}
            <div className="bg-[#8dae39]/5 border-2 border-dashed border-[#8dae39]/30 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
                <div className="space-y-5 flex-1">
                  <div className="flex items-center gap-3">
                    <Gavel className="text-[#1a4d4d] w-8 h-8" />
                    <h2 className="text-2xl font-bold text-[#1a4d4d]">
                      5. Independent Dispute Resolution
                    </h2>
                  </div>
                  <p className="text-gray-600">
                    If your complaint is not resolved after 8 weeks, or you
                    receive a "deadlock letter", you can escalate externally to
                    the Energy Ombudsman.
                  </p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="px-4 py-2 bg-[#1a4d4d] text-white rounded-lg font-mono text-sm">
                      ADR Membership: C35EAZY01
                    </div>
                  </div>

                  {/* Additional Ombudsman Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200/50">
                    <div className="text-sm">
                      <p className="font-bold mb-1">Phone & Email</p>
                      <p className="text-gray-600">0330 440 1624</p>
                      <p className="text-gray-600">
                        enquiry@ombudsman-services.org
                      </p>
                    </div>
                    <div className="text-sm">
                      <p className="font-bold mb-1">Address</p>
                      <p className="text-gray-600">
                        Energy Ombudsman, PO Box 966, Warrington, WA4 9DF
                      </p>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 w-full lg:w-auto">
                  <a
                    href="https://www.energyombudsman.org/raise-dispute/eazy-switch"
                    target="_blank"
                    className="w-full bg-[#1a4d4d] text-white px-8 py-5 rounded-xl font-bold hover:bg-[#8dae39] transition-all flex items-center justify-center gap-3 shadow-xl"
                  >
                    Raise a Dispute with Energy Ombudsman{" "}
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <p className="mt-4 text-center text-xs text-gray-500 underline">
                    <a
                      href="https://www.ombudsman-services.org/sectors/energy"
                      target="_blank"
                    >
                      Visit Official Website
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Independent Advice & 7. Vulnerable Customers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-gray-50 rounded-3xl space-y-4">
                <div className="flex items-center gap-2 text-[#8dae39]">
                  <Scale className="w-5 h-5" />
                  <h3 className="font-bold text-xl uppercase tracking-tight">
                    6. Independent Advice
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Get free, impartial energy advice from Citizens Advice
                  regarding your consumer rights.
                </p>
                <div className="flex flex-col gap-2 pt-2">
                  <a
                    href="https://www.citizensadvice.org.uk"
                    target="_blank"
                    className="text-[#1a4d4d] font-bold flex items-center gap-2 hover:text-[#8dae39]"
                  >
                    Citizens Advice <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.citizensadvice.org.uk/consumer/energy/"
                    target="_blank"
                    className="text-[#1a4d4d] font-bold flex items-center gap-2 hover:text-[#8dae39]"
                  >
                    Consumer Energy Advice <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-8 bg-[#1a4d4d]/5 rounded-3xl space-y-4 border border-[#1a4d4d]/10">
                <div className="flex items-center gap-2 text-[#1a4d4d]">
                  <UserCheck className="w-5 h-5" />
                  <h3 className="font-bold text-xl uppercase tracking-tight">
                    7. Vulnerable Customers
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We provide additional support including flexible
                  communication, extra assistance, and fair treatment where
                  required.
                </p>
              </div>
            </div>

            {/* 8, 9, 10 Summary Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <ShieldCheck className="text-[#8dae39] w-5 h-5" /> 8. Data
                  Protection
                </h3>
                <p className="text-sm text-gray-600">
                  We comply with UK GDPR and the Data Protection Act 2018. For
                  more details, view our{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#8dae39] font-bold underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <FileText className="text-[#8dae39] w-5 h-5" /> 9. Complaints
                  Records
                </h3>
                <p className="text-sm text-gray-600">
                  We maintain detailed complaint records for compliance, audit
                  purposes, and to continuously improve our service quality.
                </p>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="mt-16 pt-10 border-t border-gray-100 text-center">
              <p className="text-[#1a4d4d] font-medium italic max-w-2xl mx-auto">
                "We appreciate the opportunity to resolve any concerns and are
                committed to providing a fair, transparent, and timely
                resolution."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComplaintsProcedure;
