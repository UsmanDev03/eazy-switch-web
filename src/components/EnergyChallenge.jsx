"use client";

import { ArrowLeftRight, ClipboardCheck, Lightbulb, ShieldCheck } from "lucide-react";

// Array define karna zaroori hai
const challenges = [
  {
    title: "Energy Comparison",
    icon: <ArrowLeftRight className="w-10 h-10 text-white group-hover:text-[#8dae39]" suppressHydrationWarning={true} />,
    href: "/services/comparison",
  },
  {
    title: "Contract Management",
    icon: <ClipboardCheck className="w-10 h-10 text-white group-hover:text-[#8dae39]" suppressHydrationWarning={true} />,
    href: "/services/contracts",
  },
  {
    title: "Expert Consulting",
    icon: <Lightbulb className="w-10 h-10 text-white group-hover:text-[#8dae39]" suppressHydrationWarning={true} />,
    href: "/services/consulting",
  },
  {
    title: "Utility Solutions",
    icon: <ShieldCheck className="w-10 h-10 text-white group-hover:text-[#8dae39]" />,
    href: "/services/utility",
  },
];

export function EnergyChallenge() {
  return (
    <section className="bg-[#8b5aa6] pt-0 pb-20 px-6 mt-[-2px] relative z-30" suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Padding top sirf content ko thoda neechay rakhne ke liye */}
        <div className="pt-16"> 
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How we can help
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-medium">
            Comprehensive energy solutions tailored to empower your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group bg-[#2d1b4d] hover:bg-[#1a4d4d] transition-all duration-500 rounded-[2.5rem] p-10 flex flex-col items-center text-center border border-white/5 shadow-2xl hover:-translate-y-2 h-full"
            >
              <div 
                className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center mb-8 group-hover:border-[#8dae39] group-hover:bg-[#8dae39]/5 transition-all duration-500"
                suppressHydrationWarning={true}
              >
                {item.icon}
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold leading-tight flex-1 flex items-center">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}