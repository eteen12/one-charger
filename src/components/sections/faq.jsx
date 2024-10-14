import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { LuPlus, LuMinus } from "react-icons/lu";

const faqs = [
  {
    question: "Is God real?",
    answer: "Thats something your going to have to figure out yourself.",
  },
  {
    question: "Will I actually get a charger?",
    answer: "Yep. Although the site is a joke, the charger is real.",
  },
  {
    question: "Gimme all the shipping info, please?",
    answer:
      "I ship from Kelowna, the Okanagan Valley via Canada Post lettermail. No tracking provided, because I'm not paying 18 dollars to ship a 7 dollar charger.",
  },
  {
    question: "Why did you make this site?",
    answer:
      "Well, I need to improve my front end skills. And my backend ones. And my photoshop ones. Everything really.",
  },
  {
    question: "Hey, dont you own Teleta Development?",
    answer:
      "Yep, I do. I web develop, and will be starting up the business in the next few months. I'm just getting better first.",
  },
  // More questions...
];

export default function Faq() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight mohaveHeader">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="pt-6 ralewayRegular"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <LuPlus
                        aria-hidden="true"
                        className="h-6 w-6 group-data-[open]:hidden "
                      />
                      <LuMinus
                        aria-hidden="true"
                        className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
