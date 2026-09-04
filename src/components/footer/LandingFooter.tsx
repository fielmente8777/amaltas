"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMapPin, FiPhone, FiMail, FiUser } from "react-icons/fi";

import { Container } from "../sectionComponants";
import { footerData } from "./footerdata";
import Form1 from "../forms/Form1";

const LandingFooter = () => {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  }

  const data = footerData;

  return (
    <footer className="max_screen_width bg-primary text-white">
      {/* ================= BOOKING FORM ================= */}
      <div className="border-y border-white/20">
        <Container>
          <div className="py-4 text-black">
            {/* FORM */}
            <Form1 />

            {/* OFFER TEXT */}
            <p className="mt-2 text-center text-xs text-white/90 md:text-sm">
              Save 15% when you book direct · Free cancellation on most dates*
            </p>
          </div>
        </Container>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <Container>
        <div
          className="
          grid
          grid-cols-1
          gap-10
          py-12
          sm:grid-cols-2
          md:grid-cols-[0.8fr_1fr_1fr]
          md:gap-16
          md:py-14
          lg:py-16
        "
        >
          {/* LOGO */}
          <div className="flex items-start justify-start">
            <div
              className="
                relative
                h-[170px]
                w-[190px]
                overflow-hidden
                rounded-lg
                bg-secondary
              "
            >
              <Image
                src={data.logo}
                alt="Trikone"
                fill
                sizes="190px"
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl md:text-[28px]">Location</h2>

            {data.lists[0]?.links.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <FiMapPin size={19} className="mt-1 shrink-0 text-p1" />

                <Link
                  href={item.href ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    max-w-sm
                    whitespace-pre-line
                    text-base
                    leading-6
                    text-white/90
                    md:text-base
                    md:leading-7
                  "
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl md:text-[28px]">Contact</h2>

            <div className="flex flex-col gap-4">
              {data.lists[1]?.links.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span>
                    {index === 0 ? (
                      <FiPhone size={19} className="mt-1 shrink-0 text-p1" />
                    ) : (
                      <FiMail size={19} className="mt-1 shrink-0 text-p1" />
                    )}
                  </span>

                  <div className="grid md:grid-cols-[auto_auto_1fr] w-full gap-1">
                    <Link
                      href={item.href ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      text-white/90 text-base
                    "
                    >
                      {item.label}
                    </Link>
                    {item.href2 && <span className="md:block hidden">/</span>}
                    {item.href2 && (
                      <Link
                        href={item.href2 ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        text-white/90 text-base
                      "
                      >
                        {item.label2}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BORDER ================= */}
        <div className="h-px w-full bg-white/30" />
      </Container>

      {/* ================= COPYRIGHT ================= */}
      <Container>
        <div
          className="
          flex
          min-h-[64px]
          items-center
          justify-between
          gap-4
          max-md:flex-col
          max-md:justify-center
          max-md:py-4
        "
        >
          <div className="flex flex-wrap justify-center gap-1 text-sm text-white">
            <span>© {new Date().getFullYear()} Trikone.</span>

            <span>All rights reserved.</span>
          </div>

          <p className="text-sm text-white">
            Powered by{" "}
            <Link
              href="https://www.fielmente.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-p1"
            >
              Fielmente
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default LandingFooter;
