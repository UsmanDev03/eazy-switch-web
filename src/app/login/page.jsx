"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Loader2, Zap } from "lucide-react"; // Zap icon energy ke liye

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        // Dashboard path update (kyunke hum admin group use kar rahe hain)
        router.push("/admin/dashboard"); 
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.message || "Invalid credentials!");
      }
    } catch (err) {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl p-8 md:p-10 border border-gray-100">
        <div className="text-center mb-8">
          {/* Energy Theme Icon: Green/Teal shade */}
          <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-100/50">
            <Zap size={30} fill="currentColor" />
          </div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Eazy Switch Admin</h1>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
            Energy Consultancy Management
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100 text-center animate-pulse">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input
                type="email"
                placeholder="admin@eazyswitch.co.uk"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all text-sm font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all text-sm font-medium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white py-4 rounded-xl font-black text-[11px] uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-2 group"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <>
                Access Dashboard
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-300 text-[10px] font-medium">
            &copy; 2026 Eazy Switch Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;