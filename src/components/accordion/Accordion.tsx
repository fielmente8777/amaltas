"use client";

import { FaqSectionProps } from "@/src/@types/landingPageTypes";
import { useState } from "react";


const Accordion: React.FC<FaqSectionProps["items"][0]> = ({
  q: question,
  a: answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 bg-white rounded-md border border-[#DFD6C9]">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
      >
        <h3 className="text-dark">{question}</h3>
        <span
          className={`mt-1 shrink-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <DropDownIcon />
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`mt-2 text-light text-sm transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

export const DropDownIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="#635B54"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);