"use client";

import Image from "next/image";
import LinkButton from "../buttons/LinkButton";
import { usePathname } from "next/navigation";
import { landingPageData } from "../../app/(landing-page)/components/pagedata";

const LandingNavbar = () => {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <header className="w-full bg-[#EEEEDC] border-b border-[#D6D2C7]">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 flex items-center justify-between py-1 sm:py-0">
        {/* LOGO */}
        <div className="relative w-[68px] h-[74px] sm:w-[79px] sm:h-[86px] shrink-0 flex items-center justify-center">
          <Image
            src={landingPageData.hero.logo || "/logo.png"}
            alt="Amaltas Logo"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Mobile Book Now CTA (Only visible on mobile screens < 768px) */}
        <div className="block md:hidden">
          <LinkButton
            href="#form"
            label="Book Now"
            calendarIcon
            className="flex flex-row items-center justify-center w-[105px] h-[34px] gap-1.5 rounded-[4px] uppercase bg-[#30402A] text-white border border-[#30402A] px-2.5 hover:bg-[#243120] transition-colors text-[11px] font-semibold tracking-wider whitespace-nowrap shrink-0 shadow-sm [&>span>svg]:w-3 [&>span>svg]:h-3"
            labelClass="whitespace-nowrap text-[11px]"
          />
        </div>

        {/* Desktop Book Now CTA (100% Untouched - only visible on md: and above) */}
        <div className="hidden md:block">
          <LinkButton
            href="#form"
            label="Book Now"
            calendarIcon
            className="flex flex-row items-center justify-center w-[130px] h-[44px] gap-[12px] rounded-lg uppercase bg-[#30402A] text-white border border-[#30402A] px-3.5 hover:bg-[#243120] transition-colors text-[14px] font-semibold tracking-wider whitespace-nowrap shrink-0 shadow-md"
            labelClass="whitespace-nowrap text-[14px]"
          />
        </div>
      </div>
    </header>
  );
};

export default LandingNavbar;
