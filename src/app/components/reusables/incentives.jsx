import { LuMailbox } from "react-icons/lu";
import { MdDevicesOther } from "react-icons/md";
import { TbUserQuestion } from "react-icons/tb";

const incentives = [
  {
    name: "Shipping",
    icon: <LuMailbox className="text-5xl text-black"/>,
    description:
      "Shipping from Kelowna to anywhere in Canada. Shipping via Canada Post lettermail. Although this site is a joke, I will ship a brand new charger to you.",
  },
  {
    name: "Compatibility",
    icon: <MdDevicesOther className="text-5xl text-black"/>,
    description:
      "Im proud to announce that this charger is compatible with type C devices only. Pretty lame, sorry.",
  },
  {
    name: "Is it actually any good?",
    icon: <TbUserQuestion className="text-5xl text-black"/>,
    description:
      "In all honesty, its pretty good. It charges your phone. It's a charger. It's a good charger. I use it to charge my phone.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                This charger WILL charge your phone.
              </h2>
              <p className="mt-4 text-gray-500">
                In the heart of Kelowna, the Okanagan Valley, I've been thinking
                about trying to create a useless product, for a problem that
                doesn't exist. I've been thinking about it for a while, and I
                think I've finally done it. I've created a charger that will
                charge your phone.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/ecommerce-images/incentives-07-hero.jpg"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
    {incentives.map((incentive) => (
      <div key={incentive.name} className="flex flex-col">
        <dt className="text-base font-semibold leading-7 text-gray-900">
          <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
            {incentive.icon}
          </div>
          {incentive.name}
        </dt>
        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
          <p className="flex-auto">{incentive.description}</p>
          <p className="mt-6">
            <a href={incentive.href} className="text-sm font-semibold leading-6 text-indigo-600">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </p>
        </dd>
      </div>
    ))}
  </dl>
</div>
        </div>
      </div>
    </div>
  );
}
