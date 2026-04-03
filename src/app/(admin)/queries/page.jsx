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
      const data = await response.json();
      setQueries(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Fetch Error:", error.message);
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

  // Search logic
  const filteredQueries = queries.filter(
    (q) =>
      q.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.area?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // --- PAGINATION CALCULATIONS ---
  const totalPages = Math.ceil(filteredQueries.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredQueries.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to page 1 when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="p-4 md:p-10 space-y-8 max-w-7xl mx-auto font-sans">
      {/* HEADER SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Contact Queries</h1>
          <p className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Inbox Management</p>
        </div>

        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search name, area or email..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all shadow-sm text-sm"
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
              <Loader2 className="animate-spin text-blue-600" size={40} />
              <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Loading Records...</p>
            </div>
          ) : (
            <>
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-50">
                    <th className="px-8 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Student</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Email</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Mobile</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Area</th>
                    <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Pref. Time</th>
                    <th className="px-8 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {currentItems.map((q) => (
                    <tr key={q._id} className="hover:bg-blue-50/20 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xs shadow-lg shadow-blue-100">
                            {q.full_name?.charAt(0) || "U"}
                          </div>
                          <p className="text-sm font-black text-gray-900 leading-none">{q.full_name}</p>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-xs font-bold text-blue-500 underline decoration-blue-200">
                        {q.email || "N/A"}
                      </td>
                      <td className="px-6 py-5 text-xs font-bold text-gray-600">{q.mobile_number}</td>
                      <td className="px-6 py-5 text-xs font-bold text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-blue-500" />
                          {q.area}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-gray-500 text-[11px] font-bold">
                          <Clock size={14} className="text-blue-400" />
                          {q.preferred_time}
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => setSelectedQuery(q)} className="p-2.5 text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                            <Eye size={18} />
                          </button>
                          <button onClick={() => setDeleteId(q._id)} className="p-2.5 text-red-400 hover:bg-red-50 rounded-xl transition-all">
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
                    Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredQueries.length)} of {filteredQueries.length}
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => p - 1)}
                      className="p-2 rounded-xl border border-gray-200 bg-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      <ChevronLeft size={18} className="text-gray-600" />
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                          currentPage === i + 1
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-100"
                            : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {i + 1}
                      </button>
                    )).slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2))}

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
            <div className="p-20 text-center text-gray-400 font-bold text-sm">No queries found.</div>
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
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100]"
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
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                      <MessageCircle size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                      Query Details
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
                    <User size={16} className="text-blue-500" />
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">
                        Student Name
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedQuery.full_name}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                    <MapPin size={16} className="text-blue-500" />
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">
                        Area
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedQuery.area}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                    <Phone size={16} className="text-blue-500" />
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">
                        Mobile Number
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedQuery.mobile_number}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                    <Clock size={16} className="text-blue-500" />
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">
                        Preferred Time
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {selectedQuery.preferred_time}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-100 mb-8 relative overflow-hidden">
                  <p className="text-[10px] font-black uppercase opacity-60 mb-3 tracking-widest">
                    Message / Questions
                  </p>
                  <p className="text-lg leading-relaxed font-medium">
                    "{selectedQuery.message}"
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <a
                    href={`https://wa.me/${selectedQuery.mobile_number?.replace(/\D/g, "")}?text=Hello ${selectedQuery.full_name}, regarding your driving school request...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-100"
                  ></a> */}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-100"
                  >
                    <MessageCircle size={18} />
                    Reply on WhatsApp
                  </a>

                  <button
                    onClick={() => setSelectedQuery(null)}
                    className="flex-none px-10 py-5 bg-gray-100 text-gray-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-all"
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
          <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-[2.5rem] max-w-sm w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle size={32} />
              </div>
              <h3 className="text-xl font-black text-gray-900">
                Delete Permanently?
              </h3>
              <p className="text-gray-500 text-sm mb-8 mt-2">
                Is inquiry ko delete karne ke baad data recover nahi hoga.
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
