"use client";

import { Fragment, useState } from "react";
import Label from "@/component/label";
import ArrowRightTopIcon from "@/component/icon/arrowRightTopIcon";
import ButtonPrimary from "@/component/button/primary";
import AddIcon from "@/component/icon/addIcon";

export default function Faq() {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const faqList = [
    {
      question: "What area are you based in?",
      answer:
        "We primarily serve London and the surrounding areas, but depending on the project, we can travel further. Contact us to discuss your location and requirements.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on size and complexity. We’ll provide an estimated schedule during your consultation and keep you updated throughout the process.",
    },
    {
      question: "Do you offer free quotes?",
      answer:
        "Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown.",
    },
    {
      question: "Will I need planning permission for my project?",
      answer:
        "This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed",
    },
    {
      question: "Do you provide a guarantee for your work?",
      answer:
        "Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind.",
    },
    {
      question: "Can I stay in my home while the work is being done?",
      answer:
        "In most cases, yes—though it may depend on the scope of work and areas affected. We’ll discuss options to minimise disruption.",
    },
    {
      question: "How do I get started with a project?",
      answer:
        "Simply get in touch with our team. We’ll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote.",
    },
  ];

  return (
    <Fragment>
      <div className="flex flex-col gap-2 overflow-hidden" id="faqs">
        <div className="container mx-auto grid grid-cols-1 min-[1440px]:!grid-cols-8 gap-4 py-[7.5rem] px-10 min-[1440px]:!px-20">
          <div className="col-span-1 min-[1440px]:!col-span-3 flex flex-col justify-start h-full mb-12 min-[1440px]:!mb-0">
            <div className="flex flex-col gap-1 items-center min-[1440px]:!items-start mb-12 min-[1440px]:!mb-18">
              <Label text="FAQs" data-aos="fade-up" data-aos-duration="300" />
              <p className="text-center min-[1440px]:!text-left text-5xl text-[#101014] font-medium tracking-[-0.8px] leading-[55px] mb-2">
                <span
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="300"
                >
                  Answering Your
                </span>
                <br />
                <span
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-delay="600"
                >
                  Questions
                </span>
              </p>
              <p
                className="text-xl text-center min-[1440px]:!text-left text-[#3D3D47] leading-[170%] tracking-[-0.3px] w-auto min-[1440px]:!w-[30.125rem]"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-delay="900"
              >
                Got more questions? Send us your enquiry below
              </p>
            </div>
            <ButtonPrimary
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="1200"
              darkMode={false}
              label="Get in touch"
              className="mx-auto min-[1440px]:!mx-0"
              icon={<ArrowRightTopIcon className="text-white" />}
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            />
          </div>
          <div
            className="col-span-1 min-[1440px]:col-span-5 flex flex-col gap-5"
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-delay="1500"
          >
            {faqList.map((item, index) => (
              <div
                key={index}
                className="bg-[#FAFAFA] rounded-xl border border-[#E6E6E6] py-6 px-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xl font-medium text-[#101014] tracking-[-0.2px] leading-[30.8px] w-[70%] xl:w-full">
                    {item.question}
                  </p>
                  {/* <AddIcon /> */}
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
                      ? "max-h-40 opacity-100 mt-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#3D3D47] tracking-[-0.1px] leading-[170%] w-full xl:w-[70%]">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
