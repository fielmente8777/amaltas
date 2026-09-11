"use client";

import React from "react";
import Image from "next/image";
import Form1 from "@/src/components/forms/Form1";
import { landingPageData } from "@/src/app/(landing-page)/components/pagedata";
import { FooterLocationIcon, PhoneIcon, EmailIcon } from "@/src/utils/icons";

export const LandingFooter: React.FC = () => {
  return (
    <footer className="w-full font-sans">
      {/* Dark Green Booking Form Banner Strip Above Footer */}
      <div id="booking-form" className="w-full bg-[#30402A] py-8 sm:py-10 md:py-16 px-4 sm:px-6 md:px-12 border-b border-[#B58A4A]/30">
        <div className="max-w-6xl mx-auto text-center space-y-3 sm:space-y-6">
          <h2 className="heading-h2 font-varela text-lg sm:text-3xl lg:text-4xl text-white leading-tight max-w-4xl mx-auto">
            An Intimate Forest Escape At The Heart Of<br className="hidden sm:inline" /> The Corbett Experience
          </h2>

          <div className="max-w-6xl mx-auto pt-1 sm:pt-2">
            <Form1 />
          </div>

          <p className="font-open-sans font-normal text-[14px] leading-[20px] tracking-normal text-white text-center pt-4">
            Save 15% when you book direct · Free cancellation on most dates*
          </p>
        </div>
      </div>

      {/* Main Footer Info (Height: Hug 294px, Width: 1440px max, Background: #EEEEDC) */}
      <div className="w-full bg-[#EEEEDC] border-t border-[#D6D2C7]">
        <div className="max-w-[1440px] mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-16 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 font-sans">
          {/* Column 1: Logo (Width: 149px, Height: 160px) */}
          <div className="flex items-center">
            <div className="relative w-[120px] h-[130px] sm:w-[149px] sm:h-[160px] shrink-0">
              <Image
                src="/logo-image1.png"
                alt="Amaltas Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Column 2: Location (Header 14px, Content 18px, Tertiary #6B635E, Secondary Icon #B58A4A, Font DM Sans) */}
          <div className="space-y-1.5 sm:space-y-2 max-w-[340px]">
            <p className="font-dm-sans font-medium text-[14px] text-[#6B635E]">
              Location
            </p>
            <div className="flex items-start gap-2.5 text-[18px] text-[#6B635E] font-dm-sans">
              <span className="mt-1 text-[#B58A4A] shrink-0">
                <FooterLocationIcon />
              </span>
              <p className="leading-relaxed">
                {landingPageData.contact.location}
              </p>
            </div>
          </div>

          {/* Column 3: Contact (Header 14px, Content 18px, Tertiary #6B635E, Secondary Icon #B58A4A, Font DM Sans) */}
          <div className="space-y-1.5 sm:space-y-2">
            <p className="font-dm-sans font-medium text-[14px] text-[#6B635E]">
              Contact
            </p>
            <div className="space-y-1.5 sm:space-y-2 text-[18px] text-[#6B635E] font-dm-sans">
              <div className="flex items-center gap-2.5">
                <span className="text-[#B58A4A] shrink-0">
                  <PhoneIcon />
                </span>
                <a
                  href={`tel:${String(Array.isArray(landingPageData.contact.phone) ? landingPageData.contact.phone[0] : landingPageData.contact.phone).replace(/[\s-]/g, "")}`}
                  className="hover:text-[#30402A] transition-colors"
                >
                  Call: {Array.isArray(landingPageData.contact.phone) ? landingPageData.contact.phone[0] : landingPageData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#B58A4A] shrink-0">
                  <EmailIcon />
                </span>
                <a
                  href={`mailto:${landingPageData.contact.email}`}
                  className="hover:text-[#30402A] transition-colors"
                >
                  Email: {landingPageData.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar (Primary Color #30402A, Height: 53px, Padding: px-6 md:px-16) */}
      <div className="w-full bg-[#30402A] min-h-[44px] sm:h-[53px] py-2.5 sm:py-0 px-4 sm:px-6 md:px-16 flex flex-col sm:flex-row items-center justify-between text-[14px] text-white/90 font-dm-sans border-t border-[#30402A] gap-1 sm:gap-0 text-center sm:text-left">
        <p>© 2026 AMALTAS. All rights reserved.</p>
        <p>Powered by Fielmente</p>
      </div>
    </footer>
  );
};

export default LandingFooter;
