import React from "react";
import { motion } from "framer-motion";
import { X, FileText } from "lucide-react";

const ImageViewer = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#1a4d4d]/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl max-w-2xl w-full z-[210] overflow-hidden border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-100 text-[#1a4d4d] rounded-2xl flex items-center justify-center border border-gray-200 shadow-inner">
              <FileText size={20} />
            </div>
            <div>
              <p className="text-sm font-black text-gray-900 leading-none">
                Attached Bill Preview
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">
                Document View
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2.5 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-red-400"
          >
            <X size={20} />
          </button>
        </div>

        {/* Image Area */}
        <div className="bg-gray-50 rounded-[2.5rem] p-6 border border-gray-100 shadow-inner flex items-center justify-center mb-8 relative group">
          <img
            src={imageUrl}
            alt="Client Bill"
            className="max-w-full h-auto max-h-[55vh] object-contain rounded-xl"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-8 py-4 bg-gray-100 text-gray-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all border border-gray-200 shadow-sm"
          >
            Close Preview
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageViewer;