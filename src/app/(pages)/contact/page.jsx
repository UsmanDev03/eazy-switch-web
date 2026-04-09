"use client";
import React, { useState, useRef } from "react";
import { Navbar } from "@/components/layouts/navbar";
import toast from "react-hot-toast";
import {
  Mail,
  Phone,
  Clock,
  UploadCloud,
  Send,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  ChevronRight,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactPage = () => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // 1. Form State Handle karna
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    business_name: "",
    email: "",
    phone_number: "",
    service_interested: "Business Electricity",
    message: "",
    bill_file: null,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("business_name", formData.business_name);
    data.append("email", formData.email);
    data.append("phone_number", formData.phone_number);
    data.append("service_interested", formData.service_interested);
    data.append("message", formData.message);

    if (formData.bill_file) {
      data.append("bill_file", formData.bill_file);
    }

    try {
      const response = await fetch("/api/add_edit_contact", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        // Success Toast in English
        toast.success("Success! Your request has been submitted.", {
          icon: "🚀",
        });

        // Form reset logic
        setFormData({
          first_name: "",
          last_name: "",
          business_name: "",
          email: "",
          phone_number: "",
          service_interested: "Business Electricity",
          message: "",
          bill_file: null,
        });
      } else {
        // Error Toast in English
        toast.error("Error: Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Network Error! Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };
  // 2. Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. File Selection Handler (Max 5MB)
  const handleFileChange = (file) => {
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size is too large! Please upload under 5MB.");
        return;
      }
      setFormData((prev) => ({ ...prev, bill_file: file }));
      console.log("File Selected:", file.name);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };
  return (
    <div className="min-h-screen bg-[#fcfdfd] text-[#1a4d4d]">
      <section
        className="relative overflow-hidden bg-[#1a4d4d]"
        suppressHydrationWarning={true}
      >
        <div className="relative bg-[#1a4d4d] min-h-[55vh] flex items-center justify-center">
          {/* 1. Background Image Layer - Updated Stable Link for Review/Data */}
          <div className="absolute inset-0 z-0 bg-[#1a4d4d]">
            <Image
              // Professional Data Analysis / Guidance Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
              alt="Professional Utility Data Review"
              fill
              priority
              className="object-cover opacity-25" // Opacity controlled for readability
              sizes="100vw"
            />
            {/* Dark Green Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a4d4d]/80 via-[#1a4d4d]/20 to-[#1a4d4d]" />
          </div>

          {/* 2. Navbar - Remains absolute */}
          <Navbar />

          {/* 3. Content Container */}
          <div className="container mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center relative z-10">
            {/* Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-md tracking-tight">
              Get a Professional <br />
              <span className="text-[#8dae39]">Utility Review.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-200 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              If your business wants to understand its energy or water costs
              more clearly, our experts can provide{" "}
              <span className="text-white font-medium italic underline decoration-[#8dae39]">
                independent review and guidance.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section - EXACT SAME LAYOUT */}
      <section className="py-16 container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* --- LEFT SIDE: TRUST POINTS --- */}
          <motion.div {...fadeInUp} className="lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-3xl font-black text-[#1a4d4d] mb-6 tracking-tight">
                Connect With Us
              </h3>
              <p className="text-gray-500 font-medium mb-8">
                Fill out the form and our team will get back to you within 24
                business hours.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    val: "sultan@eazy-switch.com",
                    color: "#8b5aa6",
                  },
                  {
                    icon: Phone,
                    label: "Call",
                    val: "+44 793 050 6303",
                    color: "#8dae39",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="p-4 rounded-2xl transition-all bg-white shadow-sm border border-gray-100 group-hover:border-[#8dae39]">
                      <item.icon
                        className="w-6 h-6"
                        style={{ color: item.color }}
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-black text-gray-400 tracking-widest">
                        {item.label}
                      </p>
                      <p className="font-extrabold text-xl text-[#1a4d4d]">
                        {item.val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t-2 border-gray-100 space-y-6">
              <h4 className="text-sm uppercase tracking-[0.25em] font-black text-gray-400 mb-4">
                Why Choose Us?
              </h4>
              {[
                "Independent professional review",
                "Full market transparency",
                "Dedicated consultant support",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="bg-[#8dae39] rounded-xl p-2 shadow-lg shadow-[#8dae39]/20 group-hover:rotate-12 transition-transform">
                    <CheckCircle2 className="text-white w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold text-[#1a4d4d] leading-tight">
                    {text}
                  </span>
                </div>
              ))}

              <div className="mt-8 p-6 bg-[#1a4d4d]/5 rounded-[2rem] flex items-center gap-4 border border-[#1a4d4d]/10">
                <ShieldCheck className="w-10 h-10 text-[#1a4d4d] shrink-0" />
                <p className="text-sm text-[#1a4d4d]/80 font-semibold leading-snug">
                  Encrypted{" "}
                  <span className="text-[#1a4d4d] font-black">256-bit</span>{" "}
                  data handling.
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: FORM --- */}
          <motion.div
            {...fadeInUp}
            className="lg:w-2/3 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Row 1: Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d]">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold focus:border-[#8b5aa6] outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d]">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold focus:border-[#8b5aa6] outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Row 2: Business & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d]">
                    Business Name{" "}
                    <span className="text-gray-400 text-xs normal-case">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleChange}
                    placeholder="Company Ltd"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold focus:border-[#8b5aa6] outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@company.com"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold focus:border-[#8b5aa6] outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Row 3: Phone & Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d]">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    required
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="+44 123 456 7890"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold focus:border-[#8b5aa6] outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d]">
                    Service Interested In{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="service_interested"
                      required
                      value={formData.service_interested}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-bold appearance-none cursor-pointer outline-none focus:border-[#8b5aa6] transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="Business Electricity">
                        Business Electricity
                      </option>
                      <option value="Business Gas">Business Gas</option>
                      <option value="Water Services">Water Services</option>
                      <option value="Solar Services">Solar Services</option>
                      <option value="EV Charging Services">
                        EV Charging Services
                      </option>
                      <option value="General Consultancy">
                        General Consultancy
                      </option>
                    </select>
                    <ChevronRight className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#1a4d4d] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Full Width: Message Area */}
              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d] flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#8b5aa6]" />
                  How can our experts help?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your current utility situation..."
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-[#1a4d4d] font-semibold focus:border-[#8b5aa6] outline-none transition-all resize-none shadow-sm"
                ></textarea>
              </div>

              {/* Full Width: File Upload */}
              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-[#1a4d4d]">
                  Attach Recent Bill (Optional)
                  {formData.bill_file && (
                    <span className="text-[#8dae39] font-bold italic ml-2">
                      - {formData.bill_file.name}
                    </span>
                  )}
                </label>
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragActive(false);
                    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                      handleFileChange(e.dataTransfer.files[0]);
                    }
                  }}
                  onClick={() => fileInputRef.current.click()}
                  className={`relative border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer overflow-hidden min-h-[160px] ${
                    dragActive
                      ? "border-[#8dae39] bg-[#8dae39]/10"
                      : "border-gray-300 bg-gray-50 hover:bg-white hover:border-[#8b5aa6]"
                  }`}
                >
                  {formData.bill_file &&
                  formData.bill_file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(formData.bill_file)}
                      alt="Preview"
                      className="absolute inset-0 w-full h-full object-cover"
                      onLoad={(e) => URL.revokeObjectURL(e.target.src)}
                    />
                  ) : (
                    <>
                      <UploadCloud
                        className={`w-10 h-10 mb-2 ${dragActive ? "text-[#8dae39]" : "text-gray-400"}`}
                      />
                      <p className="text-sm font-bold text-[#1a4d4d]">
                        {formData.bill_file
                          ? "File Selected!"
                          : "Drop bill here or browse files"}
                      </p>
                    </>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={(e) => handleFileChange(e.target.files[0])}
                  />
                </div>
              </div>

              {/* Human Verification Checkbox */}
              <div className="flex items-start gap-3 px-2 py-2">
                <div className="flex items-center h-5">
                  <input
                    id="human_verify"
                    name="is_human"
                    type="checkbox"
                    required
                    checked={formData.is_human || false}
                    onChange={(e) => {
                      handleChange({
                        target: {
                          name: "is_human",
                          value: e.target.checked,
                        },
                      });
                    }}
                    className="w-5 h-5 rounded border-2 border-gray-300 text-[#8b5aa6] focus:ring-[#8b5aa6] cursor-pointer transition-all"
                  />
                </div>
                <label
                  htmlFor="human_verify"
                  className="text-sm font-bold text-[#1a4d4d] cursor-pointer select-none"
                >
                  I am not a robot. <span className="text-red-500">*</span>
                  <p className="text-[10px] text-gray-400 font-medium normal-case tracking-normal">
                    Confirming you are a real person for security purposes.
                  </p>
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ y: -3, backgroundColor: "#153d3d" }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-6 text-white font-black text-xl rounded-2xl flex items-center justify-center gap-4 shadow-xl transition-all mt-4 
    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#1a4d4d]"}`}
              >
                {loading ? "Sending Lead..." : "Get My Free Audit"}
                <Send className={`w-6 h-6 ${loading ? "animate-pulse" : ""}`} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* --- OFFICE & LOCATION SECTION - EXACT SAME --- */}
      <section className="py-12 bg-gray-50/50 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-[#1a4d4d] mb-4">
                Our <span className="text-[#8dae39]">Offices</span>
              </h2>
              <p className="text-gray-500 font-bold">
                Prefer a face-to-face chat? Visit our headquarters in the heart
                of the business district.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#8b5aa6] font-black uppercase tracking-widest text-sm cursor-pointer hover:gap-4 transition-all">
              Open in Google Maps <ExternalLink className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Map Area */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white p-4 rounded-[2.5rem] shadow-xl border border-gray-100 min-h-[400px] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="bg-[#1a4d4d] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                    <MapPin className="text-white w-8 h-8" />
                  </div>
                  <p className="font-black text-[#1a4d4d]">
                    Google Maps Integration
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Unit 14 Clements Court, Clements Lane,
                    <br /> Essex. IG1 2QY
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Address & Hours Detail Cards */}
            <div className="lg:col-span-5 grid gap-6">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#8dae39]/10 w-fit p-3 rounded-xl mb-4">
                  <Clock className="w-6 h-6 text-[#8dae39]" />
                </div>
                <h4 className="font-black text-[#1a4d4d] uppercase text-xs tracking-widest mb-2 opacity-50">
                  Business Hours
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between font-bold text-[#1a4d4d]">
                    <span>Monday - Friday</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-400">
                    <span>Weekend</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a4d4d] p-8 rounded-[2rem] text-white shadow-xl shadow-[#1a4d4d]/20 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-black uppercase text-xs tracking-widest mb-4 text-[#8dae39]">
                    Direct Contact
                  </h4>
                  <div className="space-y-4">
                    <p className="text-xl font-extrabold leading-tight">
                      Switchboard: <br /> +44 793 050 6303
                    </p>
                    <p className="text-xl font-extrabold leading-tight">
                      Support: <br /> sultan@eazy-switch.com
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 opacity-10">
                  <Phone className="w-32 h-32 rotate-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
