import Image from "next/image";

import HeroMobile from "/public/hero/heroMobile.png";
import HeroDeskTop from "/public/hero/heroDesktop.png";

export default function Hero() {
  return (
    <div className="relative min-w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative w-[100vw] h-[100vh] max-w-[full] max-h-[full] md:hidden">
        <Image
          src={HeroMobile}
          className="object-contain"
          alt="Hero image of literally one charger, with large text and cable image"
          priority
          role="img"
          fill
          sizes="(max-width: 768px) 100vw, 100vh"
        />
      </div>
      <div className="relative w-[100vw] h-[100vh] max-w-[800px] max-h-[800px] hidden md:block">
        <Image
          src={HeroDeskTop}
          className="object-cover"
          alt="Hero image of literally one charger, with large text and cable image"
          priority
          role="img"
          fill
          sizes="(min-width: 768px) 100vw, 100vh"
        />
      </div>
    </div>
  );
}
