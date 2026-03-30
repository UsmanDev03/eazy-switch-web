"use client";
import React from "react";
import { FileCheck, MapPin, Gavel } from "lucide-react";

export const CompanyInfo = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Area */}
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a4d4d] mb-3">
              Company Information
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
              Eazy Switch Limited is registered in England and Wales. We operate with full transparency 
              and adhere to the highest standards in the energy consultancy sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Registration Details */}
            <div className="flex items-start gap-4 p-6 bg-[#fcfdfa] border border-gray-100 rounded-2xl">
              <div className="w-10 h-10 bg-[#1a4d4d]/5 rounded-xl flex items-center justify-center text-[#1a4d4d] shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#1a4d4d] text-base">Eazy Switch Limited</h4>
                <p className="text-gray-500 text-xs mt-1">Company No: <span className="font-mono font-bold text-[#8dae39]">12483102</span></p>
              </div>
            </div>

            {/* 2. Registered Office */}
            <div className="flex items-start gap-4 p-6 bg-[#fcfdfa] border border-gray-100 rounded-2xl">
              <div className="w-10 h-10 bg-[#8dae39]/5 rounded-xl flex items-center justify-center text-[#8dae39] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#1a4d4d] text-base">Registered Office</h4>
                <p className="text-gray-500 text-xs mt-1 leading-tight">
                  Unit 14 Clements Court, Clements Lane, Ilford, IG1 2QY
                </p>
              </div>
            </div>

            {/* 3. ADR Membership */}
            <div className="flex items-start gap-4 p-6 bg-[#1a4d4d] rounded-2xl text-white shadow-sm">
              <div className="w-10 h-10 bg-[#8dae39] rounded-xl flex items-center justify-center text-[#1a4d4d] shrink-0">
                <Gavel className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base">Energy Ombudsman</h4>
                <p className="text-gray-300 text-[10px] uppercase tracking-wider mt-1">Member No: <span className="font-mono text-[#8dae39] font-bold">C35EAZY01</span></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};