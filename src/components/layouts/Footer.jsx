"use client";

import React from "react";
import Link from "next/link";
import { Zap, Mail, Phone, MapPin, ArrowRight, Smartphone } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import ICOBadge from "../ICOBadge";

const footerLinks = {
  // Direct services from your folder structure
  services: [
    { label: "Business Electricity", href: "/services/electricity" },
    { label: "Business Gas", href: "/services/gas" },
    { label: "Water Services", href: "/services/water" },
    { label: "New Connections", href: "/services/connections" },
    { label: "Solar", href: "/services/solar" },
    { label: "EV Charging", href: "/services/ev-charging" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Expertise", href: "/expertise" },
    { label: "Trust & Compliance", href: "/trust-and-compliance" },
    { label: "Complaints Procedure", href: "/complaints-procedure" },
  ],
  resources: [
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer
      className="bg-[#1a4d4d] text-white border-t border-white/5"
      suppressHydrationWarning={true}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="relative flex items-center justify-center 
                        w-[160px] md:w-[200px] h-[50px] md:h-[60px] 
                        bg-white p-2 rounded-xl mb-6
                        transition-all duration-300 hover:scale-105 active:scale-95
                        shadow-[0_4px_20px_rgba(255,255,255,0.15)] 
                        border border-white/10"
            >
              <Image
                src="/logo/logo.png"
                alt="Eazy Switch Logo"
                fill
                priority
                className="object-contain p-1.5"
                sizes="(max-width: 768px) 160px, 200px"
              />
            </Link>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed text-sm">
              Empowering UK businesses with transparent energy solutions. We
              simplify procurement, reduce costs, and drive sustainability.
            </p>

            <div className="space-y-4 text-sm text-white/80">
              {/* Email */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <Mail className="w-4 h-4 text-[#8dae39] group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:sultan@eazy-switch.com"
                  className="group-hover:text-white transition-colors"
                >
                  sultan@eazy-switch.com
                </a>
              </div>

              {/* Landline Number */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <Phone className="w-4 h-4 text-[#8dae39] group-hover:scale-110 transition-transform" />
                <a
                  href="tel:02039610022"
                  className="group-hover:text-white transition-colors"
                >
                  0203 961 0022
                </a>
              </div>

              {/* Mobile Number */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <Smartphone className="w-4 h-4 text-[#8dae39] group-hover:scale-110 transition-transform" />
                <a
                  href="tel:07930506303"
                  className="group-hover:text-white transition-colors"
                >
                  +44 793 050 6303
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <MapPin className="w-4 h-4 text-[#8dae39] mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors leading-relaxed">
                  Unit 14 Clements Court, Clements Lane,
                  <br /> Essex. IG1 2QY
                </span>
              </div>
            </div>
          </div>

          {/* Attractive Services Column */}
          <div>
            <h4 className="font-bold mb-6 text-white text-sm border-l-4 border-[#8dae39] pl-3">
              Our Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#8dae39] flex items-center gap-2 transition-all group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold mb-6 text-white text-sm border-l-4 border-[#8dae39] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#8dae39] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal/Resources Column */}
          <div>
            <h4 className="font-bold mb-6 text-white text-sm border-l-4 border-[#8dae39] pl-3">
              Support
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#8dae39] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ICOBadge registrationNumber="ZB123456" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-white/40 uppercase tracking-widest">
          {/* Left Side: Copyright */}
          <p>
            © 2026 Eazy Switch Limited. All rights reserved. | Powered by{" "}
            <a
              href="https://teqnoor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#8dae39] transition-colors font-bold tracking-normal"
            >
              TEQNOOR
            </a>
          </p>

          {/* Right Side: Badge and Legal Link */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/modern-slavery-statement"
              className="hover:text-[#8dae39] transition-colors whitespace-nowrap"
            >
              Modern Slavery Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
