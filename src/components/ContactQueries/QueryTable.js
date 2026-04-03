import React from "react";
import { Eye, Trash2, Briefcase, Loader2, Maximize2 } from "lucide-react";

const QueryTable = ({ loading, currentItems = [], setSelectedQuery, setDeleteId, onImageClick, indexOfFirstItem }) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-20 space-y-4">
        <Loader2 className="animate-spin text-[#1a4d4d]" size={40} />
        <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Loading Inquiries...</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[1100px]">
        <thead>
          <tr className="bg-gray-50/50 border-b border-gray-50">
            <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest w-16 text-center">#</th>
            <th className="px-8 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Client Name</th>
            <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Business</th>
            <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Email</th>
            <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Service</th>
            <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Bill / Image</th>
            <th className="px-8 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {currentItems && currentItems.length > 0 ? (
            currentItems.map((q, index) => (
              <tr 
                key={q._id || index} 
                className="hover:bg-[#1a4d4d]/5 transition-colors group cursor-pointer"
                onClick={() => setSelectedQuery(q)}
              >
                <td className="px-6 py-5 text-xs font-bold text-gray-400 text-center">
                  {indexOfFirstItem + index + 1}
                </td>
                <td className="px-8 py-5 font-black text-sm text-gray-900">
                  {q.first_name} {q.last_name}
                </td>
                <td className="px-6 py-5 text-xs font-bold text-gray-600">
                  {q.business_name}
                </td>
                <td className="px-6 py-5 text-xs font-bold text-[#8b5aa6] underline italic">
                  {q.email || "N/A"}
                </td>
                <td className="px-6 py-5">
                  <span className="px-3 py-1 bg-[#8b5aa6]/10 text-[#8b5aa6] rounded-full text-[10px] font-black uppercase">
                    {q.service_interested}
                  </span>
                </td>
                <td className="px-6 py-5">
                  {q.bill_url ? (
                    <div 
                      className="relative w-12 h-12 group/img cursor-pointer" 
                      onClick={(e) => {
                        e.stopPropagation(); // Yeh line row click ko rokti hai
                        onImageClick(q.bill_url); 
                      }}
                    >
                      <img src={q.bill_url} alt="Bill" className="w-full h-full object-cover rounded-lg border border-gray-200" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 rounded-lg transition-opacity flex items-center justify-center text-white">
                        <Maximize2 size={14} />
                      </div>
                    </div>
                  ) : (
                    <span className="text-[10px] font-bold text-gray-300 italic uppercase">No File</span>
                  )}
                </td>
                <td className="px-8 py-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={(e) => { e.stopPropagation(); setSelectedQuery(q); }} className="p-2 text-[#1a4d4d] hover:bg-gray-100 rounded-lg">
                      <Eye size={18} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); setDeleteId(q._id); }} className="p-2 text-red-400 hover:bg-red-50 rounded-lg">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="7" className="text-center py-10 text-gray-400">No data found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default QueryTable;