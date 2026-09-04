"use client";

import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { landingPageData } from "./pagedata";
import { LocationPinIcon, VideoPlayIcon, WhatsAppIcon } from "@/src/utils/icons";

export const Location: React.FC = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918868888494?text=Hi%2C%20I%20want%20to%20enquire%20about%20directions%20to%20Amaltas%20Villa.",
      "_blank"
    );
  };

  const scrollToForm = () => {
    const el = document.getElementById("booking-form") || document.getElementById("form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#EEEEDC] py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b border-[#D6D2C7]">
      <div className="max-w-[1320px] mx-auto space-y-8 md:space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Side: Address & Distance Table */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#B58A4A] font-semibold font-varela">
              {landingPageData.location.tag}
            </p>

            <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-5xl text-[#30402A] leading-tight">
              Close To The Gate, Far From The<br />Noise.
            </h2>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#6B635E] font-sans">
              <span className="shrink-0"><LocationPinIcon /></span>
              <p>{landingPageData.location.address}</p>
            </div>

            {/* Distance Matrix Table (No Icons, Clean Horizontal Border Dividers) */}
            <div className="border-y divide-y border-[#D6D2C7] divide-[#D6D2C7] text-xs sm:text-sm font-sans">
              {landingPageData.location.matrix.map((row, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 sm:py-3.5">
                  <span className="text-[#6B635E] font-normal">{row.place}</span>
                  <span className="text-[#30402A] font-medium">{row.distance}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2 font-sans">
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#30402A] border border-[#30402A] px-5 sm:px-6 py-2.5 sm:py-3 rounded text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#30402A]" />
                Enquire Now
              </button>

              <button
                onClick={scrollToForm}
                className="flex items-center gap-2 bg-[#30402A] hover:bg-[#243120] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-md"
              >
                <FaCalendarAlt className="text-white text-sm" />
                Book Now
              </button>
            </div>
          </div>

          {/* Right Side: Image Showcase with 80x80 Video Play Button Overlay (648px x 600px, 8px radius) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[648px] h-[260px] sm:h-[420px] lg:h-[600px] rounded-[8px] overflow-hidden shadow-lg border border-[#D6D2C7] group">
              <Image
                src={landingPageData.location.videoPlaceholder}
                alt="Amaltas Exterior View"
                fill
                className="object-cover"
              />

              {/* OVERLAY PLAY BUTTON SVG (80x80) */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <button
                  onClick={openWhatsApp}
                  aria-label="Play Tour Video"
                  className="transition-transform hover:scale-110 active:scale-95 cursor-pointer drop-shadow-2xl scale-75 sm:scale-100"
                >
                  <VideoPlayIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
