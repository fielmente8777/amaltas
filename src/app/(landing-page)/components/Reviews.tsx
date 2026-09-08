"use client";

import React from "react";
import Image from "next/image";
import { landingPageData } from "./pagedata";
import { RatingStarIcon } from "@/src/utils/icons";

export const Reviews: React.FC = () => {
  return (
    <section className="w-full bg-[#EEEEDC] py-8 sm:py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b border-[#D6D2C7]">
      <div className="max-w-[1320px] mx-auto space-y-6 sm:space-y-8 md:space-y-12">
        {/* Section Header with MakeMyTrip Badge */}
        <div className="border-b border-[#D6D2C7]/40 pb-4 sm:pb-6 space-y-3 sm:space-y-4 md:space-y-6">
          <p className="text-[14px] sm:text-[16px] uppercase tracking-widest text-[#B58A4A] font-medium font-dm-sans">
            {landingPageData.reviews.tag}
          </p>

          <div className="flex items-center justify-between gap-4">
            <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-[40px] text-[#30402A]">
              {landingPageData.reviews.heading}
            </h2>

            <div className="shrink-0">
              <Image
                src="/MakeMyTrip.png"
                alt="MakeMyTrip 5.0 Rating"
                width={132}
                height={42}
                className="w-[132px] h-[42px] object-contain"
              />
            </div>
          </div>

          <div className="flex items-center gap-1.5 pt-0.5 sm:pt-1">
            {[...Array(5)].map((_, i) => (
              <RatingStarIcon key={i} className="w-[17px] h-[16px]" />
            ))}
          </div>
        </div>

        {/* Reviews Cards Grid (3 Cards, 1320px container, 424px width per card, 227px height, 8px radius) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 font-sans">
          {landingPageData.reviews.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-full max-w-[424px] h-[227px] bg-[#FDF9EE] p-5 sm:p-6 rounded-[8px] border border-[#D6D2C7] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow mx-auto"
            >
              <div className="space-y-2">
                <p className="text-[16px] text-[#6B635E] font-dm-sans font-normal leading-relaxed line-clamp-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#B58A4A] pt-3">
                <h4 className="font-manrope font-semibold text-[#30402A] text-[14px]">
                  {item.author}
                </h4>
                <p className="text-[12px] uppercase tracking-widest text-[#5C625B] font-manrope font-medium mt-0.5">
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
