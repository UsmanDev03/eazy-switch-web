"use client";

import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  LogOut, 
  Menu, 
  X, 
  User, 
  ChevronDown, 
  Bell 
} from "lucide-react";
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [adminData, setAdminData] = useState({ name: "Admin" });

  const router = useRouter();
  const pathname = usePathname();

  // Admin Profile Data fetch karne ke liye
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await fetch("/api/auth/profile");
        if (res.ok) {
          const data = await res.json();
          setAdminData(data);
        }
      } catch (error) {
        console.error("Failed to fetch admin data");
      }
    };
    fetchAdmin();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        router.push("/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const menuItems = [
    { icon: <LayoutDashboard size={18} />, label: "Dashboard", href: "/dashboard" },
    { icon: <MessageSquare size={18} />, label: "Contact Queries", href: "/queries" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      
      {/* --- SIDEBAR --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        <div className="p-8 flex justify-between items-center">
          <Link href="/dashboard" className="text-2xl font-black text-emerald-600 tracking-tighter flex items-center gap-2">
            <div className="w-2 h-7 bg-emerald-600 rounded-full"></div>
            Eazy Switch
          </Link>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}><X /></button>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={i} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-300 
                  ${isActive 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100 font-bold' 
                    : 'text-gray-400 hover:bg-emerald-50 hover:text-emerald-600'}`}
              >
                {item.icon}
                <span className="text-sm font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col md:ml-64 w-full">
        
        {/* --- TOPBAR --- */}
        <header className="h-20 bg-white/70 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 md:px-10 sticky top-0 z-40">
          <button className="md:hidden p-2 bg-emerald-50 text-emerald-600 rounded-lg" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} />
          </button>
          
          <div className="hidden sm:block">
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Management Portal</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 md:pl-6 md:border-l border-gray-100 group"
              >
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-gray-900 leading-none">
                    {adminData?.name || "Admin"}
                  </p>
                  <p className="text-[9px] text-emerald-500 font-black uppercase mt-1 tracking-wider">Super Admin</p>
                </div>
                
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-xs font-black shadow-md group-hover:bg-emerald-700 transition-all">
                  {adminData?.name ? adminData.name.substring(0, 2).toUpperCase() : "AD"}
                </div>
                
                <ChevronDown size={14} className={`text-gray-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProfileOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)}></div>
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-50 py-2 z-20 animate-in fade-in zoom-in slide-in-from-top-2 duration-200">
                    <Link 
                      href="/dashboard/profile" 
                      onClick={() => setIsProfileOpen(false)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <User size={16} />
                      </div>
                      <span className="font-medium">My Profile</span>
                    </Link>

                    <div className="h-px bg-gray-50 my-1 mx-2"></div>
                    
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                        <LogOut size={16} />
                      </div>
                      <span className="font-bold">Logout</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* --- PAGE CONTENT --- */}
        <main className="flex-1 p-6 md:p-10">
          {children}
        </main>

        {/* --- FOOTER --- */}
        <footer className="p-6 text-center border-t border-gray-100 bg-white">
          <p className="text-[11px] text-gray-400 font-medium tracking-widest uppercase">
            © 2026 Eazy Switch — All Rights Reserved. <span className="text-emerald-600 font-black italic ml-1">Powered by Teqnoor</span>
          </p>
        </footer>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}