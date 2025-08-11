"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <div
        className={`fixed top-0 w-full z-20 transition-colors duration-300${
          scrolled ? " bg-white border border-[#d0d1db]" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-8 px-20">
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
          <ul
            className={`flex items-center gap-12${
              scrolled ? " text-[#101014]" : " text-white"
            }`}
          >
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
