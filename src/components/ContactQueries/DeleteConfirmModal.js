import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const DeleteConfirmModal = ({ setDeleteId, handleDelete, deleteId }) => {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#1a4d4d]/60 backdrop-blur-sm px-4">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white p-8 rounded-[2.5rem] max-w-sm w-full text-center">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <AlertTriangle size={32} />
        </div>
        <h3 className="text-xl font-black text-[#1a4d4d]">Delete Inquiry?</h3>
        <p className="text-gray-500 text-sm mb-8 mt-2">Is data ko delete karne ke baad recover nahi kiya ja sakay ga.</p>
        <div className="flex gap-3">
          <button onClick={() => setDeleteId(null)} className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-xl font-bold">Cancel</button>
          <button onClick={() => handleDelete(deleteId)} className="flex-1 py-4 bg-red-500 text-white rounded-xl font-bold">Delete</button>
        </div>
      </motion.div>
    </div>
  );
};

export default DeleteConfirmModal;