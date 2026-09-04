"use client";

import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoAdd, IoRemove } from "react-icons/io5";
import { landingPageData } from "./pagedata";
import { WhatsAppIcon } from "@/src/utils/icons";

export const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918868888494?text=Hi%2C%20I%20have%20a%20question%20about%20Amaltas%20Villa.",
      "_blank"
    );
  };

  const scrollToForm = () => {
    const el = document.getElementById("booking-form") || document.getElementById("form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faqs" className="w-full bg-[#EEEEDC] py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b border-[#D6D2C7]">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#B58A4A] font-semibold font-varela">
              {landingPageData.faqs.tag}
            </p>

            <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-[40px] text-[#30402A] leading-tight max-w-md">
              {landingPageData.faqs.heading}
            </h2>

            {/* CTAs on Left Column */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4 font-sans">
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

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 border-y divide-y border-[#D6D2C7] divide-[#D6D2C7] font-sans">
            {landingPageData.faqs.items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 sm:py-5 flex items-center justify-between gap-4 sm:gap-6 text-left cursor-pointer hover:opacity-80 transition-opacity"
                    aria-expanded={isOpen}
                  >
                    <span className="font-varela text-base sm:text-xl font-medium text-[#30402A]">
                      {item.q}
                    </span>

                    <span className="shrink-0 text-[#B58A4A] text-lg sm:text-xl">
                      {isOpen ? <IoRemove /> : <IoAdd />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-4 sm:pb-5 pr-2 sm:pr-4 text-xs sm:text-sm md:text-base text-[#6B635E] leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
