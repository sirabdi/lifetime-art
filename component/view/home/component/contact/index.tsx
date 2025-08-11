"use client";

import { Fragment } from "react";
import Label from "@/component/label";
import InstagramIcon from "@/component/icon/instagramIcon";
import TiktokIcon from "@/component/icon/tiktokIcon";
import TwitterIcon from "@/component/icon/twitterIcon";
import ButtonBase from "@/component/button/base";

export default function Contact() {
  return (
    <Fragment>
      <div className="flex flex-col gap-2 px-5 sm:px-5">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-24 min-[1440px]:!gap-4 p-20 bg-[#101014] rounded-xl px-5 min-[1440px]:!px-20">
          <div className="flex flex-col gap-12 justify-start h-full">
            <div className="flex flex-col gap-3">
              <Label text="Contact" />
              <p className="text-5xl text-[#FFFFFF] font-medium tracking-[-0.8px] leading-[55px] mb-2">
                Get in Touch
              </p>
              <p className="text-xl text-[#D0D1DB] leading-[170%] tracking-[-0.3px] w-full sm:w-[30.125rem]">
                For any inquiries or to explore your vision further, we invite
                you to contact our professional team using the details provided
                below.
              </p>
            </div>

            <ul className="flex flex-col gap-4 border-[#D0D1DB1A] border-b pb-6">
              <li>
                <p className="text-lg text-[#D0D1DB] tracking-[-0.1px] leading-[170%]">
                  <b className="text-white font-semibold">Office</b> &nbsp;{" "}
                  <br className="block min-[1440px]:!hidden" /> 150 Old Park Ln,
                  London W1K 1QZ
                </p>
              </li>
              <li>
                <p className="text-lg text-[#D0D1DB] tracking-[-0.1px] leading-[170%]">
                  <b className="text-white font-semibold">Email</b> &nbsp;
                  <br className="block min-[1440px]:!hidden" /> hello@refit.com
                </p>
              </li>
              <li>
                <p className="text-lg text-[#D0D1DB] tracking-[-0.1px] leading-[170%]">
                  <b className="text-white font-semibold">Telephone</b> &nbsp;
                  <br className="block min-[1440px]:!hidden" /> 07716 534984
                </p>
              </li>
            </ul>

            <div>
              <p className="text-lg font-semibold text-white tracking-[-0.1px] leading-[170%] mb-2">
                Follow Us
              </p>
              <div className="flex items-center gap-5">
                <InstagramIcon />
                <TiktokIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-[#E6E6E6] p-5">
            <form className="flex flex-col gap-4 w-full">
              <div>
                <p className="font-medium text-[#101014] tracking-[-0.1px]">
                  Name<span className="text-red-600">*</span>
                </p>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  className="border h-12 bg-[#FAFAFA] border-[#DBDAD9] rounded-md p-2 w-full placeholder:text-[#10101433] placeholder:tracking-[-0.1px]"
                />
              </div>
              <div>
                <p className="font-medium text-[#101014] tracking-[-0.1px]">
                  Email<span className="text-red-600">*</span>
                </p>
                <input
                  required
                  type="text"
                  name="email"
                  placeholder="johnsmith@gmail.com"
                  className="border h-12 bg-[#FAFAFA] border-[#DBDAD9] rounded-md p-2 w-full placeholder:text-[#10101433] placeholder:tracking-[-0.1px]"
                />
              </div>
              <div>
                <p className="font-medium text-[#101014] tracking-[-0.1px]">
                  Phone Number<span className="text-red-600">*</span>
                </p>
                <input
                  required
                  type="text"
                  name="phone"
                  placeholder="+44789 123456"
                  className="border h-12 bg-[#FAFAFA] border-[#DBDAD9] rounded-md p-2 w-full placeholder:text-[#10101433] placeholder:tracking-[-0.1px]"
                />
              </div>
              <div>
                <p className="font-medium text-[#101014] tracking-[-0.1px]">
                  Message<span className="text-red-600">*</span>
                </p>
                <textarea
                  required
                  name="message"
                  placeholder="Hello, I'd like to enquire about..."
                  className="border h-[150px] bg-[#FAFAFA] border-[#DBDAD9] rounded-md p-2 w-full placeholder:text-[#10101433] placeholder:tracking-[-0.1px]"
                />
              </div>
              <ButtonBase label="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
