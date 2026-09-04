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

        {/* BOOK STAY CTA */}
        <LinkButton
          href="#form"
          label="Book Now"
          calendarIcon
          className="flex flex-row items-center justify-center w-[115px] sm:w-[130px] h-[38px] sm:h-[44px] gap-2 sm:gap-[12px] rounded-lg uppercase bg-[#30402A] text-white border border-[#30402A] px-0 hover:bg-[#243120] transition-colors text-[11px] sm:text-xs font-semibold tracking-wider"
        />
      </div>
    </header>
  );
};

export default LandingNavbar;
