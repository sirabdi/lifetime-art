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
        "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines can vary widely based on the scope and complexity of the work involved. Generally, we recommend allowing at least 4-6 weeks for most projects, but we can provide a more accurate estimate after discussing your specific needs.",
    },
    {
      question: "Do you offer free quotes?",
      answer:
        "Yes, we provide free quotes for all potential projects. Simply get in touch with us to discuss your requirements, and we'll be happy to provide you with a detailed estimate.",
    },
    {
      question: "Will I need planning permission for my project?",
      answer:
        "Yes, in most cases, you will need planning permission for your project. However, some smaller projects may be exempt. It's best to consult with us to determine the specific requirements for your project.",
    },
    {
      question: "Do you provide a guarantee for your work?",
      answer:
        "Yes, we offer a guarantee for our work. If you encounter any issues after the project is completed, please reach out to us, and we'll do our best to resolve them.",
    },
    {
      question: "Can I stay in my home while the work is being done?",
      answer:
        "Yes, in most cases, you can stay in your home while the work is being done. However, there may be some instances where it is not feasible due to safety concerns or the nature of the work. We will discuss this with you beforehand to ensure your comfort and safety.",
    },
    {
      question: "How do I get started with a project?",
      answer:
        "To get started with a project, simply reach out to us through our contact form or give us a call. We'll schedule a consultation to discuss your ideas, requirements, and any questions you may have. From there, we can provide you with a detailed proposal and timeline for your project.",
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
