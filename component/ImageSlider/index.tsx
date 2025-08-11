"use client";

import Image from "next/image";
import { Fragment } from "react";

interface Props {
  items: string[];
}

export default function ImageSlider({ items }: Props) {
  const allItems = [...items, ...items];
  return (
    <Fragment>
      <div className="overflow-hidden w-full relative -z-10">
        <div
          className="flex animate-slider-infinite"
          style={{ width: `${allItems.length * 400}px` }}
        >
          {allItems.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[320px] xl:w-[400px] h-[400px] xl:h-[500px] mx-3 relative overflow-hidden"
            >
              <Image
                alt={`Slider item ${idx + 1}`}
                objectFit="cover"
                loading="eager"
                layout="fill"
                src={src}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
