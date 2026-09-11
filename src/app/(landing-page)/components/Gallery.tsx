"use client";

import React, { useState } from "react";
import Image from "next/image";
import { landingPageData } from "./pagedata";
import { BtnNextIcon, BtnPrevIcon, WhatsAppIcon, BookNowIcon } from "@/src/utils/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import { getWhatsAppUrl } from "@/src/utils/constent";
import { useWebContext } from "@/src/context-api/WebContext";

export const Gallery: React.FC = () => {
  const { setIsOpenFormPopUp } = useWebContext();
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const images = landingPageData.gallery.images;

  return (
    <section className="w-full bg-[#EEEEDC] py-8 sm:py-12 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 border-b border-[#D6D2C7] overflow-hidden">
      <div className="max-w-[1320px] mx-auto space-y-4 sm:space-y-8 md:space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-[14px] sm:text-[16px] uppercase tracking-widest text-[#B58A4A] font-medium font-dm-sans mb-[12px]">
            {landingPageData.gallery.tag}
          </p>
          <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-5xl text-[#30402A] mb-[16px]">
            {landingPageData.gallery.heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#5F6764] font-manrope">
            {landingPageData.gallery.subtext}
          </p>
        </div>

        {/* SWIPER SLIDER */}
        <div className="relative w-full max-w-full overflow-hidden mx-auto py-2 sm:py-4">
          <Swiper
            modules={[EffectCoverflow, Navigation, Autoplay]}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            speed={800}
            coverflowEffect={{
              rotate: 0,
              stretch: 20,
              depth: 300,
              modifier: 2.5,
              slideShadows: false,
            }}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full !overflow-hidden"
          >

            
            {images.map((src, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="w-full  relative aspect-[4/2] overflow-hidden rounded-[8px] shadow-lg">
                  <Image
                    src={src}
                    alt={`Amaltas Gallery ${index + 1}`}
                    fill
                    className="object-cover rounded-[8px]"
                    sizes="(max-width: 768px) 100vw, 808px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrow Buttons positioned on the sides of the middle image */}
          <button
            type="button"
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous gallery image"
            className="absolute left-1.5 sm:left-[10%] md:left-[26.5%] lg:left-[27%] top-1/2 -translate-y-1/2 z-30 transition-transform active:opacity-75 cursor-pointer drop-shadow-md flex items-center justify-center scale-[0.8] sm:scale-100"
          >
            <BtnPrevIcon />
          </button>
          <button
            type="button"
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next gallery image"
            className="absolute right-1.5 sm:right-[10%] md:right-[26.5%] lg:right-[27%] top-1/2 -translate-y-1/2 z-30 transition-transform active:opacity-75 cursor-pointer drop-shadow-md flex items-center justify-center scale-[0.8] sm:scale-100"
          >
            <BtnNextIcon />
          </button>
        </div>

        {/* SECTION CTAS DIRECTLY BELOW CAROUSEL */}
        <div className="flex flex-row items-center justify-center gap-[12px] pt-1 sm:pt-4 font-open-sans">
          <a
            href={getWhatsAppUrl("Gallery")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial w-[160px] h-[44px] uppercase flex items-center justify-center gap-[8px] bg-white hover:bg-gray-50 text-[#30402A] border border-[#30402A] px-[16px] py-[12px] rounded-[4px] text-sm font-normal transition-all cursor-pointer shadow-sm whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#30402A]" />
            Enquire Now
          </a>

          <button
            onClick={() => setIsOpenFormPopUp(true)}
            className="flex-1 sm:flex-initial w-[160px] h-[44px] uppercase flex items-center justify-center gap-[8px] bg-[#30402A] hover:bg-[#243120] text-white border border-[#30402A] px-[16px] py-[12px] rounded-[4px] text-sm font-normal transition-all cursor-pointer shadow-md whitespace-nowrap"
          >
            <BookNowIcon className="w-3.5 h-3.5 text-white" />
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
