import OfferSection from "../components/OfferSection";
import LandingNavbar from "../components/navbar/LandingNavbar";
import ImageB from "../components/banners/Image";
import SlidingTitle from "../components/sliders/SlidingTitle";
import Form1 from "../components/forms/Form1";
import { SectionWithContainer } from "../components/sectionComponants";
import { landingPageData } from "./(landing-page)/components/pagedata";
import { About } from "./(landing-page)/components/About";
import { Room } from "./(landing-page)/components/Room";
import { Experience } from "./(landing-page)/components/Experience";
import { Dining } from "./(landing-page)/components/Dining";
import { Gallery } from "./(landing-page)/components/Gallery";
import { Location } from "./(landing-page)/components/Location";
import { Faqs } from "./(landing-page)/components/Faqs";
import { Reviews } from "./(landing-page)/components/Reviews";
import { LandingFooter } from "./(landing-page)/components/LandingFooter";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#EEEEDC] text-[#192118] font-sans flex flex-col">
      {/* 1. Top Offer Announcement Bar */}
      <OfferSection />

      {/* 2. Header Navigation */}
      <LandingNavbar />

      {/* 3. Hero Image Swiper Banner */}
      <ImageB hero={landingPageData.hero} />

      {/* 4. Sliding Ticker Marquee */}
      <SlidingTitle items={landingPageData.step} />

      {/* 5. Horizontal Booking Form Strip & Benefits Disclaimer */}
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="bg-[#30402A] border-b border-[#B58A4A]/30 py-6 px-4 md:px-8"
        containerClassName="space-y-4 max-w-7xl mx-auto"
      >
        <div id="form">
          <Form1 />
        </div>
        <p
          className="text-xs text-[#EEEEDC]/80 max-w-3xl text-center mx-auto font-sans tracking-wide pt-1"
          dangerouslySetInnerHTML={{ __html: landingPageData.hero.benefits }}
        />
      </SectionWithContainer>

      {/* 6. Remaining Landing Page Sections */}
      <About />
      <Room />
      <Experience />
      <Dining />
      <Gallery />
      <Location />
      <Faqs />
      <Reviews />
      <LandingFooter />
    </main>
  );
}
