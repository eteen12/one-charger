"use client";
import "/src/app/globals.css";

import Image from "next/image";
import ProductImage from "/public/productView/productImage.png";

import { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

const product = {
  name: "Literally one Charger",
  href: "#",
  price: "$7",
  description:
    "Want a single charger that can charge any device? This is the one for you. It's small, light, and can charge anything. That is type C of course. IF you need a lighting cable, well, maybe ill make a website soon.",
  imageSrc: ProductImage,
  imageAlt:
    "Literally one charger on a white background with a USB-C connector.",
  breadcrumbs: [
    { id: 1, name: "Shop", href: "/shop" },
    { id: 2, name: "Charger", href: "/charger" },
  ],
  amounts: [
    {
      name: "A Charger",
      description: "Literally one charger.",
    },
    { name: "2 Chargers", description: "Is there really anything to say?" },
  ],
};


export default function ProductView() {
  const [selectedAmount, setSelectedAmount] = useState(product.amounts[0]);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
            <Image
              alt={product.imageAlt}
              src={product.imageSrc}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              <div className="sm:flex sm:justify-between">
                {/* Amount selector */}
                <fieldset>
                  <legend className="block text-sm ralewayBold">Amount</legend>
                  <RadioGroup
                    value={selectedAmount}
                    onChange={setSelectedAmount}
                    className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >
                    {product.amounts.map((amount) => (
                      <Radio
                        key={amount.name}
                        as="div"
                        value={amount}
                        aria-label={amount.name}
                        aria-describedby={amount.description}
                        className="group relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-teal-300"
                      >
                        <p className="text-base ralewayBold">{amount.name}</p>
                        <p className="mt-1 text-sm ralewayRegular">
                          {amount.description}
                        </p>
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-teal-300"
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                >
                  <span>Will I actually get a charger?</span>
                  <QuestionMarkCircleIcon
                    aria-hidden="true"
                    className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </a>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent blueBg px-8 py-3 text-base font-medium text-white"
                >
                  Add to cart
                </button>
              </div>
              <div className="mt-6 text-center">
                <a href="#" className="group inline-flex text-base font-medium">
                  <ShieldCheckIcon
                    aria-hidden="true"
                    className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                  <span className="text-gray-500 hover:text-gray-700">
                    Developer Guarentee
                  </span>
                </a>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
