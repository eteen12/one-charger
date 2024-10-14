import { MdDevicesOther, MdElectricBolt, MdExpand } from "react-icons/md";

const features = [
  {
    name: "Compatibility.",
    description:
      "This single charger, is compatible with all devices. It is the only charger you will ever need. Ok it only charges type C but still.",
    icon: (
      <MdDevicesOther
        aria-hidden="true"
        className="absolute h-5 w-5 darkText"
      />
    ),
  },
  {
    name: "Charger length.",
    description:
      "Coming in at a whopping 1 meter (or 3.3 feet) this charger is the perfect length for all your charging needs. Well kinda, it only charges type C.",
    icon: (
      <MdExpand
        aria-hidden="true"
        className="absolute h-5 w-5 darkText"
      />
    ),
  },
  {
    name: "Is it actually good?",
    description:
      "In all seriousness, this charger is actually pretty good. I mean I use it. Its a good charger. It charges your phone. Did I mention it only charges type C?",
    icon: (
      <MdElectricBolt
        aria-hidden="true"
        className="absolute h-5 w-5 darkText"
      />
    ),
  },
];

export default function ProductFeatures() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 blueText">
                features
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Kelownas best charger.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I decided to create a solution to a non existant problem. So
                here we are, selling nothing but literally one charger. The idea
                born by Ethan Breitkreutz.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <div className="absolute -left-3 top-0 flex h-10 w-10 items-center justify-center rounded-lg blueBg mx-auto">
                        {feature.icon}
                      </div>
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
