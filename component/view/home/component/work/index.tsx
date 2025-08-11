"use client";

import Label from "@/component/label";
import WorkCard from "@/component/workCard";
import { Fragment } from "react";

export default function Work() {
  const testimonialList = [
    {
      imgCover: "/testimonial/testimonial-bg-1.png",
      title: "Modern kitchen refit",
      desc: "This kitchen transformation brought sleek, modern design and enhanced  functionality to our client’s home. We installed custom cabinetry, high-quality worktops, and state-of-the-art appliances, creating a stylish yet practical space perfect for cooking and entertaining. With attention to every detail, we delivered a kitchen that balances aesthetics and usability.",
      testiWord:
        "LifetimeArt completely transformed our kitchen, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
      duration: "4 weeks",
      type: "Kitchen",
      personImag: "/testimonial/testimonial-1.png",
      personName: "Rachel Morgan",
    },
    {
      imgCover: "/testimonial/testimonial-bg-2.png",
      title: "Modern kitchen refit",
      desc: "Our team designed and built a durable, visually appealing garden path to enhance the outdoor space. Using premium materials, we created a seamless walkway that blends naturally with the landscape, providing both functionality and aesthetic charm. The result is a stylish, well-crafted path that elevates the overall garden design.",
      testiWord:
        "The team at LifetimeArt did an amazing job on our garden path. It’s sturdy, looks fantastic, and has completely transformed our outdoor space. They listened to our vision and delivered exactly what we wanted—highly recommended!",
      duration: "4 weeks",
      type: "Garden",
      personImag: "/testimonial/testimonial-2.png",
      personName: "Michael Turner",
    },
    {
      imgCover: "/testimonial/testimonial-bg-3.png",
      title: "Bathroom renovation",
      desc: "We revitalized this bathroom with a fresh, modern design, incorporating high-end tiling, sleek fixtures, and efficient lighting. The layout was optimized to maximize space, creating a luxurious and relaxing atmosphere. The final result is a beautifully crafted bathroom that enhances both comfort and functionality.",
      testiWord:
        "LifetimeArt completely transformed our bathroom, making it both beautiful and highly functional. The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
      duration: "4 weeks",
      type: "Bathroom",
      personImag: "/testimonial/testimonial-3.png",
      personName: "Laura Davies",
    },
  ];

  return (
    <Fragment>
      <div className="flex flex-col gap-2">
        <div className="container mx-auto py-[7.5rem] px-5 sm:px-20">
          <div className="flex flex-col justify-center items-center gap-2">
            <Label text="Our work" />
            <p className="text-center text-5xl text-[#101014] font-medium tracking-[-0.8px] leading-[55px]">
              Get inspired by our work
            </p>
            <p className="text-xl text-center tracking-[-0.3px] leading-[170%] text-[#3D3D47]">
              See how we&#39;ve transformed homes with our expert <br />
              craftsmanship and attention to detail.
            </p>
          </div>
        </div>
        {/* <div className="container mx-auto px-20">
          {testimonialList.map((testimonial, index) => (
            <div className="h-screen flex items-center" key={index}>
              <WorkCard {...testimonial} />
            </div>
          ))}
        </div> */}
      </div>
    </Fragment>
  );
}
