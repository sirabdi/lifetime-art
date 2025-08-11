"use client";

import { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <div className="container flex flex-col gap-12 mx-auto p-20 bg-[#101014] rounded-t-xl mt-8">
        <div className="flex items-center justify-between">
          <div></div>
          <div className="flex flex-col gap-6">
            <p className="text-2xl text-white font-medium leading-[26.4px] tracking-[-0.4px]">
              Quick links
            </p>
            <div className="flex items-center gap-36">
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
          © 2025 LifetimeArt. All rights reserved.
        </p>
      </div>
    </Fragment>
  );
}
