import About from "@/component/view/home/component/about";
import Contact from "@/component/view/home/component/contact";
import Faq from "@/component/view/home/component/faq";
import Hero from "@/component/view/home/component/hero";
import Services from "@/component/view/home/component/services";
import Testimonial from "@/component/view/home/component/testimonial";
import Work from "@/component/view/home/component/work";
import { Fragment } from "react";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: `LifetimeArt | Expert Home Improvement & Renovation Services in London`,
    description: `LifetimeArt specializes in high-quality home improvement, renovations, and restorations in London. Transform your space with our expert team—kitchens, bathrooms, extensions, loft conversions, and more. Discover craftsmanship you can trust.`,
  };
};

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
