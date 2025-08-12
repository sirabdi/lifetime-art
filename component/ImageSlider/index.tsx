"use client";

import Image from "next/image";
import { Fragment } from "react";
import Slider from "react-slick";

interface Props {
  items: string[];
}

export default function ImageSlider({ items }: Props) {
  const allItems = [...items, ...items];

  const settings = {
    dots: true,
    speed: 500,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    centerPadding: "20px",
  };

  return (
    <Fragment>
      <div className="hidden sm:block overflow-hidden w-full relative -z-10">
        <div
          className="flex animate-slider-infinite"
          style={{ width: `${allItems.length * 400}px` }}
        >
          {allItems.map((src, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay={idx * 150}
              className="flex-shrink-0 w-[400px] h-[500px] mx-3 relative overflow-hidden"
            >
              <Image
                alt={`Slider item ${idx + 1}`}
                style={{ objectFit: "cover" }}
                loading="eager"
                fill
                src={src}
                priority
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="block sm:hidden about-us-slider-container"
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-delay="1200"
      >
        <Slider {...settings}>
          {items.map((src, idx) => (
            <div
              key={idx}
              className="h-[400px] shrink-0 relative overflow-hidden"
            >
              <Image
                alt={`Slider item ${idx + 1}`}
                style={{ objectFit: "cover" }}
                loading="eager"
                fill
                src={src}
                priority
              />
            </div>
          ))}
        </Slider>
      </div>
    </Fragment>
  );
}
