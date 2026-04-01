"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UploadCloud, FileSignature, BarChart3, 
  ShieldCheck, Zap, CheckCircle2, ArrowRight 
} from "lucide-react";

const steps = [
  {
    id: "01",
    icon: UploadCloud,
    title: "Send Your Energy Details",
    description: "Provide a recent energy bill or a clear photo of your meter + address. This ensures accurate supply identification and avoids common errors during the quotation process.",
    accent: "#8b5aa6", // Purple
    benefit: "Ensures Data Accuracy"
  },
  {
    id: "02",
    icon: FileSignature,
    title: "Sign the Letter of Authority",
    description: "Complete our LOA to authorize us to liaise directly with energy suppliers on your behalf and obtain necessary supply data efficiently.",
    accent: "#8dae39", // Lime
    benefit: "Streamlined Management"
  },
  {
    id: "03",
    icon: BarChart3,
    title: "Market Review & Pricing",
    description: "We approach trusted suppliers to obtain the most competitive rates available and identify the most suitable solutions for your business.",
    accent: "#f97316", // Orange
    benefit: "Bespoke Market Analysis"
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Contract & Clause Assessment",
    description: "We highlight volume tolerance, pass-through charges, and automatic renewals so you fully understand the agreement before proceeding.",
    accent: "#ef4444", // Red (Pitfalls Alert)
    benefit: "Zero Hidden Challenges"
  },
  {
    id: "05",
    icon: Zap,
    title: "Clear Options & Completion",
    description: "We present suitable options in a transparent format. Once you select, we manage the entire contract process through to completion.",
    accent: "#22c55e", // Green
    benefit: "Stress-Free Completion"
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-12 md:py-16 bg-[#133a3a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header - Thora chota aur clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[#8dae39] font-bold tracking-widest uppercase text-[10px]">Framework</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-1">
              Switching <span className="text-[#8b5aa6]">Process</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#8dae39] pl-4 md:pr-4">
            Five simple steps to secure your business energy.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Steps Navigation (Compact) */}
          <div className="lg:col-span-5 space-y-1">
            {steps.map((step, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveStep(index)}
                className={`group relative p-4 md:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                  activeStep === index 
                  ? "bg-white/10 border-white/20 shadow-lg" 
                  : "bg-transparent border-transparent hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-sm font-mono font-bold ${
                    activeStep === index ? "text-[#8dae39]" : "text-white/20"
                  }`}>
                    {step.id}
                  </span>
                  <h3 className={`text-base md:text-lg font-bold transition-all ${
                    activeStep === index ? "translate-x-1" : "opacity-50"
                  }`}>
                    {step.title}
                  </h3>
                  {activeStep === index && (
                    <ArrowRight className="ml-auto text-[#8dae39] w-4 h-4" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Dynamic Content Display (Reduced Height) */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#0e2b2b] rounded-[2rem] p-8 md:p-12 min-h-[350px] flex flex-col justify-center border border-white/5 shadow-inner">
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-20" style={{ backgroundColor: steps[activeStep].accent }} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: steps[activeStep].accent }}
                    >
                      {React.createElement(steps[activeStep].icon, { size: 24, className: "text-white" })}
                    </div>
                    <div className="flex items-center gap-2 py-1.5 px-3 bg-white/5 rounded-full border border-white/10">
                      <CheckCircle2 className="text-[#8dae39] w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">
                        {steps[activeStep].benefit}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold mb-4">
                    {steps[activeStep].title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Minimal Trust Line */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
           {["20+ Suppliers", "Secure SSL", "UK Owned", "Zero Fees"].map((item, i) => (
             <span key={i} className="text-[10px] font-bold uppercase tracking-[0.2em]">{item}</span>
           ))}
        </div>

      </div>
    </section>
  );
}