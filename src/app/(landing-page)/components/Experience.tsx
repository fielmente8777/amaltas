"use client";

import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { landingPageData } from "./pagedata";
import SwiperCarousel from "@/src/components/sliders/SwiperCarousel";
import { Navigation, Autoplay } from "swiper/modules";
import { BtnNextIcon, BtnPrevIcon, WhatsAppIcon } from "@/src/utils/icons";

export const Experience: React.FC = () => {
  const openWhatsApp = (title: string) => {
    window.open(
      `https://wa.me/918868888494?text=Hi%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(
        title
      )}%20at%20Amaltas%20Villa.`,
      "_blank"
    );
  };

  const scrollToForm = () => {
    const el = document.getElementById("booking-form") || document.getElementById("form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#EEEEDC] py-12 md:py-20 border-b border-[#D6D2C7]">
      {/* Section Header */}
      <div className="text-center space-y-2.5 sm:space-y-3 max-w-3xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 md:mb-12">
        <p className="text-xs uppercase tracking-widest text-[#B58A4A] font-semibold font-varela">
          {landingPageData.experience.tag}
        </p>
        <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-5xl text-[#30402A] leading-tight">
          {landingPageData.experience.heading}
        </h2>
      </div>

      {/* EDGE-TO-EDGE EXPERIENCE CAROUSEL */}
      <div className="relative w-full overflow-hidden">
        <SwiperCarousel
          data={landingPageData.experience.cards}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".experience-prev-btn",
            nextEl: ".experience-next-btn",
          }}
          slidesPerView={1.15}
          spaceBetween={6}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 1.4, spaceBetween: 8 },
            640: { slidesPerView: 2, spaceBetween: 0 },
            768: { slidesPerView: 3, spaceBetween: 0 },
            1024: { slidesPerView: 4, spaceBetween: 0 },
          }}
          className="w-full"
          swiperSlideClassName="!h-auto"
          renderSlide={(card) => (
            <div
              onClick={() => openWhatsApp(card.title)}
              className="group relative h-[380px] sm:h-[460px] lg:h-[520px] w-full overflow-hidden cursor-pointer"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* WHITE BORDER DIVIDER BETWEEN IMAGES */}
              <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none" />

              {/* LIGHT OVERLAY ON HOVER */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-10" />

              {/* BOTTOM TITLE STRIP (20% opacity background shade bg-black/20) */}
              <div className="absolute bottom-0 left-0 w-full bg-black/20 py-3.5 sm:py-4 px-4 text-center z-20">
                <p className="text-xs sm:text-sm md:text-base font-varela font-medium text-white tracking-wide">
                  {card.title}
                </p>
              </div>
            </div>
          )}
        />

        {/* PREVIOUS / NEXT SLIDER BUTTONS */}
        <button
          type="button"
          className="experience-prev-btn absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-30 transition-transform hover:scale-110 active:scale-95 cursor-pointer drop-shadow-md flex items-center justify-center scale-90 sm:scale-100"
          aria-label="Previous experience"
        >
          <BtnPrevIcon />
        </button>

        <button
          type="button"
          className="experience-next-btn absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-30 transition-transform hover:scale-110 active:scale-95 cursor-pointer drop-shadow-md flex items-center justify-center scale-90 sm:scale-100"
          aria-label="Next experience"
        >
          <BtnNextIcon />
        </button>
      </div>

      {/* Global Section CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-8 sm:pt-10 px-4 sm:px-6 font-sans">
        <button
          onClick={() => openWhatsApp("Experiences")}
          className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#30402A] border border-[#30402A] px-5 sm:px-6 py-2.5 sm:py-3 rounded text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-sm"
        >
          <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#30402A]" />
          Enquire Now
        </button>

        <button
          onClick={scrollToForm}
          className="flex items-center gap-2 bg-[#30402A] hover:bg-[#243120] text-white px-6 py-3 rounded text-sm font-medium transition-all cursor-pointer shadow-md"
        >
          <FaCalendarAlt className="text-white" />
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Experience;
