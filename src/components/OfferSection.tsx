"use client";

import { useEffect, useState } from "react";
import { SectionWithContainer } from "./sectionComponants";
import { usePathname } from "next/navigation";
import { landingPageData } from "../app/(landing-page)/components/pagedata";

const OfferSection = () => {
  const pathName = usePathname();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName={`bg-[#30402A] py-1.5 w-full z-50 left-0 transition-all duration-300 ease-in-out border-b border-[#B58A4A]/30 ${
        isFixed ? "fixed top-0 animate-offer-slide" : "relative"
      }`}
    >
      <p className="text-center text-white text-xs md:text-sm font-sans tracking-wide">
        {landingPageData.offer[0]}
      </p>
    </SectionWithContainer>
  );
};

export default OfferSection;