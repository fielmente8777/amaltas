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

  if(pathName === "/thank-you/"){
    return null;
  }

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName={`bg-primary py-1 w-full z-50 left-0 transition-all duration-300 ease-in-out ${
        isFixed
          ? "fixed top-0 animate-offer-slide"
          : "relative"
      }`}
    >
      <p className="text-center text-white text-sm md:text-[16px]">
        {landingPageData.offer[0]}
      </p>
    </SectionWithContainer>
  );
};

export default OfferSection;