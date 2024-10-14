import React from "react";

import Hero from "../components/sections/hero";
import Cta1 from "@/components/sections/cta1";
import Faq from "@/components/sections/faq";
import ProductFeatures from "@/components/sections/productFeatures";
import Promos from "@/components/sections/promo";
import Visuals from "@/components/sections/visual";
import ProductView from "@/components/sections/productView";

export default function Home() {
  return (
    <div className="z-40">
      <Hero />
      <Cta1 />
      <ProductFeatures />
      <Promos />
      <Visuals />
      <ProductView />
      <Faq />
    </div>
  );
}
