import Header from "@/component/header";
import About from "@/component/view/home/component/about";
import Hero from "@/component/view/home/component/hero";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
    </Fragment>
  );
}
