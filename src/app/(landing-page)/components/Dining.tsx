"use client";

import React from "react";
import Image from "next/image";
import { landingPageData } from "./pagedata";
import { WhatsAppIcon, BookNowIcon } from "@/src/utils/icons";

import { getWhatsAppUrl, scrollToForm } from "@/src/utils/constent";

export const Dining: React.FC = () => {

  return (
    <section className="w-full bg-[#FDF9EE] py-8 sm:py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b border-[#D6D2C7]">
      <div className="max-w-[1320px] mx-auto space-y-6 sm:space-y-8 md:space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 max-w-3xl mx-auto">
          <p className="text-[14px] sm:text-[16px] uppercase tracking-widest text-[#B58A4A] font-medium font-dm-sans">
            {landingPageData.dining.tag}
          </p>
          <h2
            className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-5xl text-[#30402A] leading-tight"
            dangerouslySetInnerHTML={{ __html: landingPageData.dining.heading }}
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-[40px] items-center max-w-[1320px] mx-auto">
          {/* Left Side Image with Behind Offset Border Frame */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[770.67px] h-[260px] sm:h-[400px] lg:h-[534.84px] pt-3 pl-3 sm:pt-4 sm:pl-4 lg:pt-[16px] lg:pl-[16px]">
              {/* Background Offset Border Frame (Top: 0, Left: 0, Radius: 8px, Border: 1px) */}
              <div className="absolute top-0 left-0 w-[calc(100%-12px)] sm:w-[calc(100%-16px)] h-[calc(100%-12px)] sm:h-[calc(100%-16px)] border border-[#8C827A] rounded-[8px] pointer-events-none" />

              {/* Main Image (Top 16px, Left 16px, Radius 8px) */}
              <div className="relative w-full h-full rounded-[8px] overflow-hidden shadow-sm z-10">
                <Image
                  src={landingPageData.dining.image}
                  alt="Dining at Amaltas Villa"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Side Dining List (Width: max 536px, Height: 517.65px) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end w-full">
            <div className="flex flex-col justify-between w-full max-w-[536px] lg:h-[517.65px] border-y-[0.8px] border-[#D6D2C7] divide-y-[0.8px] divide-[#D6D2C7]">
              {landingPageData.dining.items.map((item, idx) => (
                <div key={idx} className="py-3 sm:py-4 lg:py-5 flex flex-col justify-center space-y-1 sm:space-y-1.5 flex-1">
                  <h3 className="text-xl sm:text-2xl font-varela text-[#30402A]">
                    {item.title}
                  </h3>
                  <p
                    className="text-[14px] text-[#5C625B] font-manrope font-normal leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Centered CTAs at Bottom */}
        <div className="flex flex-row items-center justify-center gap-[12px] pt-1 sm:pt-4 font-open-sans">
          <a
            href={getWhatsAppUrl("Dining")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial w-[160px] h-[44px] uppercase flex items-center justify-center gap-[8px] bg-white hover:bg-gray-50 text-[#30402A] border border-[#30402A] px-[16px] py-[12px] rounded-[4px] text-sm font-normal transition-all cursor-pointer shadow-sm whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#30402A]" />
            Enquire Now
          </a>

          <button
            onClick={scrollToForm}
            className="flex-1 sm:flex-initial w-[160px] h-[44px] uppercase flex items-center justify-center gap-[8px] bg-[#30402A] hover:bg-[#243120] text-white border border-[#30402A] px-[16px] py-[12px] rounded-[4px] text-sm font-normal transition-all cursor-pointer shadow-md whitespace-nowrap"
          >
            <BookNowIcon className="w-3.5 h-3.5 text-white" />
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dining;
