"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Label from "@/component/label";
import QuoteIcon from "../icon/quoteIcon";
import Image from "next/image";

interface Props {
  imgCover: string;
  title: string;
  desc: string;
  duration: string;
  type: string;
  testiWord: string;
  personImag: string;
  personName: string;
}

export default function WorkCard({
  imgCover,
  title,
  desc,
  duration,
  type,
  testiWord,
  personImag,
  personName,
}: Props) {
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <Fragment>
      <div
        ref={cardRef}
        className={`w-full flex items-center gap-24 p-8 bg-[#E9ECF2] rounded-xl${
          inView
            ? " animate__animated animate__fadeInUp"
            : "opacity-0 invisible"
        }`}
      >
        <div className="h-[31.25rem] w-[40.5rem] rounded-[0.625rem] shrink-0 relative overflow-hidden">
          <Image
            src={imgCover}
            alt="LifetimeArt Testimonial"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-medium text-[2.5rem] tracking-[-1px] leading-[120%] text-[#101014]">
            {title}
          </p>
          <p className="tracking-[-0.1px] leading-[170%] text-[#3D3D47]">
            {desc}
          </p>
          <div className="flex items-center gap-2">
            <Label text={type} />
            <Label text={duration} />
          </div>
          <div className="flex items-start gap-2">
            <QuoteIcon />
            <div className="flex flex-col gap-3">
              <p className="tracking-[-0.2px] leading-[170%] text-lg text-[#3D3D47]">
                {testiWord}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-[3.125rem] h-[3.125rem] relative overflow-hidden rounded-full">
                  <Image
                    src={personImag}
                    alt="LifetimeArt Testimonial"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <p className="tracking-[-0.1px] leading-[20.8px] text-[#101014]">
                  {personName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
