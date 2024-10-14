import React from "react";

import Hero from "../components/sections/hero";
import Cta1 from "@/components/sections/cta1";
import Faq from "@/components/sections/faq";
import ProductFeatures from "@/components/sections/productFeatures";

export default function Home() {
  return (
    <div className="z-40">
      <Hero />
      <Cta1 />
      <ProductFeatures />
      <Faq />
    </div>
  );
}
