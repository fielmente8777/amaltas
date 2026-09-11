"use client";

import React from "react";
import Image from "next/image";
import { landingPageData } from "./pagedata";
import { LocationPinIcon, WhatsAppIcon, BookNowIcon } from "@/src/utils/icons";
import LazyLoadedVideo from "@/src/components/Video/LazyLoadedVideo";

import { getWhatsAppUrl, scrollToForm } from "@/src/utils/constent";

export const Location: React.FC = () => {

  return (
    <section className="w-full bg-[#FDF9EE] py-8 sm:py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b border-[#D6D2C7]">
      <div className="max-w-[1320px] mx-auto space-y-6 sm:space-y-8 md:space-y-10">
        {/* Mobile Header (visible on < lg) */}
        <div className="block lg:hidden space-y-2 sm:space-y-3 text-left">
          <p className="text-[14px] sm:text-[16px] uppercase tracking-widest text-[#B58A4A] font-medium font-dm-sans">
            {landingPageData.location.tag}
          </p>
          <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-5xl text-[#30402A] leading-tight">
            {landingPageData.location.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-center">
          {/* Left Side: Desktop Header + Address & Distance Table */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-3 sm:space-y-6">
            <div className="hidden lg:block space-y-3 sm:space-y-6">
              <p className="text-[14px] sm:text-[16px] uppercase tracking-widest text-[#B58A4A] font-medium font-dm-sans">
                {landingPageData.location.tag}
              </p>

              <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-5xl text-[#30402A] leading-tight">
                {landingPageData.location.heading}
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm sm:text-[18px] text-[#6B635E] font-dm-sans pt-1 lg:pt-0">
              <span className="shrink-0"><LocationPinIcon /></span>
              <p className="whitespace-normal md:whitespace-nowrap">{landingPageData.location.address}</p>
            </div>

            {/* Distance Matrix Table (No Icons, Clean Horizontal Border Dividers) */}
            <div className="border-y divide-y border-[#D6D2C7] divide-[#D6D2C7] text-[14px] font-manrope">
              {landingPageData.location.matrix.map((row, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 sm:py-3.5">
                  <span className="text-[#6B635E] font-normal">{row.place}</span>
                  <span className="text-[#30402A] font-medium">{row.distance}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-row items-center gap-[12px] pt-1 sm:pt-2 font-open-sans">
              <a
                href={getWhatsAppUrl("Location")}
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

          {/* Right Side / Mobile Top: Optimized Lazy Loaded Video (648px x 600px, 8px radius) */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[648px] h-[240px] sm:h-[420px] lg:h-[600px] rounded-[8px] overflow-hidden shadow-lg border border-[#D6D2C7]">
              <LazyLoadedVideo
                src={landingPageData.location.video?.src || "/location-video.mp4"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
