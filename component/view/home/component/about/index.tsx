"use client";

import Label from "@/component/label";
import { Fragment } from "react";
import ImageSlider from "@/component/ImageSlider";

export default function About() {
  const image = [
    "/slider/item-slider-1.png",
    "/slider/item-slider-2.png",
    "/slider/item-slider-3.png",
    "/slider/item-slider-4.png",
    "/slider/item-slider-5.png",
    "/slider/item-slider-1.png",
    "/slider/item-slider-2.png",
    "/slider/item-slider-3.png",
    "/slider/item-slider-4.png",
    "/slider/item-slider-5.png",
  ];

  const aboutList = [
    {
      result: 8,
      title: "Years of Experience",
      description: "Improving homes with expert craftsmanship for years",
    },
    {
      result: 26,
      title: "Projects completed",
      description:
        "Over 250 successful projects delivered with quality and care",
    },
    {
      result: 30,
      title: "Skilled Tradespeople",
      description: "Our team of 30 experts ensures top-quality results",
    },
    {
      result: 100,
      title: "Client satisfaction",
      description: "All of our clients are satisfied with our work and service",
    },
  ];

  return (
    <Fragment>
      <div className="flex flex-col gap-2">
        <div className="container mx-auto grid grid-cols-2 gap-4 py-[7.5rem] px-20">
          <div className="flex flex-col justify-center h-full">
            <div className="flex flex-col gap-1 mb-18">
              <Label text="About us" />
              <p className="text-5xl text-[#101014] font-medium tracking-[-0.8px] leading-[55px]">
                Home <br /> Improvement <br /> Specialists
              </p>
            </div>
          </div>
          <div>
            <p className="text-[#3D3D47] text-xl tracking-[-0.3px] leading-[170%]">
              Welcome to LifetimeArt , your trusted home improvement experts,
              dedicated to transforming homes with precision and care. With
              years of experience in building kitchens, bathrooms, garages, and
              more, we take pride in delivering top-quality craftsmanship and a
              seamless customer experience. Our mission is to bring your vision
              to life while ensuring clear communication and expert guidance at
              every step. Let’s create a home you’ll love!
            </p>
          </div>
        </div>
        <ImageSlider items={image} />
        <div className="container mx-auto grid grid-cols-4 grid-flow-col gap-4 py-[7.5rem] px-20">
          {aboutList.map((item, index) => {
            return (
              <div key={index} className="w-[14.375rem]">
                <p className="font-light text-7xl text-[#101014]">
                  {item.result}
                </p>
                <p className="font-semibold tracking-[-0.2px] leading-[30px] text-xl text-[#101014] mb-2">
                  {item.title}
                </p>
                <p className="tracking-[-0.1px] leading-[150%] text-[#3D3D47]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
