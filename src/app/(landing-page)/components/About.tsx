"use client";

import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { landingPageData } from "./pagedata";
import { WhatsAppIcon } from "@/src/utils/icons";

export const About: React.FC = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/918868888494?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20Amaltas%20Villa.", "_blank");
  };

  const scrollToForm = () => {
    const el = document.getElementById("booking-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#EEEEDC] py-12 md:py-20 px-4 sm:px-6 md:px-12 border-b border-[#D6D2C7]">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Heading & Buttons */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6">
          <p className="text-xs uppercase tracking-widest text-[#B58A4A] font-semibold font-varela">
            {landingPageData.about.tag}
          </p>

          <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-5xl text-[#30402A] leading-tight">
            {landingPageData.about.heading}
          </h2>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 font-sans">
            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#30402A] border border-[#30402A] px-5 sm:px-6 py-2.5 sm:py-3 rounded text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#30402A]" />
              Enquire Now
            </button>

            <button
              onClick={scrollToForm}
              className="flex items-center gap-2 bg-[#30402A] hover:bg-[#243120] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded text-xs sm:text-sm font-medium transition-all shadow-md cursor-pointer"
            >
              <FaCalendarAlt className="text-white text-sm" />
              Book Now
            </button>
          </div>
        </div>

        {/* Right Column: Paragraph Text (DM Sans, 22px/30px, Tertiary #6B635E, Font Normal) */}
        <div className="lg:col-span-6 space-y-3 sm:space-y-4 text-[#6B635E] text-sm sm:text-lg md:text-[22px] leading-relaxed md:leading-[30px] font-dm-sans font-normal tracking-normal">
          {landingPageData.about.paragraphs.map((p, idx) => (
            <p key={idx} className="font-normal text-[#6B635E]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
