"use client";

import dynamic from "next/dynamic";

const SEOVideo = dynamic(() => import("./SEOVideo"), {
  ssr: false,
});

interface LazyLoadedVideoProps {
  src: string;
  poster?: string;
}

export default function LazyLoadedVideo({
  src,
  poster,
}: LazyLoadedVideoProps) {
  return (
    <SEOVideo
      src={src}
      poster={poster}
    />
  );
}