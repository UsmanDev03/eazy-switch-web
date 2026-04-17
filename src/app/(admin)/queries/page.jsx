"use client";

import React, { useState, useEffect } from "react";
import { Search, Calendar as CalendarIcon, X } from "lucide-react"; // Icons add kiye
import { AnimatePresence } from "framer-motion";
import {
  QueryTable,
  QueryDetailModal,
  DeleteConfirmModal,
  Pagination,
  ImageViewer,
} from "../../../components/ContactQueries";

const ContactQueries = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // --- Naya State Date Filter ke liye ---
  // const [filterDate, setFilterDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/add_edit_contact");
        const data = await response.json();
        setQueries(Array.isArray(data) ? data : []);
      } catch (error) {
        setQueries([]);
      } finally {
        setLoading(false);
      }
    };
    fetchQueries();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/add_edit_contact?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setQueries((prev) => prev.filter((q) => q._id !== id));
        setDeleteId(null);
      }
    } catch (error) {
      alert("Error deleting.");
    }
  };
  const filteredQueries = queries.filter((q) => {
    const matchesSearch =
      q.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.business_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.email?.toLowerCase().includes(searchQuery.toLowerCase());

    // Date Range Logic
    let matchesRange = true;
    const rawDate = q.submittedAt; // Backend ka field name use kiya

    if (rawDate && (fromDate || toDate)) {
      const qDateObj = new Date(rawDate);

      // Check if date is valid (prevents RangeError)
      if (!isNaN(qDateObj.getTime())) {
        const qDateStr = qDateObj.toISOString().split("T")[0];

        if (fromDate && qDateStr < fromDate) matchesRange = false;
        if (toDate && qDateStr > toDate) matchesRange = false;
      } else {
        matchesRange = false; // Invalid date records hide when filtering
      }
    } else if (!rawDate && (fromDate || toDate)) {
      matchesRange = false; // No date records hide when filtering
    }

    return matchesSearch && matchesRange;
  });

  const totalPages = Math.ceil(filteredQueries.length / itemsPerPage);
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredQueries.slice(
    indexOfFirstItem,
    indexOfFirstItem + itemsPerPage,
  );

  return (
    <div className="p-4 md:p-10 space-y-8 max-w-7xl mx-auto min-h-screen bg-gray-50/30 font-sans">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-[#1a4d4d]">
            Consultancy Leads
          </h1>
          <p className="text-[#8b5aa6] text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
            Eazy Switch Inquiries
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:max-w-2xl">
          {/* Search Input */}
          <div className="relative w-full">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name, email..."
              className="w-full pl-12 pr-4 py-3 bg-white border rounded-2xl outline-none shadow-sm focus:border-[#8b5aa6] transition-all text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* IS JAGAH PAR YE NEW CODE PASTE KAREIN (Pehle wale date div ko hata kar) */}

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* From Date */}
            <div className="relative flex-1 sm:w-44">
              <input
                type="date"
                className="w-full pl-10 pr-4 py-3 bg-white border rounded-2xl outline-none shadow-sm focus:border-[#8b5aa6] transition-all text-[11px] cursor-pointer"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <span className="absolute -top-2 left-4 bg-white px-1 text-[9px] text-gray-400 font-bold uppercase">
                From
              </span>
              <CalendarIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
                size={14}
              />
            </div>

            {/* To Date */}
            <div className="relative flex-1 sm:w-44">
              <input
                type="date"
                className="w-full pl-10 pr-4 py-3 bg-white border rounded-2xl outline-none shadow-sm focus:border-[#8b5aa6] transition-all text-[11px] cursor-pointer"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
              <span className="absolute -top-2 left-4 bg-white px-1 text-[9px] text-gray-400 font-bold uppercase">
                To
              </span>
              <CalendarIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
                size={14}
              />
            </div>

            {/* Clear Button */}
            {(fromDate || toDate) && (
              <button
                onClick={() => {
                  setFromDate("");
                  setToDate("");
                }}
                className="p-2 text-red-400 hover:bg-red-50 rounded-full transition-colors"
                title="Clear Filters"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border shadow-sm overflow-hidden">
        <QueryTable
          loading={loading}
          currentItems={currentItems}
          setSelectedQuery={setSelectedQuery}
          setDeleteId={setDeleteId}
          onImageClick={(url) => setPreviewImage(url)}
          indexOfFirstItem={indexOfFirstItem}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          totalItems={filteredQueries.length}
        />
      </div>

      <AnimatePresence mode="wait">
        {selectedQuery && (
          <QueryDetailModal
            selectedQuery={selectedQuery}
            setSelectedQuery={setSelectedQuery}
          />
        )}
        {previewImage && (
          <ImageViewer
            imageUrl={previewImage}
            onClose={() => setPreviewImage(null)}
          />
        )}
        {deleteId && (
          <DeleteConfirmModal
            deleteId={deleteId}
            setDeleteId={setDeleteId}
            handleDelete={handleDelete}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactQueries;
