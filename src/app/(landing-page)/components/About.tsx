"use client";

import React from "react";
import Image from "next/image";
import { landingPageData } from "./pagedata";
import SectionActionButtons from "@/src/components/buttons/SectionActionButtons";

export const About: React.FC = () => {
  return (
    <section className="relative w-full bg-[#EEEEDC] py-16 sm:py-20 md:py-28 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16 border-b border-[#D6D2C7] overflow-hidden">
      {/* Top-Left Leaf Background Decoration */}
      <div className="absolute top-0 left-0 pointer-events-none select-none z-0 leading-none m-0 p-0 flex items-start justify-start">
        <Image
          src="/leaf-tp.png"
          alt="Leaf Top Decoration"
          width={40}
          height={46}
          className="w-[20px] h-[23px] sm:w-[40.11px] sm:h-[46px] object-contain block m-0 p-0"
          priority
        />
      </div>

      {/* Bottom-Right Leaf Background Decoration */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none z-0 leading-none m-0 p-0 flex items-end justify-end">
        <Image
          src="/leaf-bt.png"
          alt="Leaf Bottom Decoration"
          width={40}
          height={46}
          className="w-[20px] h-[23px] sm:w-[40.11px] sm:h-[46px] object-contain block m-0 p-0"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start">
        {/* Left Column: Heading & Desktop Buttons */}
        <div className="lg:col-span-6 space-y-3 sm:space-y-4 lg:space-y-6 text-left">
          <p className="text-[14px] sm:text-[16px] uppercase tracking-widest text-[#B58A4A] font-medium font-dm-sans text-left">
            {landingPageData.about.tag}
          </p>

          <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-5xl text-[#30402A] leading-tight text-left">
            {landingPageData.about.heading}
          </h2>

          {/* Desktop Only Buttons */}
          <SectionActionButtons section="About" className="hidden lg:flex pt-2 sm:pt-3" />
        </div>

        {/* Right Column: Paragraph Text & Mobile Buttons Below Description */}
        <div className="lg:col-span-6 space-y-3.5 sm:space-y-5 text-[#6B635E] text-sm sm:text-lg md:text-[20px] lg:text-[22px] leading-relaxed md:leading-[32px] font-dm-sans font-normal tracking-normal text-left">
          {landingPageData.about.paragraphs.map((p, idx) => (
            <p key={idx} className="font-normal text-[#6B635E]">
              {p}
            </p>
          ))}

          {/* Mobile Only Buttons (Positioned below description) */}
          <SectionActionButtons section="About" compact className="flex lg:hidden pt-3 sm:pt-4 w-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
