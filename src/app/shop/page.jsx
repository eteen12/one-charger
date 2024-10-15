"use client";
import "/src/app/globals.css";

import Image from "next/image";
import ProductImage from "/public/productView/productImage.png";

import { useState } from "react";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
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
const reviews = { average: 5, totalCount: 1 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  const [selectedAmount, setSelectedAmount] = useState(product.amounts[0]);

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="flex items-center space-x-2 ralewayRegular"
            >
              {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center text-sm">
                    <a
                      href={breadcrumb.href}
                      className="font-medium blueText hover:text-gray-900"
                    >
                      {breadcrumb.name}
                    </a>
                    {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mohaveHeader">
              {product.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg sm:text-xl ralewayRegular">
                {product.price}
              </p>

              <div className="ml-4 border-l border-gray-300 pl-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            reviews.average > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm ralewayRegular">
                    {reviews.totalCount} review (by me)...
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base ralewayRegular">{product.description}</p>
            </div>

            <div className="mt-6 flex items-center ralewayRegular">
              <CheckIcon
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 blueText"
              />
              <p className="ml-2 text-sm">In stock and ready to ship</p>
            </div>
          </section>
        </div>

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
