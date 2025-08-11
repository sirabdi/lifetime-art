"use client";

import Image from "next/image";
import { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 px-5 sm:px-5">
        <div className="container flex flex-col gap-12 mx-auto py-[60px] px-5 sm:p-20 bg-[#101014] rounded-t-xl mt-8">
          <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-0 justify-between">
            <div>
              <Image
                src={"/life-time-art-logo.png"}
                alt={`LifetimeArt Logo`}
                loading="eager"
                width={154.8}
                height={32}
                priority
              />
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-2xl text-white font-medium leading-[26.4px] tracking-[-0.4px]">
                Quick links
              </p>
              <div className="flex items-center gap-24 sm:gap-36">
                <ul className="flex flex-col gap-2 text-white">
                  <li className="text-[#D0D1DB] text-lg leading-[27px] tracking-[-0.1px]">
                    About Us
                  </li>
                  <li className="text-[#D0D1DB] text-lg leading-[27px] tracking-[-0.1px]">
                    Services
                  </li>
                  <li className="text-[#D0D1DB] text-lg leading-[27px] tracking-[-0.1px]">
                    Our Work
                  </li>
                </ul>
                <ul className="flex flex-col gap-2 text-white">
                  <li className="text-[#D0D1DB] text-lg leading-[27px] tracking-[-0.1px]">
                    Testimonials
                  </li>
                  <li className="text-[#D0D1DB] text-lg leading-[27px] tracking-[-0.1px]">
                    FAQs
                  </li>
                  <li className="text-[#D0D1DB] text-lg leading-[27px] tracking-[-0.1px]">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="border-[#D0D1DB] opacity-10" />
          <p className="text-lg text-white font-semibold leading-[170%] tracking-[-0.1px]">
            © {new Date().getFullYear()} LifetimeArt. All rights reserved.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
