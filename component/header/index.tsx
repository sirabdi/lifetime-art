"use client";

import { Fragment } from "react";

export default function Header() {
  return (
    <Fragment>
      <div className="fixed top-0 w-full z-20">
        <div className="container mx-auto flex items-center justify-between py-8 px-20">
          <div></div>
          <ul className="flex items-center gap-12 text-white">
            <li>About</li>
            <li>Services</li>
            <li>Our Work</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
