import Header from "@/component/header";
import About from "@/component/view/home/component/about";
import Hero from "@/component/view/home/component/hero";
import Services from "@/component/view/home/component/services";
import Testimonial from "@/component/view/home/component/testimonial";
import Work from "@/component/view/home/component/work";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonial />
    </Fragment>
  );
}
