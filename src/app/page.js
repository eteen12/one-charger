import React from "react";

import Hero from "./components/sections/hero";
import Cta1 from "./components/reusables/cta1";
import Incentives from "./components/reusables/incentives";
import Testimonials from "./components/reusables/testimonials";
import ProductFeatures from "./components/reusables/productFeatures";

export default function Home() {
  return (
    <div className="z-40">
      <Hero />
      <Cta1 />
      <ProductFeatures />
      <Incentives />
      <Testimonials />
    </div>
  );
}
