"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import MobileMenuIcon from "../icon/mobileMenuIcon";
import ClosedIcon from "../icon/closedIcon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMenuMobileOpen(false);
      } else {
        setIsMenuMobileOpen(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    // Set initial state on mount
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      {/* Web */}
      <div
        className={`fixed top-0 w-full transition-colors duration-300 hidden lg:block z-50 ${
          scrolled ? " bg-[#00000099]" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-10 px-20 p-5 lg:py-10 lg:px-[1.875rem] min-[1440px]:!px-20">
          <div data-aos="fade-down" data-aos-duration="300">
            <Image
              src={"/life-time-art-logo.png"}
              alt={`LifetimeArt Logo`}
              loading="eager"
              width={154.8}
              height={32}
              priority
            />
          </div>
          <ul className={`flex items-center gap-12 text-white`}>
            <li
              className="cursor-pointer"
              data-aos="fade-down"
              data-aos-duration="300"
              data-aos-delay="0"
            >
              About
            </li>
            <li
              className="cursor-pointer"
              data-aos="fade-down"
              data-aos-duration="300"
              data-aos-delay="100"
            >
              Services
            </li>
            <li
              className="cursor-pointer"
              data-aos="fade-down"
              data-aos-duration="300"
              data-aos-delay="200"
            >
              Our Work
            </li>
            <li
              className="cursor-pointer"
              data-aos="fade-down"
              data-aos-duration="300"
              data-aos-delay="300"
            >
              FAQs
            </li>
            <li
              className="cursor-pointer"
              data-aos="fade-down"
              data-aos-duration="300"
              data-aos-delay="400"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <div className="fixed block lg:hidden p-5 w-full z-50">
        <div className="bg-[#00000099] relative z-50 px-5 py-[15px] w-full rounded-[10px]">
          <div className="flex items-center justify-between">
            <Image
              src={"/life-time-art-logo.png"}
              alt={`LifetimeArt Logo`}
              loading="eager"
              width={154.8}
              height={32}
              priority
            />
            <button
              className="cursor-pointer flex items-center relative w-10 h-5"
              onClick={() => setIsMenuMobileOpen((v) => !v)}
            >
              <span
                className="block lg:hidden absolute inset-0 transition-all duration-300 ease-in-out"
                style={{
                  opacity: isMenuMobileOpen ? 0 : 1,
                  transform: isMenuMobileOpen
                    ? "scale(0.8) rotate(-90deg)"
                    : "scale(1) rotate(0deg)",
                }}
              >
                <MobileMenuIcon />
              </span>
              <span
                className="block lg:hidden absolute inset-0 transition-all duration-300 ease-in-out -top-1"
                style={{
                  opacity: isMenuMobileOpen ? 1 : 0,
                  transform: isMenuMobileOpen
                    ? "scale(1) rotate(0deg)"
                    : "scale(0.8) rotate(90deg)",
                }}
              >
                <ClosedIcon />
              </span>
            </button>
          </div>
        </div>
        <div
          className={`bg-[#00000099] backdrop-blur h-screen p-5 absolute z-40 inset-0 transition-all duration-300 ease-in-out`}
          style={{
            opacity: isMenuMobileOpen ? 1 : 0,
            pointerEvents: isMenuMobileOpen ? "auto" : "none",
            transform: isMenuMobileOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <ul
            className={`flex flex-col items-start gap-8 text-white mt-32 px-5`}
          >
            <li className="text-2xl text-white tracking-[-1px] leading-[120%]">
              About
            </li>
            <li className="text-2xl text-white tracking-[-1px] leading-[120%]">
              Services
            </li>
            <li className="text-2xl text-white tracking-[-1px] leading-[120%]">
              Our Work
            </li>
            <li className="text-2xl text-white tracking-[-1px] leading-[120%]">
              FAQs
            </li>
            <li className="text-2xl text-white tracking-[-1px] leading-[120%]">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
