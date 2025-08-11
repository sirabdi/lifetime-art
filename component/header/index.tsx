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
      <div
        className={`fixed top-0 w-full z-20 transition-colors duration-300${
          scrolled ? " bg-white border border-[#d0d1db]" : ""
        }`}
      >
        <div className="container mx-auto flex flex-col gap-12 lg:gap-0 lg:flex-row items-start lg:items-center justify-between p-5 lg:py-10 lg:px-[1.875rem] min-[1440px]:!px-20">
          <div className="flex items-center justify-between w-full">
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
          <ul
            className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 w-full transition-all duration-300 ease-in-out transform ${
              isMenuMobileOpen
                ? "opacity-100 scale-100 max-h-96 pointer-events-auto"
                : "opacity-0 scale-95 max-h-0 pointer-events-none"
            }${scrolled ? " text-[#101014]" : " text-white"}`}
            style={{ overflow: "hidden" }}
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
