import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ currentPage, totalPages, setCurrentPage, indexOfFirstItem, indexOfLastItem, totalItems }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-50 flex items-center justify-between">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
        Showing {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, totalItems)} of {totalItems}
      </p>
      <div className="flex items-center gap-2">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)} className="p-2 rounded-xl border bg-white disabled:opacity-30">
          <ChevronLeft size={18} />
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-9 h-9 rounded-xl text-xs font-bold ${currentPage === i + 1 ? "bg-[#1a4d4d] text-white" : "bg-white border text-gray-600"}`}
          >
            {i + 1}
          </button>
        )).slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => p + 1)} className="p-2 rounded-xl border bg-white disabled:opacity-30">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;