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
        "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you're after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.",
      image: <KitchenIcon />,
    },
    {
      title: "Loft Conversions",
      description:
        "Transform your unused loft into a stunning, practical living space. Our experts handle every aspect, maximizing space and adding value to your home.",
      image: <LoftConversionIcon />,
    },
    {
      title: "Bathrooms",
      description:
        "Upgrade your bathroom with our bespoke designs and expert installation. We create relaxing, stylish spaces that combine comfort with elegance.",
      image: <BathroomsIcon />,
    },
    {
      title: "Extensions",
      description:
        "Expand your living space with a custom extension. We manage the entire process, delivering seamless additions that blend perfectly with your home.",
      image: <ExtensionIcon />,
    },
    {
      title: "Restorations",
      description:
        "Restore the charm and integrity of your property. Our restoration services preserve original features while updating your space for modern living.",
      image: <RestorationIcon />,
    },
    {
      title: "External Works",
      description:
        "Enhance your property’s exterior with our landscaping, paving, and outdoor construction services. We create inviting, durable outdoor spaces.",
      image: <ExternalWorkIcon />,
    },
  ];

  return (
    <Fragment>
      <div className="flex flex-col gap-2 bg-[#FAFAFA]">
        <div className="container mx-auto py-[7.5rem] px-10 sm:px-20">
          <div className="flex flex-col justify-center items-center gap-2">
            <Label text="Services" />
            <p className="text-5xl text-center text-[#101014] font-medium tracking-[-0.8px] leading-[55px]">
              What we do
            </p>
            <p className="text-xl text-center tracking-[-0.3px] leading-[170%] text-[#3D3D47]">
              Find out which one of our services fit the needs of your project
            </p>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-24 pb-[7.5rem] px-10 sm:px-20">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[295px] sm:w-[42.5rem] h-[337px] sm:h-[48.563rem] relative z-10 overflow-hidden rounded-xl">
              <Image
                src={"/kitchen-area.png"}
                alt="LifetimeArt Hero Image"
                objectFit="cover"
                loading="eager"
                layout="fill"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div>
              {servicesList.map((item, index) => (
                <div key={index} className="py-5 border-b border-[#DBDAD9]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {item.image}
                      <p className="text-xl tracking-[-0.2px] leading-[120%] text-[#101014]">
                        {item.title}
                      </p>
                    </div>
                    <button
                      className="cursor-pointer flex items-center justify-center h-full transition-transform duration-300"
                      onClick={() =>
                        setSelectedValue(selectedValue === index ? -1 : index)
                      }
                    >
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
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[#3D3D47] tracking-[-0.1px] leading-[170%]">
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
