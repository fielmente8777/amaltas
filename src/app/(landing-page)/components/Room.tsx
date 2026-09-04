"use client";

import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { landingPageData } from "./pagedata";
import SwiperCarousel from "@/src/components/sliders/SwiperCarousel";
import { Navigation, Autoplay } from "swiper/modules";
import { BtnNextIcon, BtnPrevIcon, WhatsAppIcon } from "@/src/utils/icons";

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
  openWhatsApp: (roomTitle: string) => void;
  scrollToForm: () => void;
}

const RoomCard: React.FC<RoomItemProps> = ({ room, isEven, openWhatsApp, scrollToForm }) => {
  const images = room.images && room.images.length > 0 ? room.images : [room.image, "/durgadevi-room.png", "/banner-image.png"];

  return (
    <div
      className={`relative flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center w-full max-w-[1320px] mx-auto`}
    >
      {/* Image Slider Container with Autoplay (775px x 512px, radius 8px) */}
      <div className="relative w-full lg:w-[775px] max-w-full h-[260px] sm:h-[380px] lg:h-[512px] rounded-[8px] overflow-hidden shadow-sm shrink-0">
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          spaceBetween={0}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: `.room-prev-${room.id}`,
            nextEl: `.room-next-${room.id}`,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
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

        {/* Swiper Arrow Overlay Buttons */}
        <div
          className={`absolute bottom-3.5 sm:bottom-5 ${isEven ? "left-3.5 sm:left-5" : "right-3.5 sm:right-5"
            } z-20 flex gap-2 sm:gap-2.5`}
        >
          <button
            type="button"
            aria-label="Previous photo"
            className={`room-prev-${room.id} transition-transform hover:scale-105 active:scale-95 cursor-pointer drop-shadow-md flex items-center justify-center scale-90 sm:scale-100`}
          >
            <BtnPrevIcon />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            className={`room-next-${room.id} transition-transform hover:scale-105 active:scale-95 cursor-pointer drop-shadow-md flex items-center justify-center scale-90 sm:scale-100`}
          >
            <BtnNextIcon />
          </button>
        </div>
      </div>

      {/* Overlapping Content Box (609.33px x 343.2px, radius 8px, bg #EEEEDC, border #D6D2C7) */}
      <div
        className={`w-full max-w-[92%] sm:max-w-full lg:w-[609.33px] z-10 bg-[#EEEEDC] border border-[#D6D2C7] rounded-[8px] p-5 sm:p-7 lg:p-8 flex flex-col gap-3.5 sm:gap-5 shadow-lg mt-[-30px] sm:mt-[-40px] lg:mt-0 ${
          isEven
            ? "lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"
            : "lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2"
        }`}
      >
        <div className="space-y-1.5 sm:space-y-2">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#B58A4A] font-semibold font-varela block">
            {room.tag}
          </span>

          <h3 className="heading-h3 font-varela text-xl sm:text-2xl lg:text-3xl text-[#30402A]">
            {room.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#6B635E] leading-relaxed font-dm-sans">
            {room.description}
          </p>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {room.features.map((feat, idx) => (
            <span
              key={idx}
              className="px-2.5 sm:px-3 py-1 bg-[#D6D2C7] text-[#30402A] text-[11px] sm:text-xs font-sans rounded-[4px] border border-[#D6D2C7]"
            >
              {feat}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 font-sans pt-1">
          <button
            onClick={() => openWhatsApp(room.title)}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#30402A] border border-[#30402A] px-4 sm:px-5 py-2.5 rounded text-xs font-medium transition-all cursor-pointer shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#30402A]" />
            Enquire Now
          </button>

          <button
            onClick={scrollToForm}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#30402A] hover:bg-[#243120] text-white px-4 sm:px-5 py-2.5 rounded text-xs font-medium transition-all cursor-pointer shadow-md"
          >
            <FaCalendarAlt className="text-white text-sm" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export const Room: React.FC = () => {
  const openWhatsApp = (roomTitle: string) => {
    window.open(
      `https://wa.me/918868888494?text=Hi%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(
        roomTitle
      )}%20at%20Amaltas%20Villa.`,
      "_blank"
    );
  };

  const scrollToForm = () => {
    const el = document.getElementById("booking-form") || document.getElementById("form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#EEEEDC] py-12 md:py-20 px-4 sm:px-6 md:px-12 border-b border-[#D6D2C7]">
      <div className="max-w-[1320px] mx-auto space-y-10 md:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 w-full">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-[#B58A4A] font-semibold font-varela">
              {landingPageData.accommodation.tag}
            </p>
            <h2 className="heading-h2 font-varela text-2xl sm:text-4xl lg:text-5xl text-[#30402A] leading-tight max-w-2xl">
              {landingPageData.accommodation.heading}
            </h2>
          </div>
          <div className="lg:text-left flex lg:justify-end">
            <p className="text-xs sm:text-sm md:text-base text-[#6B635E] max-w-sm lg:max-w-[400px] font-dm-sans leading-relaxed">
              {landingPageData.accommodation.subtext}
            </p>
          </div>
        </div>

        {/* Room Cards Stack */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {landingPageData.accommodation.rooms.map((room, index) => (
            <RoomCard
              key={room.id}
              room={room}
              isEven={index % 2 === 0}
              openWhatsApp={openWhatsApp}
              scrollToForm={scrollToForm}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Room;
