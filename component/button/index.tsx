"use client";

import { Fragment, ReactElement } from "react";

interface Props {
  label: string;
  addIcon?: boolean;
  icon: ReactElement;
}

export default function Button({ label, addIcon, icon }: Props) {
  return (
    <Fragment>
      <button className="py-2.5 px-4 rounded-full bg-[#FFFFFF1A] text-white flex items-center cursor-pointer w-fit">
        {label}
        {addIcon && (
          <div className="bg-white rounded-full flex items-center justify-center w-10 h-10 ml-5">
            {icon}
          </div>
        )}
      </button>
    </Fragment>
  );
}
