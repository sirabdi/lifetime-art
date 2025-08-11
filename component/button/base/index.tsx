"use client";

import { Fragment } from "react";

interface Props {
  label: string;
}

export default function ButtonBase({ label }: Props) {
  return (
    <Fragment>
      <button
        className={`py-2.5 px-4 w-full text-white rounded-md bg-[#101014BF] cursor-pointer text-center font-medium`}
      >
        {label}
      </button>
    </Fragment>
  );
}
