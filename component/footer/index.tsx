"use client";

import Image from "next/image";
import { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 px-5 xl:px-5">
        <div className="container flex flex-col gap-12 mx-auto py-[60px] px-5 xl:p-20 bg-[#101014] rounded-t-xl mt-8">
          <div className="flex flex-col xl:flex-row items-start gap-8 xl:gap-0 justify-between">
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
              <div className="flex items-center gap-24 xl:gap-36">
                <ul className="flex flex-col gap-2 text-white">
                  <li
                    className="text-[#D0D1DB] text-lg leading-[27px] cursor-pointer tracking-[-0.1px]"
                    onClick={() => {
                      document.getElementById("about")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    About Us
                  </li>
                  <li
                    className="text-[#D0D1DB] text-lg leading-[27px] cursor-pointer tracking-[-0.1px]"
                    onClick={() => {
                      document.getElementById("services")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Services
                  </li>
                  <li
                    className="text-[#D0D1DB] text-lg leading-[27px] cursor-pointer tracking-[-0.1px]"
                    onClick={() => {
                      document.getElementById("our-work")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Our Work
                  </li>
                </ul>
                <ul className="flex flex-col gap-2 text-white">
                  <li
                    className="text-[#D0D1DB] text-lg leading-[27px] cursor-pointer tracking-[-0.1px]"
                    onClick={() => {
                      document.getElementById("testimonials")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Testimonials
                  </li>
                  <li
                    className="text-[#D0D1DB] text-lg leading-[27px] cursor-pointer tracking-[-0.1px]"
                    onClick={() => {
                      document.getElementById("faqs")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    FAQs
                  </li>
                  <li
                    className="text-[#D0D1DB] text-lg leading-[27px] cursor-pointer tracking-[-0.1px]"
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
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
