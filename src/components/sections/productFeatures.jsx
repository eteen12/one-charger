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
    <div className="py-24 sm:py-32">
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
            className="mb-[-11%]"
          />
        </div>
      </div>
      <div className="bg-white min-w-[100vw] mt-16 max-w-2xl sm:mt-20 lg:mt-24">
      <div aria-hidden="true" className="relative">
  <div className="absolute -inset-x-2 bottom-0 bg-gradient-to-t from-white via-white/70 to-transparent pt-[25%]" />
</div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="text-base font-semibold leading-7 blueText raleway md:text-lg" style={{
                "--font-weight": "500",
              }}>
              features
            </h2>
            <p
              className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl mohave md:text-5xl"
              style={{
                "--font-weight": "800",
              }}
            >
              ABOUT KELOWAS BEST CHARGER
            </p>
            <p className="mt-6 text-lg leading-8 raleway md:text-xl">
              Dont care? I mean you should, but if you dont, here are some
              features of our charger.
            </p>
          </div>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-3 p-5 mx-auto md:px-12 lg:px-40 ">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col relative md:py-16 ">
              <dt className="flex items-center gap-x-3 text-base leading-7 raleway md:text-lg "style={{
                "--font-weight": "500",
              }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg darkBg text-white text-xl">
                  {feature.icon}
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 md:text-lg">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
