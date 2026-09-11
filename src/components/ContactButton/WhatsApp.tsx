"use client";

import { enCodeText } from "@/src/utils/constent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp({ whatsAppNumber }: { whatsAppNumber: string | string[] }) {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }
  const rawNumber = Array.isArray(whatsAppNumber) ? whatsAppNumber[0] || "" : (whatsAppNumber || "");
  const formattedNumber = String(rawNumber).replace(/[\s+]/g, "");

  return (
    <div className={`fixed bottom-24 lg:left-3 left-4 z-20 cursor-pointer`}>
      <Link
        href={`https://wa.me/${formattedNumber}?text=${enCodeText}`}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500 hover:bg-green-600 transition-all hover:shadow-2xl"
      >
        <FaWhatsapp size={29} color="white" />
        <span className="sr-only">WhatsApp</span>
      </Link>
    </div>
  );
}

export default Whatsapp;
