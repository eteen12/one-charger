import Image from "next/image";

import ChargerDisplay from "/public/features/3chargers.png";

import { MdOutlineDevicesOther } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { LuCable } from "react-icons/lu";

const features = [
  {
    name: "Universal compatibility.",
    description:
      "Charge any device you have—if it’s Type-C, it will charge. Even that old tablet you thought was useless will spring back to life!",
    icon: <MdOutlineDevicesOther />,
  },
  {
    name: "Charger length.",
    description:
      "With a remarkable 1M (3.3ft) length, this charger reaches outlets you never thought it could. Perfect for those faraway spots, indeed!",
    icon: <TbRulerMeasure />,
  },
  {
    name: "Durability.",
    description:
      "As a Kelowna local, I know how tough the Okanagan weather can be. This charger is designed to withstand whatever nature throws at it!",
    icon: <LuCable />,
  },
];
export default function ProductFeatures() {
  return (
    <div className="pt-24 sm:pt-32">
      <div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" mx-auto text-center">
            <h2
              className="mt-2 text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl mohave"
              style={{
                "--font-weight": "700",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
              }}
            >
              LIKE NO OTHER.
            </h2>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="App screenshot"
              src={ChargerDisplay}
              width={2432}
              height={1442}
              className="mb-[-15%]"
            />
          </div>
        </div>
      </div>
      <div className="bg-white min-w-[100vw]  max-w-2xl sm:mt-20 lg:mt-24">
      <div aria-hidden="true" className="relative">
          <div className="absolute -inset-x-2 bottom-0 bg-gradient-to-t from-white via-white/70 to-transparent pt-[25%]" />
        </div>
      </div>
    </div>
  );
}
