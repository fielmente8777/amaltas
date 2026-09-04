export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqSectionProps {
  items: FaqItem[];
}

export interface AccommodationSectionProps {
  items?: any[];
  cards: any[];
}

export interface LandingPageData {
  offer: string[];
  hero: any;
  about: any;
  accommodation: any;
  experience: any;
  dining: any;
  gallery: any;
  location: any;
  faqs: any;
  reviews: any;
  contact: any;
}
