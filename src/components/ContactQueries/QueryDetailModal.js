import React from "react";
import { motion } from "framer-motion";
import { X, User, Briefcase, Mail, Phone, Zap, MessageCircle } from "lucide-react";

const QueryDetailModal = ({ selectedQuery, setSelectedQuery }) => {
  return (
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
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1a4d4d]">Inquiry Details</span>
            </div>
            <button onClick={() => setSelectedQuery(null)} className="p-2 hover:bg-gray-100 rounded-full">
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <DetailItem icon={<User size={16} />} label="Client Name" value={`${selectedQuery.first_name} ${selectedQuery.last_name}`} />
            <DetailItem icon={<Briefcase size={16} />} label="Business" value={selectedQuery.business_name} />
            <DetailItem icon={<Mail size={16} />} label="Email Address" value={selectedQuery.email} />
            <DetailItem icon={<Phone size={16} />} label="Phone Number" value={selectedQuery.phone_number} />
          </div>

          <div className="p-8 bg-[#1a4d4d] rounded-[2.5rem] text-white mb-8">
            <p className="text-[10px] font-black uppercase opacity-60 mb-3 tracking-widest">Message / Situation</p>
            <p className="text-lg italic">"{selectedQuery.message}"</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`https://wa.me/${selectedQuery.phone_number?.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl font-black text-[10px] uppercase flex items-center justify-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href={`mailto:${selectedQuery.email}?subject=Inquiry&body=Hello ${selectedQuery.first_name}...`} className="flex-1 bg-[#6366f1] text-white py-4 rounded-2xl font-black text-[10px] uppercase flex items-center justify-center gap-2">
              <Mail size={16} /> Send Email
            </a>
            <button onClick={() => setSelectedQuery(null)} className="px-8 py-4 bg-gray-100 text-gray-600 rounded-2xl font-black text-[10px] uppercase">Close</button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const DetailItem = ({ icon, label, value }) => (
  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
    <div className="text-[#8b5aa6]">{icon}</div>
    <div>
      <p className="text-[9px] font-bold text-gray-400 uppercase">{label}</p>
      <p className="text-sm font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

export default QueryDetailModal;