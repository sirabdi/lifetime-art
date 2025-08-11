"use client";

import { Fragment } from "react";
import AvailableIcon from "@/component/icon/availebleIcon";
import ArrowRightTopIcon from "@/component/icon/arrowRightTopIcon";
import Image from "next/image";
import ButtonPrimary from "@/component/button/primary";

export default function Hero() {
  return (
    <Fragment>
      <div className="bg-[#101014] h-screen flex items-center">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-20">
          <div className="flex flex-col justify-center h-full w-[34.375rem]">
            <div className="flex flex-col gap-1 mb-18">
              <div className="bg-[#28282C] py-2 px-3 rounded-full flex items-center gap-2 w-fit">
                <AvailableIcon />
                <p className="text-white text-sm">Available to work</p>
              </div>
              <p className="text-[3.5rem] font-medium text-white tracking-[-1px] leading-[120%] mb-4">
                Your trusted partner for quality home improvement
              </p>
              <p className="text-xl text-[#D0D1DB] leading-[170%] tracking-[-0.3px] w-[30.125rem]">
                LifetimeArt delivers expert home improvements, creating
                beautiful and functional spaces with quality craftsmanship.
              </p>
            </div>
            <ButtonPrimary
              label="Work with us"
              icon={<ArrowRightTopIcon className="text-[#101014]" />}
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-[40.795rem] h-[52.219rem] rounded-xl overflow-hidden relative z-10">
              <Image
                src={"/dining-area-brazilian-folklore-decor.png"}
                alt="LifetimeArt Hero Image"
                objectFit="cover"
                loading="eager"
                layout="fill"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
