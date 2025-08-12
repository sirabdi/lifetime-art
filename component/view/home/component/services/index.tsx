"use client";

import AddIcon from "@/component/icon/addIcon";
import BathroomsIcon from "@/component/icon/bathroomsIcon";
import ExtensionIcon from "@/component/icon/extensionIcon";
import ExternalWorkIcon from "@/component/icon/externalWorkIcon";
import KitchenIcon from "@/component/icon/kitchenIconIcon";
import LoftConversionIcon from "@/component/icon/loftConversionIcon";
import RestorationIcon from "@/component/icon/restorationIcon";
import Label from "@/component/label";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function Services() {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const servicesList = [
    {
      title: "Kitchens",
      description:
        "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you prefer sleek modern lines or a timeless, classic look, our team delivers premium craftsmanship, functional layouts, and meticulous attention to detail—creating a kitchen you’ll love to cook and gather in.",
      image: <KitchenIcon />,
    },
    {
      title: "Loft Conversions",
      description:
        "Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home.",
      image: <LoftConversionIcon />,
    },
    {
      title: "Bathrooms",
      description:
        "We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come.",
      image: <BathroomsIcon />,
    },
    {
      title: "Extensions",
      description:
        "Expand your living space without compromising on style. Whether it’s a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value.",
      image: <ExtensionIcon />,
    },
    {
      title: "Restorations",
      description:
        "Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces.",
      image: <RestorationIcon />,
    },
    {
      title: "External Works",
      description:
        "Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature.",
      image: <ExternalWorkIcon />,
    },
  ];

  return (
    <Fragment>
      <div
        className="flex flex-col gap-2 bg-[#FAFAFA] overflow-hidden"
        id="services"
      >
        <div className="container mx-auto py-[7.5rem] px-10 xl:px-20">
          <div className="flex flex-col justify-center items-center gap-2">
            <Label text="Services" data-aos="fade-up" data-aos-duration="300" />
            <p
              className="text-5xl text-center text-[#101014] font-medium tracking-[-0.8px] leading-[55px]"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="300"
            >
              What we do
            </p>
            <p
              className="text-xl text-center tracking-[-0.3px] leading-[170%] text-[#3D3D47]"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="600"
            >
              Find out which one of our services fit the needs of your project
            </p>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-18 pb-[7.5rem] px-10 min-[1440px]:!px-20">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <div
              className="w-[295px] lg:w-[432px] xl:w-[560px] min-[1440px]:!w-[600px] min-[1920px]:!w-[680px] h-[337px] lg:h-[493px] xl:h-[639px] min-[1440px]:!h-[685px] min-[1920px]:!h-[777px] relative z-10 overflow-hidden rounded-xl"
              data-aos="zoom-in"
              data-aos-duration="400"
              data-aos-delay="900"
            >
              <Image
                src={"/kitchen-area.png"}
                alt="LifetimeArt Hero Image"
                style={{ objectFit: "cover" }}
                loading="eager"
                fill
                priority
              />
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-2"
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-delay="1200"
          >
            <div>
              {servicesList.map((item, index) => (
                <div
                  key={index}
                  className="py-5 border-b border-[#DBDAD9] group cursor-pointer"
                  onClick={() =>
                    setSelectedValue(selectedValue === index ? -1 : index)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {item.image}
                      <p className="text-xl tracking-[-0.2px] leading-[120%] text-[#101014] group-hover:text-[#101014]/80 transition-colors">
                        {item.title}
                      </p>
                    </div>
                    <button className="cursor-pointer flex items-center justify-center h-full transition-transform duration-300">
                      <AddIcon
                        className={`transition-transform duration-300 ${
                          selectedValue === index ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      selectedValue === index
                        ? "max-h-40 opacity-100 mt-8"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      className={`text-[#3D3D47] tracking-[-0.1px] leading-[170%] transition-transform duration-500 ${
                        selectedValue === index
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      }`}
                      style={{
                        transitionDelay:
                          selectedValue === index ? "100ms" : "0ms",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
