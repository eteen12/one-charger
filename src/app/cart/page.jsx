"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/cart";
import Image from "next/image";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import product from "@/components/server/product";
import PayPalButton from "@/components/reusables/payPalButton";

export default function Page() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const itemTotal = cartItems
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tighter mohaveHeader sm:text-4xl md:text-5xl">
          Shopping cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {cartItems.map((item, idx) => (
                <li key={idx} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <Image
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3
                            href={item.href}
                            className=" ralewayBold md:text-lg"
                          >
                            A charger
                          </h3>
                        </div>
                        <div className="mt-1 text-sm md:text-base">
                          <p className="ralewayRegular">{item.description}</p>
                        </div>
                        <p className="mt-1 text-sm ralewayRegular md:text-base">
                          ${item.price * item.quantity}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label htmlFor={`quantity-${idx}`} className="sr-only">
                          Quantity, {item.name}
                        </label>
                        <select
                          id={`quantity-${idx}`}
                          name={`quantity-${idx}`}
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base md:text-lg ralewayRegular focus:outline-none focus:ring-1 focus:ring-teal-300 sm:text-sm"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                        >
                          {[...Array(10).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                              {num + 1}
                            </option>
                          ))}
                        </select>

                        <div className="absolute right-0 top-0">
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="-m-2 inline-flex p-2 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <XMarkIcon
                              aria-hidden="true"
                              className="h-5 w-5 md:h-8 md:w-8"
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm ralewayBold md:text-base">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-shrink-0 text-green-500"
                      />
                      <span>In stock</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg ralewayBold">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600 ralewayRegular md:text-base">
                  Subtotal
                </dt>
                <dd className="text-sm ralewayRegular md:text-base">
                  ${itemTotal}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm ralewayRegular md:text-base">
                  <span>Shipping estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how shipping is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      aria-hidden="true"
                      className="h-5 w-5"
                    />
                  </a>
                </dt>
                <dd className="text-sm ralewayRegular md:text-base">FREE</dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="ralewayBold text-base md:text-lg">
                  Order total
                </dt>
                <dd className="text-base ralewayBold md:text-lg">
                  ${itemTotal}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <p className="text-xs">
                *Add the amount you want before clicking to pay. Or refresh
                browser and try again*
              </p>
              <PayPalButton itemTotal={itemTotal} />
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
