"use client";

import React, { useState } from "react";
import Image from "next/image";
import { landingPageData } from "./pagedata";
import { RatingStarIcon } from "@/src/utils/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export const Reviews: React.FC = () => {
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  return (
    <section className="w-full bg-[#EEEEDC] py-8 sm:py-12 md:py-24 px-4 sm:px-6 md:px-12 border-b border-[#D6D2C7] overflow-hidden">
      <div className="max-w-[1320px] mx-auto space-y-6 sm:space-y-8 md:space-y-12">
        {/* Section Header with MakeMyTrip Badge */}
        <div className="border-b border-[#D6D2C7]/40 pb-4 sm:pb-6 space-y-3 sm:space-y-4 md:space-y-6">
          <p className="text-[14px] sm:text-[16px] uppercase tracking-widest text-[#B58A4A] font-medium font-dm-sans">
            {landingPageData.reviews.tag}
          </p>

          <div className="flex items-center justify-between gap-4">
            <h2 className="heading-h2 font-varela text-[21px] xs:text-[23px] sm:text-4xl lg:text-[40px] text-[#30402A] leading-tight whitespace-nowrap sm:whitespace-normal">
              {landingPageData.reviews.heading}
            </h2>

            {/* Desktop MakeMyTrip Badge (Hidden on Mobile) */}
            <div className="shrink-0 hidden sm:block">
              <Image
                src="/MakeMyTrip.png"
                alt="MakeMyTrip 5.0 Rating"
                width={132}
                height={42}
                className="w-[132px] h-[42px] object-contain"
              />
            </div>
          </div>

          {/* Stars and Mobile MakeMyTrip Badge */}
          <div className="pt-0.5 sm:pt-1 space-y-2 sm:space-y-0">
            {/* Mobile MakeMyTrip Badge (Placed directly above 5 Stars on Mobile) */}
            <div className="sm:hidden block">
              <Image
                src="/MakeMyTrip.png"
                alt="MakeMyTrip 5.0 Rating"
                width={95}
                height={30}
                className="w-[95px] h-[30px] object-contain"
              />
            </div>

            {/* 5 Rating Stars */}
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <RatingStarIcon key={i} className="w-[17px] h-[16px]" />
              ))}
            </div>
          </div>
        </div>

        {/* Auto Sliding Reviews Carousel */}
        <div className="relative w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: paginationEl,
              clickable: true,
              bulletActiveClass: "!bg-[#30402A] !w-6 !rounded-[4px] !opacity-100",
              bulletClass: "inline-block w-2.5 h-2.5 rounded-full bg-[#B58A4A] opacity-40 mx-1 cursor-pointer transition-all duration-300",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="w-full"
          >
            {landingPageData.reviews.testimonials.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto flex py-1">
                <div className="w-full h-full min-h-[227px] bg-[#FDF9EE] p-5 sm:p-6 rounded-[8px] border border-[#D6D2C7] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-2">
                    <p className="text-[15px] sm:text-[16px] text-[#6B635E] font-dm-sans font-normal leading-relaxed line-clamp-4">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="border-t border-[#B58A4A] pt-3 mt-4">
                    <h4 className="font-manrope font-semibold text-[#30402A] text-[14px]">
                      {item.author}
                    </h4>
                    <p className="text-[12px] uppercase tracking-widest text-[#5C625B] font-manrope font-medium mt-0.5">
                      {item.type}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination dots container shifted below the cards */}
          <div
            ref={setPaginationEl}
            className="flex justify-center items-center gap-1 mt-6 sm:mt-8 min-h-[20px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;

