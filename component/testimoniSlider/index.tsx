"use client";

import { Fragment } from "react";
import Image from "next/image";
import StarIcon from "../icon/starIcon";

interface Props {
  items: string[];
}

export default function TestimoniSlider({ items }: Props) {
  const allItems = [...items, ...items];
  return (
    <Fragment>
      <div className="flex flex-col gap-12">
        <div className="overflow-hidden w-full">
          <div
            className="flex animate-slider-infinite"
            style={{ width: `${allItems.length * 347}px` }}
          >
            {allItems.map((item, i) => (
              <div
                key={i}
                className={`w-[347px] h-[315px] ${
                  i % 2 === 1 ? "bg-[#E9ECF2]" : "bg-[#FAFAFA]"
                } rounded-xl border border-[#E6E6E6] p-8 flex flex-col justify-between mx-3`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, idx) => (
                      <StarIcon key={idx} />
                    ))}
                  </div>
                  <p className="tracking-[-0.1px] leading-[170%]">{item}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[3.125rem] h-[3.125rem] relative overflow-hidden rounded-full">
                    <Image
                      src={"/testimonial/testimonial-1.png"}
                      alt="LifetimeArt Testimonial"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <p className="tracking-[-0.1px] leading-[20.8px] text-[#101014]">
                    Emily Carter
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden w-full">
          <div
            className="flex animate-slider-infinite-reverse"
            style={{ width: `${allItems.length * 347}px` }}
          >
            {allItems.map((item, i) => (
              <div
                key={i}
                className={`w-[347px] h-[315px] ${
                  i % 2 === 1 ? "bg-[#E9ECF2]" : "bg-[#FAFAFA]"
                } rounded-xl border border-[#E6E6E6] p-8 flex flex-col justify-between mx-3`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, idx) => (
                      <StarIcon key={idx} />
                    ))}
                  </div>
                  <p className="tracking-[-0.1px] leading-[170%]">{item}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-[3.125rem] h-[3.125rem] relative overflow-hidden rounded-full">
                    <Image
                      src={"/testimonial/testimonial-1.png"}
                      alt="LifetimeArt Testimonial"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <p className="tracking-[-0.1px] leading-[20.8px] text-[#101014]">
                    Emily Carter
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
