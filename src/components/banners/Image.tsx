"use client";

import Image from "next/image";
import { Section } from "../sectionComponants";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCarousel from "../sliders/SwiperCarousel";
import { BtnNextIcon, BtnPrevIcon } from "@/src/utils/icons";

interface ImageBannerProps {
  hero: {
    tag: string;
    title: string;
    description: string;
    benefits: string;
    images: string[];
  };
}

const ImageB: React.FC<ImageBannerProps> = ({ hero }) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full md:aspect-16/8 aspect-[3/4] overflow-hidden"
    >
      {/* BACKGROUND IMAGE SLIDER WITH AUTOPLAY */}
      <SwiperCarousel
        data={hero.images}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".image-banner-next",
          prevEl: ".image-banner-prev",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={900}
        className="absolute inset-0 w-full h-full"
        swiperSlideClassName="h-full"
        renderSlide={(image) => (
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt="Amaltas Hero"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#192118]/90" />
          </div>
        )}
      />

      {/* OVERLAY & TEXT CONTENT */}
      <div className="absolute inset-0 z-20 flex items-end pb-5 sm:pb-6">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="space-y-2.5 sm:space-y-3 w-full text-left max-w-full">
            {/* TAG BADGE */}
            <p className="flex items-center justify-center w-fit max-w-[90%] sm:max-w-full sm:w-[376px] h-[30px] sm:h-[34px] bg-white/10 backdrop-blur-[12px] border border-white/20 rounded-full text-[9px] sm:text-[10px] md:text-xs text-[#EEEEDC] uppercase tracking-widest font-varela px-3 sm:px-4 truncate">
              {hero.tag}
            </p>

            {/* HERO TITLE */}
            <h1
              className="font-fraunces text-2xl sm:text-4xl md:text-5xl lg:text-[56px] text-white leading-tight lg:leading-[64px] tracking-normal max-w-[767px] text-left"
              dangerouslySetInnerHTML={{ __html: hero.title }}
            />
          </div>
        </div>
      </div>

      {/* SWIPER NAV ARROWS */}
      <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-8 z-30 flex gap-2 sm:gap-3">
        <button
          type="button"
          className="image-banner-prev flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer scale-90 sm:scale-100"
          aria-label="Previous slide"
        >
          <BtnPrevIcon />
        </button>

        <button
          type="button"
          className="image-banner-next flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer scale-90 sm:scale-100"
          aria-label="Next slide"
        >
          <BtnNextIcon />
        </button>
      </div>
    </Section>
  );
};

export default ImageB;
