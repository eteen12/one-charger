import Image from "next/image";
import HeroImage from "/public/hero/heroMobile.png";

export default function Hero() {
  return (
    <div className="relative min-w-full min-h-screen flex items-center justify-center lightGrayBg">
      <div className="relative w-[100vw] h-[100vh] max-w-[500px] max-h-[500px]">
        <Image
          src={HeroImage}
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
