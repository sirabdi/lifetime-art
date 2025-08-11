"use client";

import { Fragment, ReactElement } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  darkMode?: boolean;
  icon: ReactElement;
  className?: string;
}

export default function ButtonPrimary({
  label,
  icon,
  darkMode = true,
  className,
  ...rest
}: Props) {
  return (
    <Fragment>
      <button
        {...rest}
        className={`py-2.5 px-4 rounded-full cursor-pointer ${
          darkMode
            ? "bg-[#FFFFFF1A] text-white backdrop-blur"
            : "bg-[#E7E7E8] text-[#101014] backdrop-blur"
        } flex items-center w-fit group ${className}`}
      >
        {label}
        <div
          className={`${
            darkMode ? "bg-white" : "bg-[#101014]"
          } rounded-full flex items-center justify-center w-10 h-10 ml-5 transition-transform duration-400 group-hover:rotate-45`}
        >
          {icon}
        </div>
      </button>
    </Fragment>
  );
}
