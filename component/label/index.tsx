"use client";

import { Fragment } from "react";

import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

export default function Label({ text, ...rest }: Props) {
  return (
    <Fragment>
      <div
        className="bg-[#28282C] py-2 px-3 rounded-full flex items-center gap-2 w-fit h-[1.875rem]"
        {...rest}
      >
        <p className="text-white font-semibold">{text}</p>
      </div>
    </Fragment>
  );
}
