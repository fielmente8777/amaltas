"use client";

import React from "react";
import Image from "next/image";
import { landingPageData } from "./pagedata";
import SwiperCarousel from "@/src/components/sliders/SwiperCarousel";
import { Navigation, Autoplay } from "swiper/modules";
import { BtnNextIcon, BtnPrevIcon, WhatsAppIcon, BookNowIcon } from "@/src/utils/icons";

import type { Swiper as SwiperType } from "swiper";

import { getWhatsAppUrl, scrollToForm } from "@/src/utils/constent";

export const Experience: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(null);

  return (
    <section className="w-full bg-[#EEEEDC] py-8 sm:py-12 md:py-20 border-b border-[#D6D2C7]">
      {/* Section Header */}
      <div className="text-center space-y-3 sm:space-y-4 md:space-y-6 max-w-3xl mx-auto px-4 sm:px-6 mb-4 sm:mb-8 md:mb-12">
        <p className="text-[14px] sm:text-[16px] uppercase tracking-widest text-[#B58A4A] font-medium font-dm-sans">
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
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 0 },
            768: { slidesPerView: 3, spaceBetween: 0 },
            1024: { slidesPerView: 4, spaceBetween: 0 },
          }}
          className="w-full"
          swiperSlideClassName="!h-auto"
          renderSlide={(card) => (
            <a
              href={getWhatsAppUrl(card.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-[390px] sm:h-[460px] lg:h-[520px] w-full overflow-hidden cursor-pointer"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* WHITE BORDER DIVIDER BETWEEN IMAGES (visible from sm and up) */}
              <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-[2px] bg-white z-20 pointer-events-none" />

              {/* LIGHT OVERLAY ON HOVER */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-10" />

              {/* BOTTOM TITLE STRIP */}
              <div className="absolute bottom-0 left-0 w-full bg-black/30 py-3 sm:py-4 px-4 text-center z-20">
                <p className="text-[16px] sm:text-[18px] font-dm-sans font-normal text-white tracking-wide">
                  {card.title}
                </p>
              </div>
            </a>
          )}
        />

        {/* PREVIOUS / NEXT SLIDER BUTTONS */}
        <button
          type="button"
          onClick={() => swiperInstance?.slidePrev()}
          className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-30 transition-transform active:opacity-75 cursor-pointer drop-shadow-md flex items-center justify-center scale-[0.75] sm:scale-90 lg:scale-100"
          aria-label="Previous experience"
        >
          <BtnPrevIcon />
        </button>

        <button
          type="button"
          onClick={() => swiperInstance?.slideNext()}
          className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 z-30 transition-transform active:opacity-75 cursor-pointer drop-shadow-md flex items-center justify-center scale-[0.75] sm:scale-90 lg:scale-100"
          aria-label="Next experience"
        >
          <BtnNextIcon />
        </button>
      </div>

      {/* Global Section CTAs */}
      <div className="flex flex-row items-center justify-center gap-[12px] pt-5 sm:pt-10 px-4 sm:px-6 font-open-sans">
        <a
          href={getWhatsAppUrl("Experiences")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-initial w-[160px] h-[44px] flex items-center justify-center gap-[8px] bg-white hover:bg-gray-50 text-[#30402A] border border-[#30402A] px-[16px] py-[12px] rounded-[4px] text-sm font-normal transition-all cursor-pointer shadow-sm whitespace-nowrap"
        >
          <WhatsAppIcon className="w-4 h-4 text-[#30402A]" />
          Enquire Now
        </a>

        <button
          onClick={scrollToForm}
          className="flex-1 sm:flex-initial w-[160px] h-[44px] flex items-center justify-center gap-[8px] bg-[#30402A] hover:bg-[#243120] text-white border border-[#30402A] px-[16px] py-[12px] rounded-[4px] text-sm font-normal transition-all cursor-pointer shadow-md whitespace-nowrap"
        >
          <BookNowIcon className="w-3.5 h-3.5 text-white" />
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Experience;
