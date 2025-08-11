"use client";

import React, { ReactNode, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return <>{children}</>;
};
