"use client";

import Label from "@/component/label";
import TestimoniSlider from "@/component/testimoniSlider";
import { Fragment } from "react";

export default function Testimonial() {
  const testimoniList = [
    "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
    "Refit exceeded my expectations. The team was professional, efficient, and the results are stunning. Highly recommended!",
    "From start to finish, the process was seamless. The craftsmanship and attention to detail were top-notch.",
    "I love my new kitchen! The design is beautiful and the team was a pleasure to work with.",
    "The renovation was completed on time and within budget. I couldn't ask for more.",
    "Excellent communication and outstanding results. My home feels brand new!",
    "The team was courteous, tidy, and delivered exactly what I wanted. Thank you, Refit!",
    "Every detail was handled with care. I'm thrilled with the transformation.",
    "Refit made the whole process easy and stress-free. The quality of work is fantastic.",
    "I would recommend Refit to anyone looking for quality renovations. Truly a five-star experience!",
  ];

  return (
    <Fragment>
      <div className="flex flex-col gap-2">
        <div className="container mx-auto py-[7.5rem]">
          <div className="flex flex-col justify-center items-center gap-2">
            <Label text="Our work" />
            <p className="text-5xl text-[#101014] font-medium tracking-[-0.8px] leading-[55px]">
              Hear from our clients
            </p>
            <p className="text-xl text-center tracking-[-0.3px] leading-[170%] text-[#3D3D47]">
              Hear from our happy clients about their experience working with{" "}
              <br />
              Refit and the quality of our craftsmanship.
            </p>
          </div>
        </div>
        <TestimoniSlider items={testimoniList} />
      </div>
    </Fragment>
  );
}
