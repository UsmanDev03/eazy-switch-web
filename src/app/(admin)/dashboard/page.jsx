"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Loader2 } from 'lucide-react';
import Link from 'next/link';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ queries: 0, loading: true });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/queries/count");
        const data = await res.json();
        setStats({ queries: data.count || 0, loading: false });
      } catch (error) {
        console.error("Stats fetch error:", error);
        setStats({ queries: 0, loading: false });
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="bg-white md:min-h-[50vh] w-full p-6 md:p-12 select-none rounded-[2.5rem] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight leading-none">Dashboard</h1>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.25em] mt-2">
            Eazy Switch <span className="text-emerald-500">Overview & Analytics</span>
          </p>
        </div>

        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">

          {/* Contact Queries Card (Green Theme) */}
          <div className="relative overflow-hidden bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            {/* Background Decoration */}
            <div className="absolute top-[-10%] right-[-5%] w-32 h-32 bg-emerald-50/50 rounded-full group-hover:scale-125 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-emerald-100">
                <MessageSquare size={22} />
              </div>
              <h3 className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">Total Contact Queries</h3>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-gray-900 tracking-tighter">
                  {stats.loading ? (
                    <Loader2 className="animate-spin text-emerald-300" size={30} />
                  ) : (
                    stats.queries
                  )}
                </span>
                <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-2 py-0.5 rounded-lg flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Live
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-start">
          <Link href="/queries" className="w-full sm:w-auto">
            <button className="group bg-[#0f172a] text-white h-14 px-8 rounded-2xl font-bold flex items-center gap-4 hover:bg-emerald-600 transition-all active:scale-95 w-full justify-center shadow-lg shadow-gray-200">
              <MessageSquare size={18} className="text-emerald-400 group-hover:text-white" />
              <span className="text-xs tracking-wider uppercase font-black">View All Queries</span>
              <ArrowRight size={18} className="text-gray-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;