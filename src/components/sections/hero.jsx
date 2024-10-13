import Image from "next/image";

import HeroMobile from "/public/hero/heroMobile.png";
import HeroDeskTop from "/public/hero/heroDesktop.png";

export default function Hero() {
  return (
    <div className="relative min-w-full min-h-screen flex items-center justify-center lightGrayBg">
      <div className="relative w-[100vw] h-[100vh] max-w-[500px] max-h-[500px] md:hidden">
        <Image
          src={HeroMobile}
          className="object-cover"
          alt="Background Image"
          priority
          role="img"
          fill
        />
      </div>
      <div className="relative w-[100vw] h-[100vh] max-w-[800px] max-h-[800px] hidden md:block">
        <Image
          src={HeroDeskTop}
          className="object-cover"
          alt="Background Image"
          priority
          role="img"
          fill
        />
      </div>
    </div>
  );
}