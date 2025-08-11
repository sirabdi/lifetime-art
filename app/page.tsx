import About from "@/component/view/home/component/about";
import Contact from "@/component/view/home/component/contact";
import Faq from "@/component/view/home/component/faq";
import Hero from "@/component/view/home/component/hero";
import Services from "@/component/view/home/component/services";
import Testimonial from "@/component/view/home/component/testimonial";
import Work from "@/component/view/home/component/work";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonial />
      <Faq />
      <Contact />
    </Fragment>
  );
}
