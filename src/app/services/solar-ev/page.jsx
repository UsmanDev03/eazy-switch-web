"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import {
  Zap,
  BarChart3,
  Leaf,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Coins,
  Globe,
  Handshake,
  Lightbulb,
  Settings,
  Car,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const SolarEVPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#1a4d4d] font-sans selection:bg-[#8dae39] selection:text-white">
      {/* 1. HERO SECTION */}
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
          <Navbar />

          <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight"
            >
              Commercial Solar <br />
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#8dae39" }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                & EV Solutions.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed"
            >
              Empowering UK businesses with on-site renewable generation. We
              provide{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                strategic energy infrastructure and long-term cost stability.
              </span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. SOLAR INVESTMENT SECTION - Light Background */}
      <section className="py-16 bg-[#f9fbf2]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
                Solar is an Investment That Works for You
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In today’s volatile energy market, electricity costs are
                  unpredictable. Installing solar panels gives your business
                  greater control over energy spend, providing a reliable,
                  cost-effective source of on-site power.
                </p>
                <p>
                  Solar systems deliver immediate financial benefits while
                  reducing your environmental impact. Supported by a
                  comprehensive maintenance package and a 25-year panel
                  warranty, a commercial PV installation is a secure, long-term
                  investment that helps your business lower its carbon footprint
                  and enhance sustainability credentials.
                </p>
                <p className="font-bold text-[#1a4d4d]">
                  Contact our team or request a quote today to see if solar is
                  the right fit for your business.
                </p>
              </div>
            </div>

            <div className="bg-[#1a4d4d] p-8 rounded-2xl text-white shadow-xl border-l-4 border-[#8dae39]">
              <h3 className="text-xl font-bold mb-6 text-[#8dae39]">
                Commercial Solar Made Accessible
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start group">
                  <Coins className="w-6 h-6 text-[#8dae39] shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold block text-base">
                      Capital Allowances
                    </span>{" "}
                    Claim up to £1 million per year on qualifying assets like
                    solar installations, reducing taxable profits.
                  </p>
                </li>
                <li className="flex gap-4 items-start group">
                  <Globe className="w-6 h-6 text-[#8dae39] shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold block text-base">
                      Regional Grants
                    </span>{" "}
                    Explore local government funding schemes to supplement your
                    investment.
                  </p>
                </li>
                <li className="flex gap-4 items-start group">
                  <BarChart3 className="w-6 h-6 text-[#8dae39] shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold block text-base">
                      Flexible Payment Options
                    </span>{" "}
                    Choose between CAPEX or third-party finance arrangements for
                    added flexibility.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PROCESS - White Background */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold mb-4">
              Our Seamless Solar Process
            </h2>
            <div className="w-20 h-1.5 bg-[#8dae39]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "1",
                t: "Tailored Quote",
                d: "We provide a bespoke proposal outlining costs and recommendations aligned with your business requirements.",
              },
              {
                n: "2",
                t: "Feasibility Assessment",
                d: "Our team evaluates your site to confirm suitability, ensuring confidence before moving forward.",
              },
              {
                n: "3",
                t: "Project Management",
                d: "From planning permissions to coordinating with site contacts, we manage the installation process end-to-end.",
              },
              {
                n: "4",
                t: "Professional Installation",
                d: "Once approved, our experienced team installs your solar system, delivering clean, cost-saving energy.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-[#8dae39] hover:shadow-lg transition-all group"
              >
                <span className="text-3xl font-black text-[#8dae39]/30 group-hover:text-[#8dae39] transition-colors mb-4 block">
                  {item.n}.
                </span>
                <h4 className="font-bold text-lg mb-2">{item.t}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE & SUSTAINABILITY - Gray Background */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold">
                Why Choose Eazy Switch?
              </h2>
              <p className="text-gray-600 italic -mt-4">
                We simplify the journey to solar while providing full advisory
                support:
              </p>
              <div className="space-y-4">
                {[
                  "Custom Solutions – Designed to maximise energy output for your site.",
                  "Peace of Mind – 25-year warranty on panels included.",
                  "Maintenance & Support – Optional packages for ongoing servicing.",
                  "Expert Guidance – We coordinate with suppliers and installation teams on your behalf.",
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
              <Leaf className="absolute top-[-20px] right-[-20px] w-32 h-32 text-white/5 rotate-12" />
              <h4 className="text-2xl font-bold mb-4 text-[#8dae39]">
                Sustainable Energy, Stronger Business
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Solar PV systems produce clean electricity with zero direct
                emissions, helping your business meet net zero targets and
                demonstrate sustainability leadership.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Integrating solar with other green energy solutions—such as
                REGO-backed electricity, biomethane, and EV charging—provides a
                complete toolkit to secure your energy future and strengthen
                your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EV CHARGING SECTION - Dark Background */}
      <section className="py-16 bg-[#1a4d4d] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 italic">
              EV Charging Solutions: Drive Sustainability, Boost Your Business
            </h2>
            <p className="text-gray-400">
              Our scalable solutions enable your business to stay competitive
              and future-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold mb-4 text-[#8dae39]">
                Future-Proof Your Infrastructure
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our scalable EV charging solutions enable your business to stay
                competitive, support sustainability, and provide a seamless
                charging experience for staff, customers, and visitors. With
                strategic planning, your EV infrastructure can also generate
                additional revenue and build loyalty.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="text-xl font-bold mb-4 text-[#8dae39]">
                Integrate into Your Strategy
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Planning for the growing number of electric vehicles ensures
                your business remains future-ready. By implementing flexible
                solutions, you can meet sustainability objectives while
                enhancing operational efficiency.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                t: "Design",
                d: "Tailored solutions crafted by expert service teams.",
                i: Lightbulb,
              },
              {
                t: "Installation",
                d: "Professional installation of chargers and infrastructure.",
                i: Zap,
              },
              {
                t: "Consultancy",
                d: "We assess requirements to recommend the best fit.",
                i: Handshake,
              },
              {
                t: "Maintenance",
                d: "Ongoing support to keep chargers operational.",
                i: Settings,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-lg"
              >
                <item.i className="w-10 h-10 text-[#8dae39] mx-auto mb-4" />
                <h4 className="font-bold text-[#1a4d4d] mb-2">{item.t}</h4>
                <p className="text-gray-500 text-xs">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL ADVISOR BLOCK & CTA - Light Green Background */}
      <section className="py-16 container mx-auto px-6">
        <div className="bg-[#1a4d4d] rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Background Decorative Icon */}
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Zap className="w-40 h-40 text-white" />
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black text-white mb-6 relative z-10 italic leading-tight max-w-4xl mx-auto"
          >
            "We act as your independent energy advisor, coordinating with
            suppliers to make your transition simple, efficient, and effective."
          </motion.h3>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Our dedicated team is ready to provide a bespoke proposal outlining
            costs and recommendations aligned with your business requirements.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-10">
            {/* Main CTA */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#8dae39] text-[#1a4d4d] font-black text-xl rounded-2xl flex items-center gap-3 shadow-lg hover:bg-white transition-all cursor-pointer"
              >
                Get a Bespoke Quote <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>

            {/* Support Info */}
            <div className="flex items-center gap-3 text-white bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
              <ShieldCheck className="w-8 h-8 text-[#8dae39]" />
              <div className="text-left">
                <span className="block font-bold tracking-tight text-white">
                  Ethical & Transparent Advice
                </span>
                <span className="text-xs text-gray-400">
                  Independent Energy Consultancy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarEVPage;
