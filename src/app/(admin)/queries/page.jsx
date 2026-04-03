"use client";

import React, { useState, useEffect } from "react";
import {
  Eye,
  Trash2,
  Search,
  X,
  MessageCircle,
  AlertTriangle,
  Phone,
  MapPin,
  Clock,
  User,
  Mail,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactQueries = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- PAGINATION STATES ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const API_URL = "/api/add_edit_contact";

  const fetchQueries = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);

      // Check karein ke response theek hai ya nahi
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      // Check karein ke content-type JSON hi hai
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text(); // Debugging ke liye HTML dekhne ke liye
        console.error("Non-JSON response received:", text);
        setQueries([]);
        return;
      }

      const data = await response.json();
      setQueries(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Fetch Error:", error.message);
      setQueries([]); // Error ki surat mein khali array set karein
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}?id=${id}`, { method: "DELETE" });
      if (response.ok) {
        setQueries((prev) => prev.filter((q) => q._id !== id));
        setDeleteId(null);
      }
    } catch (error) {
      alert("Something went wrong while deleting.");
    }
  };

  // Search logic (Updated for new fields)
  const filteredQueries = queries.filter(
    (q) =>
      q.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.business_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.email?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // --- PAGINATION CALCULATIONS ---
  const totalPages = Math.ceil(filteredQueries.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredQueries.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="p-4 md:p-10 space-y-8 max-w-7xl mx-auto font-sans">
      {/* HEADER SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-[#1a4d4d] tracking-tight">
            Consultancy Leads
          </h1>
          <p className="text-[#8b5aa6] text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
            Audit Inquiries Management
          </p>
        </div>

        <div className="relative w-full lg:max-w-md">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by name, business or email..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-[#8b5aa6]/10 focus:border-[#8b5aa6] transition-all shadow-sm text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center p-20 space-y-4">
              <Loader2 className="animate-spin text-[#1a4d4d]" size={40} />
              <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">
                Loading Inquiries...
              </p>
            </div>
          ) : (
            <>
              <table className="w-full text-left border-collapse min-w-[1100px]">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-50">
                    <th className="px-8 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                      Client Name
                    </th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                      Business
                    </th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                      Email
                    </th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                      Service
                    </th>
                    {/* Naya Column Image ke liye */}
                    <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                      Bill / Image
                    </th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {currentItems.map((q) => (
                    <tr
                      key={q._id}
                      className="hover:bg-[#1a4d4d]/5 transition-colors group"
                    >
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#1a4d4d] text-white rounded-xl flex items-center justify-center font-bold text-xs shadow-lg shadow-[#1a4d4d]/20">
                            {q.first_name?.charAt(0) || "C"}
                          </div>
                          <p className="text-sm font-black text-gray-900 leading-none">
                            {q.first_name} {q.last_name}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-xs font-bold text-gray-600">
                        <div className="flex items-center gap-2">
                          <Briefcase size={14} className="text-[#8b5aa6]" />
                          {q.business_name}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-xs font-bold text-[#8b5aa6] underline decoration-[#8b5aa6]/20">
                        {q.email || "N/A"}
                      </td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 bg-[#8b5aa6]/10 text-[#8b5aa6] rounded-full text-[10px] font-black uppercase tracking-tighter">
                          {q.service_interested}
                        </span>
                      </td>

                      {/* Image Preview logic */}
                      <td className="px-6 py-5">
                        {q.bill_url ? (
                          <div
                            className="relative w-12 h-12 group/img cursor-pointer"
                            onClick={() => setSelectedQuery(q)}
                          >
                            <img
                              src={q.bill_url}
                              alt="Bill"
                              className="w-full h-full object-cover rounded-lg border border-gray-200 shadow-sm transition-transform group-hover/img:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 rounded-lg transition-opacity flex items-center justify-center text-white">
                              <Eye size={12} />
                            </div>
                          </div>
                        ) : (
                          <span className="text-[10px] font-bold text-gray-300 italic uppercase">
                            No File
                          </span>
                        )}
                      </td>

                      <td className="px-8 py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedQuery(q)}
                            className="p-2.5 text-[#1a4d4d] hover:bg-[#1a4d4d]/10 rounded-xl transition-all"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => setDeleteId(q._id)}
                            className="p-2.5 text-red-400 hover:bg-red-50 rounded-xl transition-all"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* --- PAGINATION CONTROLS --- */}
              {totalPages > 1 && (
                <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-50 flex items-center justify-between">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Showing {indexOfFirstItem + 1} -{" "}
                    {Math.min(indexOfLastItem, filteredQueries.length)} of{" "}
                    {filteredQueries.length}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => p - 1)}
                      className="p-2 rounded-xl border border-gray-200 bg-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      <ChevronLeft size={18} className="text-gray-600" />
                    </button>

                    {[...Array(totalPages)]
                      .map((_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                            currentPage === i + 1
                              ? "bg-[#1a4d4d] text-white shadow-lg shadow-[#1a4d4d]/20"
                              : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))
                      .slice(
                        Math.max(0, currentPage - 3),
                        Math.min(totalPages, currentPage + 2),
                      )}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => p + 1)}
                      className="p-2 rounded-xl border border-gray-200 bg-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      <ChevronRight size={18} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {!loading && filteredQueries.length === 0 && (
            <div className="p-20 text-center text-gray-400 font-bold text-sm">
              No queries found.
            </div>
          )}
        </div>
      </div>

      {/* --- DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedQuery && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedQuery(null)}
              className="fixed inset-0 bg-[#1a4d4d]/40 backdrop-blur-md z-[100]"
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="fixed inset-x-4 top-10 mx-auto max-w-2xl bg-white shadow-2xl z-[101] rounded-[3rem] overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#1a4d4d]/10 text-[#1a4d4d] rounded-2xl flex items-center justify-center">
                      <Zap size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1a4d4d]">
                      Inquiry Details
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedQuery(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-gray-400" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                    <User size={16} className="text-[#8b5aa6]" />
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">
                        Client Name
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedQuery.first_name} {selectedQuery.last_name}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                    <Briefcase size={16} className="text-[#8b5aa6]" />
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">
                        Business
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedQuery.business_name}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                    <Mail size={16} className="text-[#8b5aa6]" />
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">
                        Email Address
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedQuery.email}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                    <Phone size={16} className="text-[#8b5aa6]" />
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">
                        Phone Number
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedQuery.phone_number}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-[#1a4d4d] rounded-[2.5rem] text-white shadow-xl shadow-[#1a4d4d]/10 mb-8 relative overflow-hidden">
                  <p className="text-[10px] font-black uppercase opacity-60 mb-3 tracking-widest">
                    Message / Situation
                  </p>
                  <p className="text-lg leading-relaxed font-medium italic">
                    "{selectedQuery.message}"
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Service: {selectedQuery.service_interested}
                    </span>
                    {selectedQuery.bill_url && (
                      <span className="text-[10px] font-bold text-[#8dae39]">
                        Bill Attached ✓
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${selectedQuery.phone_number?.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-100"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>

                  {/* Email Button */}
                  <a
                    href={`mailto:${selectedQuery.email}?subject=Regarding Your Inquiry - Eazy Switch&body=Hello ${selectedQuery.first_name}, thank you for contacting us regarding ${selectedQuery.service_interested}...`}
                    className="flex-1 bg-[#6366f1] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#4f46e5] transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
                  >
                    <Mail size={16} />
                    Send Email
                  </a>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedQuery(null)}
                    className="flex-none px-8 py-4 bg-gray-100 text-gray-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- DELETE MODAL --- */}
      <AnimatePresence>
        {deleteId && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#1a4d4d]/60 backdrop-blur-sm px-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-[2.5rem] max-w-sm w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-xl font-black text-[#1a4d4d]">
                Delete Inquery?
              </h3>
              <p className="text-gray-500 text-sm mb-8 mt-2">
                Is data ko delete karne ke baad recover nahi kiya ja sakay ga.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteId(null)}
                  className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteId)}
                  className="flex-1 py-4 bg-red-500 text-white rounded-xl font-bold shadow-lg shadow-red-100"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactQueries;
