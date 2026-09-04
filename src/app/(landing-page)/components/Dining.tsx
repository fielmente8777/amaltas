"use client";

import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { landingPageData } from "./pagedata";
import { WhatsAppIcon } from "@/src/utils/icons";

export const Dining: React.FC = () => {
  const openWhatsApp = (title?: string) => {
    window.open(
      `https://wa.me/918868888494?text=Hi%2C%20I%20want%20to%20enquire%20about%20dining%20at%20Amaltas%20Villa${
        title ? `%20(${encodeURIComponent(title)})` : ""
      }.`,
      "_blank"
    );
  };

  const scrollToForm = () => {
    const el = document.getElementById("booking-form") || document.getElementById("form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#EEEEDC] py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b border-[#D6D2C7]">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-2 sm:space-y-3 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#B58A4A] font-semibold font-varela">
            {landingPageData.dining.tag}
          </p>
          <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-5xl text-[#30402A] leading-tight">
            Meals Worth Slowing<br />Down For
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-[1320px] mx-auto">
          {/* Left Side Image with Behind Offset Border Frame */}
          <div className="lg:col-span-6 relative pt-3 pl-3 sm:pt-4 sm:pl-4 flex items-center justify-center">
            {/* Background Offset Border Frame (Top: 0, Left: 0, offset by 16px behind the image) */}
            <div className="absolute top-0 left-0 w-[calc(100%-12px)] sm:w-[calc(100%-16px)] h-[calc(100%-12px)] sm:h-[calc(100%-16px)] border border-[#8C827A] rounded-[8px] pointer-events-none" />

            {/* Main Image (Top 16px, Left 16px offset, Height 518.84px, Radius 8px) */}
            <div className="relative w-full h-[260px] sm:h-[400px] lg:h-[518.84px] rounded-[8px] overflow-hidden shadow-sm z-10">
              <Image
                src={landingPageData.dining.image}
                alt="Dining at Amaltas Villa"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Side Dining List matching image height from top to bottom */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-2 sm:pt-4">
            <div className="flex flex-col justify-between h-full lg:h-[518.84px] border-y border-[#8C827A] divide-y divide-[#8C827A]">
              {landingPageData.dining.items.map((item, idx) => (
                <div key={idx} className="py-3.5 sm:py-5 flex flex-col justify-center space-y-1 sm:space-y-1.5 flex-1">
                  <h3 className="text-lg sm:text-2xl font-varela text-[#30402A] font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#6B635E] font-dm-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered CTAs at Bottom */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 font-sans">
          <button
            onClick={() => openWhatsApp()}
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
    </section>
  );
};

export default Dining;
