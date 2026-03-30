"use client"

import React from "react"
import Link from "next/link"
import { Zap, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Energy Contracts", href: "#" },
    { label: "Energy Efficiency", href: "#" },
    { label: "Modern Slavery Statement", href: "/modern-slavery-statement" },
    { label: "Trust & Compliance", href: "/trust-and-compliance" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Energy Guides", href: "#" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1a4d4d] text-white" suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#8b5aa6] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-xl tracking-tight text-white">Easy-Switch</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              Your trusted partner for business energy. We help you save costs, meet sustainability goals, and stay compliant.
            </p>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <span className="shrink-0 text-[#8b5aa6]"><Mail className="w-4 h-4" /></span>
                <span>hello@ecoenergy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="shrink-0 text-[#8b5aa6]"><Phone className="w-4 h-4" /></span>
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="shrink-0 text-[#8b5aa6]"><MapPin className="w-4 h-4" /></span>
                <span>123 Business Park, London, UK</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#8dae39] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#8dae39] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#8dae39] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 Easy-Switch. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#8dae39] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#8dae39] transition-colors">
              Terms and Conditions
            </Link>
            {/* <Link href="#" className="hover:text-[#8dae39] transition-colors">
              Cookies
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}