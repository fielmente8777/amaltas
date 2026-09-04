import type { ReactNode } from "react";
import "./sliding.title.scss";
import { MarqueeCheckIcon } from "@/src/utils/icons";

interface SlidingTitleItem {
  title: string;
  icon?: ReactNode;
}

export default function SlidingTitle({
  items,
  ariaHidden = false,
}: {
  items: SlidingTitleItem[];
  ariaHidden?: boolean;
}) {
  const titles = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y border-[#D6D2C7] bg-[#EEEEDC] py-3.5 text-[#30402A] w-full font-sans text-xs md:text-sm font-semibold tracking-wider"
      aria-hidden={ariaHidden}
    >
      <div className="marquee-wrapper">
        <div className="marquee-track flex items-center gap-10 md:gap-14">
          {titles.map((item, i) => (
            <span key={i} className="marquee-item tracking-widest shrink-0 uppercase">
              <span className="flex items-center gap-2">
                <span className="shrink-0 text-[#B58A4A]">{item.icon || <MarqueeCheckIcon />}</span>
                <span>{item.title}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}