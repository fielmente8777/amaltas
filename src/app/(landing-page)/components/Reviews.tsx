"use client";

import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { landingPageData } from "./pagedata";

export const Reviews: React.FC = () => {
  return (
    <section className="w-full bg-[#EEEEDC] py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b border-[#D6D2C7]">
      <div className="max-w-[1320px] mx-auto space-y-8 md:space-y-12">
        {/* Section Header with MakeMyTrip Badge */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 border-b border-[#D6D2C7]/40 pb-5 sm:pb-6">
          <div className="space-y-1.5 sm:space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#B58A4A] font-semibold font-varela">
              {landingPageData.reviews.tag}
            </p>
            <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-[40px] text-[#30402A]">
              {landingPageData.reviews.heading}
            </h2>
            <div className="flex items-center gap-1 text-[#B58A4A] text-sm pt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          <div className="shrink-0 pt-1 sm:pt-0">
            <Image
              src="/MakeMyTrip.png"
              alt="MakeMyTrip 5.0 Rating"
              width={132}
              height={42}
              className="w-[110px] sm:w-[132px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Reviews Cards Grid (3 Cards, 1320px container, 424px width per card, 227px height, 8px radius) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 font-sans">
          {landingPageData.reviews.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[424px] min-h-[200px] sm:min-h-[227px] md:h-[227px] bg-[#FAF8F5] p-5 sm:p-6 rounded-[8px] border border-[#D6D2C7] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow mx-auto"
            >
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-1 text-[#B58A4A] text-xs">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#6B635E] leading-relaxed italic line-clamp-3">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#D6D2C7] pt-2.5 sm:pt-3 mt-3">
                <h4 className="font-varela font-bold text-[#30402A] text-sm sm:text-base">
                  {item.author}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-[#B58A4A] font-semibold mt-0.5">
                  {item.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
