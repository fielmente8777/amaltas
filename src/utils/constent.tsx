export const WHATSAPP_NUMBER = "+918868888494";
export const PHONE_NUMBER = "+918868888494";
export const EMAIL_ADDRESS = "demo@gmail.com";
export const LOCATION_ADDRESS = "Himmatpur Dotiyal, Dhela Road, Ramnagar, Jim Corbett, Uttarakhand";
export const enCodeText = (text: string) => encodeURIComponent(text);
export const contact: any = {
  phone: "+918868888494",
  email: "demo@gmail.com",
  location: "Himmatpur Dotiyal, Dhela Road, Ramnagar, Jim Corbett, Uttarakhand",
  addressLink: "https://maps.google.com",
  formDomain: "amaltas",
  formHid: "12345",
};
export const openWhatsApp = (sectionOrEvent?: any) => {
  const number = "918868888494";
  const sectionText = typeof sectionOrEvent === "string" ? sectionOrEvent : "";
  const message = sectionText
    ? `Hi, I am looking at Amaltas ${sectionText} and want to enquire.`
    : "Hi, I want to enquire about Amaltas Resort.";
  if (typeof window !== "undefined") {
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank");
  }
};

export const scrollToForm = () => {
  if (typeof window !== "undefined") {
    const el = document.getElementById("booking-form") || document.getElementById("form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};
