"use client";
import { Navbar } from "@/components/navbar";
import { 
  ArrowRight, Zap, TrendingUp, 
  Globe, Briefcase 
} from "lucide-react";
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfd]">
      
      {/* 1. Header & Navbar Wrapper */}
      <section className="relative overflow-hidden bg-[#1a4d4d]" suppressHydrationWarning={true}>
        <div className="relative bg-[#1a4d4d] min-h-[60vh] flex items-center justify-center">
          
          {/* Global Navbar (Includes Announcement Bar automatically) */}
          <Navbar />

          {/* Hero Content for About - Adjusted pt-40 to clear the global navbar */}
          <div className="container mx-auto px-6 pt-40 pb-24 md:pt-56 md:pb-48 text-center relative z-10">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              About <span className="text-[#8dae39]">Eazy Switch.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              We’re on a mission to simplify energy procurement for UK businesses through transparency, 
              technology, and expert consultancy.
            </p>
          </div>

          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8dae39]/5 blur-[120px] rounded-full pointer-events-none" />
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#8dae39]/10 px-4 py-2 rounded-full mb-6 text-[#1a4d4d] font-bold text-xs uppercase tracking-widest">
               Our Story
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1a4d4d] mb-8">How it all started...</h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Founded in the heart of the UK, Eazy Switch Limited was born from a simple observation: 
              <strong> Commercial energy is unnecessarily complex.</strong> We set out to bridge the gap 
              between suppliers and business owners, ensuring fairness in every contract.
            </p>
          </div>

          {/* Stats / Numbers Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { label: "Established", value: "2024" },
              { label: "Businesses Helped", value: "2.5k+" },
              { label: "Energy Partners", value: "30+" },
              { label: "Client Savings", value: "£1M+" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-[#f8fafc] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-4xl md:text-5xl font-black text-[#1a4d4d] mb-2">{stat.value}</p>
                <p className="text-gray-500 font-bold uppercase tracking-tighter text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Do Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold text-[#1a4d4d] mb-8">What we do.</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                We provide a complete energy service, acting as your trusted partner for everything 
                from procurement to efficiency auditing.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Zap, text: "Energy Procurement & Tendering" },
                  { icon: TrendingUp, text: "Efficiency & Sustainability Audits" },
                  { icon: Briefcase, text: "Contract Management & Renewals" },
                  { icon: Globe, text: "Net Zero Strategy Development" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-[#8dae39]/30 transition-colors">
                    <div className="w-10 h-10 bg-[#8dae39]/20 rounded-xl flex items-center justify-center text-[#1a4d4d]">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-[#1a4d4d]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-square bg-gray-200 rounded-[4rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700">
                 <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop" 
                    alt="Team Collaboration" 
                    className="w-full h-full object-cover"
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Dark Theme) */}
      <section className="bg-[#1a4d4d] py-24 md:py-32 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why businesses choose Eazy Switch</h2>
            <div className="w-24 h-1.5 bg-[#8dae39] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Transparency", desc: "No hidden commissions or confusing contract terms." },
              { title: "Expertise", desc: "A team of energy specialists with decades of experience." },
              { title: "Savings", desc: "We compare the whole market to find you the best rates." },
              { title: "Ongoing Support", desc: "We guide you throughout the entire contract term." }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-[#8dae39]/10 transition-all cursor-default group">
                <h3 className="text-xl font-bold text-[#8dae39] mb-4 group-hover:scale-105 transition-transform">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto py-16 md:py-24 px-6 md:px-12 bg-white rounded-[4rem] border-2 border-[#1a4d4d]/5 shadow-2xl relative overflow-hidden">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#1a4d4d] mb-8 leading-tight">
            Don't just take our word for it...
          </h2>
          <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Our experts are waiting to help you reduce your overheads and increase your business efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button className="px-12 py-5 bg-[#8b5aa6] text-white font-bold rounded-full hover:bg-[#724a8d] transition-all flex items-center gap-3 active:scale-95 shadow-xl hover:-translate-y-1">
              Talk to an Expert <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
              <span className="text-[#1a4d4d] font-bold text-sm tracking-tight">5.0 Trustpilot Rating</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;