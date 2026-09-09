"use client";

import React from "react";
import Image from "next/image";
import { landingPageData } from "./pagedata";
import SwiperCarousel from "@/src/components/sliders/SwiperCarousel";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { BtnNextIcon, BtnPrevIcon, WhatsAppIcon, BookNowIcon } from "@/src/utils/icons";
import { getWhatsAppUrl } from "@/src/utils/constent";
import { useWebContext } from "@/src/context-api/WebContext";

interface RoomItemProps {
  room: {
    id: string;
    tag: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    images?: string[];
  };
  isEven: boolean;
}

const RoomCard: React.FC<RoomItemProps> = ({
  room,
  isEven,
}) => {
  const { setIsOpenFormPopUp } = useWebContext();
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(null);
  const images = room.images && room.images.length > 0 ? room.images : [room.image];

  return (
    <div
      className={`relative flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } items-center w-full max-w-[1320px] mx-auto bg-[#EEEEDC] lg:bg-transparent rounded-[8px] border border-[#D6D2C7] lg:border-none overflow-hidden lg:overflow-visible shadow-sm lg:shadow-none`}
    >
      {/* Image Slider Container with Direct Navigation */}
      <div className="relative w-full lg:w-[775px] max-w-full h-[250px] sm:h-[340px] lg:h-[512px] rounded-t-[8px] lg:rounded-[8px] overflow-hidden shrink-0">
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          spaceBetween={0}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          loop={true}
          speed={700}
          className="w-full h-full"
          swiperSlideClassName="w-full h-full"
          renderSlide={(img) => (
            <div className="relative w-full h-full">
              <Image
                src={img}
                alt={room.title}
                fill
                className="object-cover object-center"
              />
            </div>
          )}
        />

        {/* Swiper Arrow Buttons: Flow Horizontal, Width: 88px, Height: 40px, Top: 454px, Left: 21px, Gap: 8px */}
        <div className="absolute z-20 flex flex-row items-center gap-[8px] w-[88px] h-[40px] left-[14px] sm:left-[21px] bottom-[14px] sm:bottom-[18px] lg:bottom-auto lg:top-[454px] lg:left-[21px]">
          <button
            type="button"
            onClick={() => swiperInstance?.slidePrev()}
            aria-label="Previous photo"
            className="w-[40px] h-[40px] cursor-pointer drop-shadow-md flex items-center justify-center hover:opacity-90 active:opacity-75 shrink-0"
          >
            <BtnPrevIcon />
          </button>

          <button
            type="button"
            onClick={() => swiperInstance?.slideNext()}
            aria-label="Next photo"
            className="w-[40px] h-[40px] cursor-pointer drop-shadow-md flex items-center justify-center hover:opacity-90 active:opacity-75 shrink-0"
          >
            <BtnNextIcon />
          </button>
        </div>
      </div>

      {/* Content Box (Flush under image on Mobile matching Figma, Overlapping Box on Desktop) */}
      <div
        className={`w-full lg:w-[609.33px] z-10 bg-[#EEEEDC] lg:border lg:border-[#D6D2C7] rounded-b-[8px] lg:rounded-[8px] px-5 sm:px-8 lg:px-[47px] pt-6 sm:pt-8 lg:pt-[47px] pb-6 sm:pb-8 lg:pb-[49px] flex flex-col lg:shadow-lg mt-0 ${
          isEven
            ? "lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"
            : "lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
        }`}
      >
        <div>
          <span className="text-[11px] sm:text-[14px] lg:text-[16px] uppercase tracking-widest text-[#B58A4A] font-normal font-dm-sans block">
            {room.tag}
          </span>

          <h3 className="heading-h3 font-varela text-xl sm:text-2xl lg:text-3xl text-[#30402A] mt-2 sm:mt-3 lg:mt-[14px]">
            {room.title}
          </h3>

          <p className="text-[13px] sm:text-[15px] lg:text-[16px] text-[#6B635E] leading-relaxed font-manrope font-normal mt-2.5 sm:mt-3.5 lg:mt-[16px]">
            {room.description}
          </p>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3.5 sm:mt-4 lg:mt-[23px]">
          {room.features.map((feat, idx) => (
            <span
              key={idx}
              className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-transparent text-[#5F6764] text-[11px] sm:text-[12px] font-manrope font-normal rounded-[2px] border border-[#D6D2C7]"
            >
              {feat}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-row items-center gap-2.5 sm:gap-[12px] font-open-sans mt-4 sm:mt-5 lg:mt-[25px]">
          <a
            href={getWhatsAppUrl(room.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial w-full sm:w-[160px] h-[40px] sm:h-[44px] flex items-center justify-center gap-[8px] bg-white hover:bg-gray-50 text-[#30402A] border border-[#30402A] px-[12px] sm:px-[16px] py-[10px] sm:py-[12px] rounded-[4px] text-xs sm:text-sm font-normal transition-all cursor-pointer shadow-sm whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#30402A]" />
            Enquire Now
          </a>

          <button
            onClick={() => setIsOpenFormPopUp(true)}
            className="flex-1 sm:flex-initial w-full sm:w-[160px] h-[40px] sm:h-[44px] flex items-center justify-center gap-[8px] bg-[#30402A] hover:bg-[#243120] text-white border border-[#30402A] px-[12px] sm:px-[16px] py-[10px] sm:py-[12px] rounded-[4px] text-xs sm:text-sm font-normal transition-all cursor-pointer shadow-md whitespace-nowrap"
          >
            <BookNowIcon className="w-3.5 h-3.5 text-white" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export const Room: React.FC = () => {

  return (
    <section className="w-full bg-[#FDF9EE] py-8 sm:py-12 md:py-20 px-4 sm:px-6 md:px-12 border-b border-[#D6D2C7]">
      <div className="max-w-[1320px] mx-auto space-y-6 sm:space-y-10 md:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-6 w-full">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <p className="text-[14px] sm:text-[16px] uppercase tracking-widest text-[#B58A4A] font-medium font-dm-sans">
              {landingPageData.accommodation.tag}
            </p>
            <h2
              className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-5xl text-[#30402A] leading-tight max-w-2xl"
              dangerouslySetInnerHTML={{ __html: landingPageData.accommodation.heading }}
            />
          </div>
          <div className="flex lg:justify-end">
            <p
              className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#6B635E] max-w-full lg:max-w-[490px] font-dm-sans leading-relaxed text-left"
              dangerouslySetInnerHTML={{ __html: landingPageData.accommodation.subtext }}
            />
          </div>
        </div>

        {/* Room Cards Stack */}
        <div className="space-y-8 sm:space-y-16 lg:space-y-24">
          {landingPageData.accommodation.rooms.map((room, index) => (
            <RoomCard
              key={room.id}
              room={room}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Room;
