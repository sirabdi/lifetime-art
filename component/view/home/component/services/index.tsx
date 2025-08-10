"use client";

import Image from "next/image";
import { Fragment } from "react";

export default function Services() {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 bg-[#FAFAFA]">
        <div className="container mx-auto py-[7.5rem]">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="bg-[#28282C] py-2 px-3 rounded-full flex items-center gap-2 w-fit">
              <p className="text-white font-semibold">Services</p>
            </div>
            <p className="text-5xl text-[#101014] font-medium tracking-[-0.8px] leading-[55px]">
              What we do
            </p>
            <p className="text-xl tracking-[-0.3px] leading-[170%] text-[#3D3D47]">
              Find out which one of our services fit the needs of your project
            </p>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[42.5rem] h-[48.563rem] relative overflow-hidden rounded-xl">
              <Image
                src={"/kitchen-area.png"}
                alt="LifetimeArt Hero Image"
                objectFit="cover"
                loading="eager"
                layout="fill"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2"></div>
        </div>
      </div>
    </Fragment>
  );
}
