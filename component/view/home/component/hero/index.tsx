"use client";

import { Fragment } from "react";
import AvailableIcon from "@/component/icon/availebleIcon";
import ArrowRightTopIcon from "@/component/icon/arrowRightTopIcon";
import Image from "next/image";
import ButtonPrimary from "@/component/button/primary";

export default function Hero() {
  return (
    <Fragment>
      <div className="bg-[#101014] h-screen flex items-end min-[1440px]:items-center pb-8 min-[1440px]:pb-0 relative min-[1440px]:z-auto">
        <div className="container mx-auto grid grid-cols-1 min-[1440px]:grid-cols-2 gap-4 px-10 min-[1440px]:px-20 relative mb-3 lg:mb-8 min-[1440px]:!mb-0 z-1">
          <div className="flex flex-col justify-center h-full w-full min-[1440px]:w-[34.375rem]">
            <div className="flex flex-col gap-2 mb-12 xl:mb-18">
              <div
                className="bg-[#28282C] py-2 px-3 rounded-full flex items-center gap-2 w-fit"
                data-aos="zoom-in-up"
                data-aos-duration="300"
              >
                <AvailableIcon />
                <p className="text-white text-sm">Available to work</p>
              </div>
              <p className="text-[40px] min-[1440px]:text-[3.5rem] font-medium text-white tracking-[-1px] leading-[120%] mb-4">
                {/* Your trusted partner for quality home improvement */}
                <span
                  data-aos="fade-in"
                  data-aos-duration="300"
                  data-aos-delay="0"
                >
                  Your trusted partner
                </span>
                <br />
                <span
                  data-aos="fade-in"
                  data-aos-duration="300"
                  data-aos-delay="150"
                >
                  for quality home
                </span>
                <br />
                <span
                  data-aos="fade-in"
                  data-aos-duration="300"
                  data-aos-delay="300"
                >
                  improvement
                </span>
              </p>
              <p className="text-base min-[1440px]:text-xl text-[#D0D1DB] leading-[170%] tracking-[-0.3px] w-full min-[1440px]:w-[30.125rem]">
                <span
                  data-aos="fade-in"
                  data-aos-duration="300"
                  data-aos-delay="600"
                >
                  LifetimeArt delivers expert home improvements,
                </span>
                <br />
                <span
                  data-aos="fade-in"
                  data-aos-duration="300"
                  data-aos-delay="900"
                >
                  creating beautiful and functional spaces with quality
                </span>
                <br />
                <span
                  data-aos="fade-in"
                  data-aos-duration="300"
                  data-aos-delay="1200"
                >
                  craftsmanship.
                </span>
              </p>
            </div>
            <ButtonPrimary
              label="Get a free quote"
              icon={<ArrowRightTopIcon className="text-[#101014]" />}
              className="w-fit"
              data-aos="zoom-in-up"
              data-aos-duration="300"
              data-aos-delay="1500"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            />
          </div>
          {/* Web */}
          <div className="hidden flex-col items-center justify-center h-full min-[1440px]:!flex">
            <div
              className="w-[40.795rem] h-[52.219rem] rounded-xl overflow-hidden relative"
              data-aos="zoom-in"
              data-aos-duration="400"
            >
              <Image
                src={"/dining-area-brazilian-folklore-decor.png"}
                alt="LifetimeArt Hero Image"
                objectFit="cover"
                loading="eager"
                fill
                priority
              />
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="absolute w-full px-5 block min-[1440px]:!hidden">
          <div
            className="rounded-xl w-full h-[calc(100vh-130px)] bg-[#101014] mx-auto relative overflow-hidden"
            data-aos="zoom-in"
            data-aos-duration="400"
          >
            <Image
              src={"/dining-area-brazilian-folklore-decor.png"}
              alt="LifetimeArt Hero Image"
              className="opacity-20"
              objectFit="cover"
              loading="eager"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
