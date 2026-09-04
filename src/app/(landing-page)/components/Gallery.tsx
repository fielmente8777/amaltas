"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { landingPageData } from "./pagedata";
import SwiperCarousel from "@/src/components/sliders/SwiperCarousel";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { WhatsAppIcon } from "@/src/utils/icons";

const galleryImages = [
  "/banner-image.png",
  "/Bijrani Room.png",
  "/durgadevi-room.png",
  "/banner-image.png",
  "/Bijrani Room.png",
  "/durgadevi-room.png",
  "/banner-image.png",
  "/Bijrani Room.png",
];

export const Gallery: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918868888494?text=Hi%2C%20I%20am%20looking%20at%20Amaltas%20Gallery%20and%20want%20to%20enquire.",
      "_blank"
    );
  };

  const scrollToForm = () => {
    const el = document.getElementById("booking-form") || document.getElementById("form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#EEEEDC] py-12 md:py-24 px-4 sm:px-6 border-b border-[#D6D2C7] overflow-hidden">
      <div className="max-w-[1128px] mx-auto space-y-6 sm:space-y-8 md:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-1.5 sm:space-y-2 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#B58A4A] font-semibold font-varela">
            {landingPageData.gallery.tag}
          </p>
          <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-5xl text-[#30402A]">
            {landingPageData.gallery.heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#5F6764] font-sans">
            {landingPageData.gallery.subtext}
          </p>
        </div>

        {/* 5-IMAGE 3D COVERFLOW GALLERY CAROUSEL (Container: 1128px x 456px, Center Image: 808px x 456px) */}
        <div className="relative w-full max-w-[1128px] h-[260px] sm:h-[400px] lg:h-[456px] mx-auto py-2 flex items-center justify-center">
          <SwiperCarousel
            data={galleryImages}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 60,
              depth: 140,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                coverflowEffect: {
                  rotate: 0,
                  stretch: 120,
                  depth: 160,
                  modifier: 1,
                  slideShadows: false,
                },
              },
            }}
            onSwiper={setSwiperRef}
            className="w-full h-full overflow-visible"
            swiperSlideClassName="!w-[270px] sm:!w-[520px] md:!w-[680px] lg:!w-[808px] !h-full transition-all duration-300 rounded-[12px] overflow-hidden shrink-0"
            renderSlide={(img, idx) => (
              <div className="relative w-full h-full rounded-[12px] overflow-hidden border border-white/30 shadow-2xl">
                <Image
                  src={img}
                  alt={`Amaltas Gallery ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          />

          {/* OVERLAY NAV ARROWS ON CENTER IMAGE EDGES (left: ~160px from container) */}
          <button
            type="button"
            onClick={() => swiperRef?.slidePrev()}
            className="absolute left-2 sm:left-[10%] lg:left-[175px] top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white text-[#30402A] shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
            aria-label="Previous gallery image"
          >
            <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>

          <button
            type="button"
            onClick={() => swiperRef?.slideNext()}
            className="absolute right-2 sm:right-[10%] lg:right-[175px] top-1/2 -translate-y-1/2 z-40 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white text-[#30402A] shadow-xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
            aria-label="Next gallery image"
          >
            <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* SECTION CTAS DIRECTLY BELOW CAROUSEL */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 font-sans">
          <button
            onClick={openWhatsApp}
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#30402A] border border-[#30402A] px-5 sm:px-6 py-2.5 sm:py-3 rounded text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#30402A]" />
            Enquire Now
          </button>

          <button
            onClick={scrollToForm}
            className="flex items-center gap-2 bg-[#30402A] hover:bg-[#243120] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded text-xs sm:text-sm font-medium transition-all cursor-pointer shadow-md"
          >
            <FaCalendarAlt className="text-white text-sm" />
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
