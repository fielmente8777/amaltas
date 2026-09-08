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
      className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/8] md:max-h-[720px] overflow-hidden"
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
      <div className="absolute inset-0 z-20 flex items-end pb-4 sm:pb-5 md:pb-6">
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="space-y-2.5 sm:space-y-3 w-full text-left max-w-full">
            {/* TAG BADGE */}
            <p className="inline-flex md:flex items-center justify-start md:justify-center w-fit md:w-[376px] max-w-full h-auto py-1 px-3 sm:py-1.5 sm:px-3.5 md:h-[34px] md:py-0 bg-white/10 backdrop-blur-[12px] border border-white/20 rounded-full text-[12px] sm:text-[14px] md:text-xs text-white uppercase tracking-widest font-dm-sans font-medium truncate">
              {hero.tag}
            </p>

            {/* HERO TITLE */}
            <h1
              className="font-fraunces text-[26px] sm:text-3xl md:text-5xl lg:text-[56px] text-white leading-[1.28] sm:leading-tight lg:leading-[64px] tracking-normal max-w-full text-left"
              dangerouslySetInnerHTML={{ __html: hero.title }}
            />
          </div>
        </div>
      </div>

      {/* SWIPER NAV ARROWS (Hidden on mobile, visible on desktop) */}
      <div className="hidden md:flex absolute bottom-3 right-3 sm:bottom-5 sm:right-5 md:bottom-6 md:right-8 z-30 items-center gap-1.5 sm:gap-2 md:gap-3">
        <button
          type="button"
          className="image-banner-prev flex items-center justify-center cursor-pointer w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px] [&>svg]:w-full [&>svg]:h-full active:opacity-75 md:transition-transform md:hover:scale-105 md:active:scale-95"
          aria-label="Previous slide"
        >
          <BtnPrevIcon />
        </button>

        <button
          type="button"
          className="image-banner-next flex items-center justify-center cursor-pointer w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] md:w-[40px] md:h-[40px] [&>svg]:w-full [&>svg]:h-full active:opacity-75 md:transition-transform md:hover:scale-105 md:active:scale-95"
          aria-label="Next slide"
        >
          <BtnNextIcon />
        </button>
      </div>
    </Section>
  );
};

export default ImageB;
