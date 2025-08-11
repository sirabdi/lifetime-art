"use client";

import { Fragment, ReactElement } from "react";

interface Props {
  label: string;
  darkMode?: boolean;
  icon: ReactElement;
}

export default function ButtonPrimary({ label, icon, darkMode = true }: Props) {
  return (
    <Fragment>
      <button
        className={`py-2.5 px-4 rounded-full ${
          darkMode ? "bg-[#FFFFFF1A] text-white" : "bg-[#E7E7E8] text-[#101014]"
        }  flex items-center cursor-pointer w-fit`}
      >
        {label}
        <div
          className={`${
            darkMode ? "bg-white" : "bg-[#101014]"
          } rounded-full flex items-center justify-center w-10 h-10 ml-5`}
        >
          {icon}
        </div>
      </button>
    </Fragment>
  );
}
