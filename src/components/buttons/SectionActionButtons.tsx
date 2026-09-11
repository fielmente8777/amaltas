"use client";

import React from "react";
import { WhatsAppIcon, BookNowIcon } from "@/src/utils/icons";
import { contact } from "@/src/utils/constent";
import { useWebContext } from "@/src/context-api/WebContext";

interface SectionActionButtonsProps {
  section?: string;
  className?: string;
  compact?: boolean;
}

export const SectionActionButtons: React.FC<SectionActionButtonsProps> = ({
  section,
  className = "",
  compact = false,
}) => {
  const { setIsOpenFormPopUp } = useWebContext();

  const buttonHeight = compact
    ? "w-full sm:w-[160px] h-[40px] sm:h-[44px] px-[12px] sm:px-[16px] py-[10px] sm:py-[12px] text-xs sm:text-sm"
    : "w-[160px] h-[44px] px-[16px] py-[12px] text-sm";

  return (
    <div className={`flex flex-row items-center gap-[12px] font-open-sans ${className}`}>
      {/* Enquire Now WhatsApp Button */}
      <a
        href={contact.WhatsappCta}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex-1 sm:flex-initial ${buttonHeight} flex items-center justify-center uppercase gap-[8px] bg-white hover:bg-gray-50 text-[#30402A] border border-[#30402A] rounded-[4px] font-normal transition-all cursor-pointer shadow-sm whitespace-nowrap`}
      >
        <WhatsAppIcon className="w-4 h-4 text-[#30402A]" />
        Enquire Now
      </a>

      {/* Book Now Popup Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpenFormPopUp(true)}
        className={`flex-1 sm:flex-initial ${buttonHeight} flex items-center justify-center uppercase gap-[8px] bg-[#30402A] hover:bg-[#243120] text-white border border-[#30402A] rounded-[4px] font-normal transition-all cursor-pointer shadow-md whitespace-nowrap`}
      >
        <BookNowIcon className="w-3.5 h-3.5 text-white" />
        Book Now
      </button>
    </div>
  );
};

export default SectionActionButtons;
