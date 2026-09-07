"use client";

import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoAdd, IoRemove } from "react-icons/io5";
import { landingPageData } from "./pagedata";
import { WhatsAppIcon } from "@/src/utils/icons";

import { openWhatsApp, scrollToForm } from "@/src/utils/constent";

export const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full bg-[#FDF9EE] py-8 sm:py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b border-[#D6D2C7]">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-6">
            <p className="text-[14px] sm:text-[16px] uppercase tracking-widest text-[#B58A4A] font-medium font-dm-sans">
              {landingPageData.faqs.tag}
            </p>

            <h2
              className="heading-h2 font-varela text-2xl sm:text-3xl lg:text-[40px] text-[#30402A] leading-tight max-w-full lg:max-w-[520px]"
              dangerouslySetInnerHTML={{ __html: landingPageData.faqs.heading }}
            />

            {/* Desktop CTAs on Left Column */}
            <div className="hidden lg:flex flex-row items-center gap-[12px] pt-1 sm:pt-4 font-open-sans">
              <button
                onClick={openWhatsApp}
                className="w-[160px] h-[44px] flex items-center justify-center gap-[8px] bg-white hover:bg-gray-50 text-[#30402A] border border-[#30402A] px-[16px] py-[12px] rounded-[4px] text-sm font-normal transition-all cursor-pointer shadow-sm whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#30402A]" />
                Enquire Now
              </button>

              <button
                onClick={scrollToForm}
                className="w-[160px] h-[44px] flex items-center justify-center gap-[8px] bg-[#30402A] hover:bg-[#243120] text-white border border-[#30402A] px-[16px] py-[12px] rounded-[4px] text-sm font-normal transition-all cursor-pointer shadow-md whitespace-nowrap"
              >
                <FaCalendarAlt className="text-white text-xs" />
                Book Now
              </button>
            </div>
          </div>

          {/* Right Column: FAQ Accordion (Width: Fixed 647px on lg, Height: Hug) */}
          <div className="lg:col-span-7 flex flex-col items-start lg:items-end w-full">
            <div className="w-full max-w-full lg:w-[647px] border-y divide-y border-[#D6D2C7] divide-[#D6D2C7] font-sans">
              {landingPageData.faqs.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="transition-colors">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-3.5 sm:py-4 lg:py-5 flex items-center justify-between gap-3 sm:gap-6 text-left cursor-pointer hover:opacity-80 transition-opacity"
                      aria-expanded={isOpen}
                    >
                      <span className="font-varela text-base sm:text-lg lg:text-xl font-normal text-[#30402A]">
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
                        <p className="pb-3.5 sm:pb-5 pr-2 sm:pr-4 text-xs sm:text-sm md:text-base text-[#6B635E] font-manrope font-normal leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile CTAs (Positioned below accordion on mobile) */}
            <div className="flex lg:hidden flex-row items-center gap-[12px] pt-6 font-open-sans w-full">
              <button
                onClick={openWhatsApp}
                className="flex-1 h-[44px] flex items-center justify-center gap-[8px] bg-white hover:bg-gray-50 text-[#30402A] border border-[#30402A] px-[16px] py-[12px] rounded-[4px] text-sm font-normal transition-all cursor-pointer shadow-sm whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#30402A]" />
                Enquire Now
              </button>

              <button
                onClick={scrollToForm}
                className="flex-1 h-[44px] flex items-center justify-center gap-[8px] bg-[#30402A] hover:bg-[#243120] text-white border border-[#30402A] px-[16px] py-[12px] rounded-[4px] text-sm font-normal transition-all cursor-pointer shadow-md whitespace-nowrap"
              >
                <FaCalendarAlt className="text-white text-xs" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
