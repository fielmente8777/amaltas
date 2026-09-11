"use client";

import React, { useEffect } from "react";
import { useWebContext } from "@/src/context-api/WebContext";
import { MdClose } from "react-icons/md";
import Form1 from "../forms/Form1";

const PopUpForm = () => {
  const { isOpenFormPopUp, setIsOpenFormPopUp } = useWebContext();

  useEffect(() => {
    if (!isOpenFormPopUp) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpenFormPopUp(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpenFormPopUp, setIsOpenFormPopUp]);

  return (
    <section
      aria-modal="true"
      role="dialog"
      className={`fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
        isOpenFormPopUp
          ? "visible opacity-100"
          : "invisible opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpenFormPopUp(false);
        }
      }}
    >
      <div
        className={`max-w-md w-full p-6 sm:p-7 bg-[#FDF9EE] text-[#192118] relative rounded-2xl shadow-2xl border border-[#D6D2C7] transition-all duration-300 transform ${
          isOpenFormPopUp ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpenFormPopUp(false)}
          aria-label="Close modal"
          className="absolute top-3 right-3 p-1.5 rounded-full text-[#30402A] hover:bg-black/5 hover:text-black transition-colors cursor-pointer z-10"
        >
          <MdClose size={22} />
        </button>

        {/* Form Content */}
        <div className="max-h-[85vh] overflow-y-auto pt-4 sm:pt-2">
          <Form1 gridView />
        </div>
      </div>
    </section>
  );
};

export default PopUpForm;

