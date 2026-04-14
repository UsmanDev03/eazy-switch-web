import React from 'react';

const ICOBadge = ({ registrationNumber = "PENDING", className = "" }) => {
  return (
    <div className={`flex mt-6 items-center gap-3 bg-white/5 p-2 px-3 rounded-lg border border-white/10 ${className}`}>
      {/* ICO Logo Placeholder - Jab image mil jaye to yahan <img> tag laga dena */}
      <div className="flex items-center justify-center w-8 h-8 bg-[#005a9c] rounded text-white font-bold text-[10px]">
        ICO.
      </div>
      
      <div className="flex flex-col">
        <span className="text-[8px] text-white/40 leading-none uppercase tracking-wider">
          Data Protection
        </span>
        <span className="text-[10px] text-white font-mono font-bold leading-tight">
          {registrationNumber}
        </span>
      </div>
    </div>
  );
};

export default ICOBadge;