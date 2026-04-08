"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Undo2,
  Zap,
  Building2,
  Warehouse,
  Hotel,
  Store,
  Moon,
  Flame,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";

const caseStudies = [
  {
    slug: "hospitality-electricity-reduction",
    title: "Large-Scale Electricity Cost Reduction",
    category: "UK Hotel Group",
    impact: "£82,000+ Savings",
    icon: <Hotel className="w-5 h-5" />,
    description:
      "Optimised electricity procurement for a multi-site hotel portfolio, securing long-term fixed rates across all locations.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    fullContent: {
      subtitle: "Multi-Site Portfolio",
      overview:
        "A well-established hotel group engaged Eazy Switch to optimise procurement strategy amid rising costs across accommodation and kitchens.",
      approach: [
        "Conducted a comprehensive portfolio-wide electricity audit",
        "Aggregated demand to strengthen procurement leverage",
        "Secured long-term fixed-rate electricity contracts",
        "Implemented a structured renewal strategy",
      ],
      outcome:
        "Enhanced budget certainty and substantial savings with long-term procurement stability.",
    },
  },
  {
    slug: "hospitality-gas-optimisation",
    title: "Hospitality – Gas Cost Optimisation",
    category: "Birmingham Restaurant",
    impact: "£44,500 Savings",
    icon: <Flame className="w-5 h-5" />,
    description:
      "Transitioned an established restaurant from expensive out-of-contract rates to a competitive fixed-rate gas agreement.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
    fullContent: {
      subtitle: "Established Restaurant",
      overview:
        "Analysis confirmed the business had moved onto a deemed rate following contract expiry, causing a sharp cost increase.",
      approach: [
        "Transitioned business from deemed rates to contracted position",
        "Secured competitive fixed-rate gas agreement",
        "Implemented renewal tracking to avoid future exposure",
      ],
      outcome:
        "Eliminated unnecessary overspend and ensured long-term pricing certainty.",
    },
  },
  {
    slug: "industrial-logistics-optimisation",
    title: "Multi-Utility Portfolio Optimisation",
    category: "Logistics & Industrial",
    impact: "£108,000+ Savings",
    icon: <Warehouse className="w-5 h-5" />,
    description:
      "Coordinated strategy for a warehouse operator, aligning supply capacity (kVA) with actual usage to eliminate overcharges.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    fullContent: {
      subtitle: "Multi-Site Distribution Operator",
      overview:
        "A Manchester logistics operator required a review of inconsistent terms and above-market pricing across multiple facilities.",
      approach: [
        "Delivered a coordinated multi-utility strategy",
        "Secured competitive fixed-rate contracts",
        "Reviewed agreed supply capacity (kVA) alignment",
        "Eliminated unnecessary capacity-related charges",
      ],
      outcome:
        "A cost-efficient utility portfolio supported by accurate contract structuring.",
    },
  },
  {
    slug: "property-management-transformation",
    title: "Portfolio Transformation (300+ Blocks)",
    category: "Property Management",
    impact: "£220,000 Savings",
    icon: <Building2 className="w-5 h-5" />,
    description:
      "Full restructuring of a massive utility portfolio, consolidating 300+ sites into a single supplier with aligned end dates.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    fullContent: {
      subtitle: "Large-Scale Property Management Group",
      overview:
        "Restructured a fragmented portfolio with misaligned contract dates and inconsistent billing into a streamlined operation.",
      approach: [
        "Full forensic audit across all electricity and gas supplies",
        "Consolidated to single electricity and gas suppliers",
        "Aligned all contracts to a common portfolio end date",
        "Installed Smart Meters and AMR for accurate data",
      ],
      outcome:
        "Significant reduction in estimated billing and simplified contract management.",
    },
  },
  {
    slug: "butcher-franchise-cost-recovery",
    title: "Cost Recovery & Billing Validation",
    category: "National Retail Franchise",
    impact: "£140,000 Recovered",
    icon: <Store className="w-5 h-5" />,
    description:
      "Identified persistent billing inconsistencies for 40+ locations, securing refunds and restructuring for competitive pricing.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    fullContent: {
      subtitle: "National Butcher Franchise (40+ Sites)",
      overview:
        "Engaged to address billing errors and rising costs across a large national network of retail sites.",
      approach: [
        "Portfolio-wide bill validation across all sites",
        "Identified and disputed incorrect historical charges",
        "Secured substantial refunds and credits",
        "Standardised contract structures for all locations",
      ],
      outcome:
        "Significant financial recovery combined with a transparent, optimised energy portfolio.",
    },
  },
  {
    slug: "major-uk-mosque-optimisation",
    title: "High-Consumption Energy Review",
    category: "Community & Non-Profit",
    impact: "£75,000 Savings",
    icon: <Moon className="w-5 h-5" />,
    description:
      "Reduced costs for one of Britain’s largest mosques while ensuring full financial transparency for the board of trustees.",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800&q=80",
    fullContent: {
      subtitle: "Major UK Mosque & Community Centre",
      overview:
        "Strategic review to reduce heavy daily gas and electricity costs for a major community hub.",
      approach: [
        "Conducted full review of gas and electricity contracts",
        "Secured long-term fixed-rate agreements",
        "Applied reduced brokerage fees for community support",
        "Ensured transparency for governance and reporting",
      ],
      outcome:
        "Substantial cost reduction, redirecting funds back into community services.",
    },
  },
  {
    slug: "banking-group-renewable-strategy",
    title: "Enterprise & Renewable Strategy",
    category: "Financial Services",
    impact: "£82,000 Savings",
    icon: <Zap className="w-5 h-5" />,
    description:
      "Consolidated electricity contracts for a national banking group with a focus on REGO-backed renewable energy.",
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&q=80",
    fullContent: {
      subtitle: "UK Multi-Site Banking Group",
      overview:
        "Developed a centralised, compliant approach to energy procurement for a national branch network.",
      approach: [
        "Consolidated electricity contracts across the network",
        "Secured REGO-backed renewable energy contracts",
        "Ensured alignment with internal ESG reporting",
        "Provided centralised visibility across all sites",
      ],
      outcome:
        "A compliant, efficient strategy delivering both financial savings and environmental accountability.",
    },
  },
];

export function SuccessStories() {
  const [selectedSlug, setSelectedSlug] = useState(null);
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const currentStory = caseStudies.find((s) => s.slug === selectedSlug);

  useEffect(() => {
    if (selectedSlug !== null) {
      const offset = 80;
      const element = sectionRef.current;
      if (element) {
        const top =
          element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [selectedSlug]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="py-12 md:py-16 bg-[#f4f7f0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {!selectedSlug ? (
          <>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div className="max-w-xl">
                <h2 className="text-2xl sm:text-4xl font-bold text-[#1a4d4d] mb-2 tracking-tight">
                  Success Stories
                </h2>
                <p className="text-slate-500 text-base">
                  Real-world results across diverse sectors in the UK.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="p-2.5 rounded-full border border-slate-200 bg-white text-[#1a4d4d] hover:bg-[#1a4d4d] hover:text-white transition-all shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="p-2.5 rounded-full border border-slate-200 bg-white text-[#1a4d4d] hover:bg-[#1a4d4d] hover:text-white transition-all shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {caseStudies.map((study) => (
                <div
                  key={study.slug}
                  className="min-w-[85vw] md:min-w-[calc((100%-48px)/3)] snap-start bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-md flex items-center gap-2 shadow-sm border border-slate-100">
                      <span className="text-[#1a4d4d] scale-90">
                        {study.icon}
                      </span>
                      <span className="text-[9px] font-bold uppercase text-[#1a4d4d] tracking-wider">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-1.5 text-green-600 mb-2 font-bold text-[11px] uppercase">
                      <TrendingUp className="w-3.5 h-3.5" /> {study.impact}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight min-h-[44px] line-clamp-2">
                      {study.title}
                    </h3>
                    <p className="text-slate-500 text-xs mb-4 flex-grow line-clamp-3 leading-relaxed">
                      {study.description}
                    </p>
                    <button
                      onClick={() => setSelectedSlug(study.slug)}
                      className="inline-flex items-center text-[#1a4d4d] font-bold text-xs hover:gap-2 transition-all"
                    >
                      View Details <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 max-w-6xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => setSelectedSlug(null)}
              className="mb-6 text-[#1a4d4d] hover:bg-white hover:text-green-700 font-semibold h-9 px-3 text-sm"
            >
              <Undo2 className="mr-2 w-3.5 h-3.5" /> Back to Stories
            </Button>

            <div className="grid lg:grid-cols-12 gap-8 bg-white p-5 md:p-8 rounded-[1.5rem] shadow-sm border border-slate-100">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-[#f4f7f0] rounded-md text-[#1a4d4d] scale-90">
                    {currentStory.icon}
                  </div>
                  <span className="text-[#1a4d4d] font-bold text-[11px] uppercase tracking-wider">
                    {currentStory.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                  {currentStory.title}
                </h2>
                <p className="text-base text-slate-500 font-medium mb-8">
                  {currentStory.fullContent.subtitle}
                </p>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                      Project Overview
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {currentStory.fullContent.overview}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      Our Approach
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {currentStory.fullContent.approach.map((item, i) => (
                        <div
                          key={i}
                          className="flex gap-3 items-center p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-sm transition-all group"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          <span className="text-slate-700 font-medium text-xs">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="bg-[#1a4d4d] text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                    <Zap className="absolute top-0 right-0 p-4 opacity-10 w-20 h-20" />
                    <h3 className="text-lg font-bold mb-2 relative z-10">
                      Strategic Outcome
                    </h3>
                    <p className="text-teal-50/90 text-sm leading-relaxed relative z-10">
                      {currentStory.fullContent.outcome}
                    </p>
                  </section>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-4">
                  <div className="relative rounded-xl shadow-md overflow-hidden h-48 md:h-64">
                    <img
                      src={currentStory.image}
                      className="w-full h-full object-cover"
                      alt="Case study"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-100 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <TrendingUp className="text-green-600 w-4 h-4" />
                      <p className="text-teal-900 text-[10px] font-bold uppercase tracking-widest">
                        Impact Created
                      </p>
                    </div>
                    <p className="text-3xl font-black text-green-700 tracking-tight">
                      {currentStory.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
