"use client";

import Image from "next/image";
import { Container, Section } from "../sectionComponants";
import { Navigation } from "swiper/modules";
import SwiperCarousel from "../sliders/SwiperCarousel";
import { BtnNextIcon, BtnPrevIcon } from "@/src/utils/icons";
import { footerData } from "../footer/footerdata";

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
      className="relative w-full md:aspect-16/8 aspect-[3.5/4] overflow-hidden"
    >
      {/* ================= BACKGROUND IMAGE SLIDER ================= */}
      <SwiperCarousel
        data={hero.images}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={{
          nextEl: ".image-banner-next",
          prevEl: ".image-banner-prev",
        }}
        loop={true}
        speed={800}
        className="absolute inset-0 w-full h-full"
        swiperSlideClassName="h-full"
        renderSlide={(image) => (
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={hero.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}
      />

      {/* ================= FIXED OVERLAY ================= */}
      {/* <div className="absolute inset-0 z-10 bg-black/20" /> */}

      {/* ================= FIXED CONTENT ================= */}
      <div className="absolute inset-0 z-20 flex items-end pb-5 lg:pb-10">
        <Container>
          <div className="flex flex-col gap-6">
            <div className="grid lg:grid-cols-[1.2fr_1fr] grid-cols-1">
              <div className="space-y-2 w-full text-left">
                <div
                  className="
                                relative
                                mb-4
                                md:h-[120px]
                                md:aspect-[4/3]
                                h-[75px]
                                aspect-[4/3.5]
                                overflow-hidden
                                rounded-lg
                                bg-secondary
                              "
                >
                  <Image
                    src={footerData.logo}
                    alt="Trikone"
                    fill
                    sizes="190px"
                    className="object-cover p-4"
                  />
                </div>

                <p className="flex mx-0 bg-white/20 backdrop-blur-2xl items-center gap-2 md:text-[10px] text-xs text-white w-fit border border-primary py-1 px-2.5 rounded-full uppercase tracking-widest">
                  {hero.tag}
                </p>

                <h1
                  className="font-primary text-2xl md:text-[56px] text-white md:max-w-6xl"
                  dangerouslySetInnerHTML={{
                    __html: hero.title,
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ================= NAVIGATION ================= */}
      <div className="absolute bottom-6 right-5 md:bottom-6 md:right-8 z-30 flex gap-2">
        <button
          type="button"
          className="image-banner-prev flex items-center justify-center md:w-10 md:h-10 rounded-full text-primary hover:bg-primary w-5 h-5 hover:text-white transition-colors active:scale-95"
          aria-label="Previous slide"
        >
          <BtnPrevIcon />
        </button>

        <button
          type="button"
          className="image-banner-next flex items-center justify-center md:w-10 md:h-10 rounded-full text-primary hover:bg-primary w-5 h-5 hover:text-white transition-colors active:scale-95"
          aria-label="Next slide"
        >
          <BtnNextIcon />
        </button>
      </div>
    </Section>
  );
};

export default ImageB;
