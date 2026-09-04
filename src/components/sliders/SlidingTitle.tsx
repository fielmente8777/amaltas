import type { ReactNode } from "react";
import "./sliding.title.scss";

interface SlidingTitleItem {
  title: string;
  icon: ReactNode;
}

export default function SlidingTitle({
  items,
  ariaHidden = false,
}: {
  items: SlidingTitleItem[];
  ariaHidden?: boolean;
}) {
  const titles = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden border border-primary bg-secondary py-3 text-primary max_screen_width"
      aria-hidden={ariaHidden}
    >
      <div className="marquee-wrapper">
        <div className="marquee-track items-center gap-14">
          {titles.map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= items.length}
              className="marquee-item tracking-widest"
            >
              <span className="flex items-center gap-2">
                {/* INDIVIDUAL ICON */}
                <span className="flex shrink-0 items-center">
                  {item.icon}
                </span>

                {/* TITLE */}
                {item.title}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}