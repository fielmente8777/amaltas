"use client";

import { useEffect, useState } from "react";
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
    <div
      className={`bg-[#30402A] py-1.5 w-full z-50 transition-all duration-300 ease-in-out border-b border-[#B58A4A]/30 ${
        isFixed
          ? "fixed top-0 left-0 right-0 w-full shadow-md animate-offer-slide"
          : "relative w-full"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <p className="text-center text-white text-xs md:text-sm font-sans tracking-wide">
          {landingPageData.offer[0]}
        </p>
      </div>
    </div>
  );
};

export default OfferSection;