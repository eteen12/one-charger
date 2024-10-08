import React from "react";
import EmailButton from "./reusables/emailButton";

export default function ComingSoon() {
  return (
    <div className="bg-gray-200 font-sans leading-normal tracking-normal">
      <section className="bg-white ">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-black">
              Literally One Charger
            </h1>
            <p className="text-gray-600 mb-12 ">
              Enter your email for an update when we launch. One charger will
              change your life forever.
            </p>

            <EmailButton borderRadius="email-border" />
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">
              Kelownas newest phone charging solution
            </h2>
            <p className="text-gray-600 mb-12">
              <strong>*This is all SEO garbage*</strong>
            </p>
            <p className="text-gray-600 mb-12">
              Get ready for the ultimate charging experience! In the heart of
              Kelowna, where the Okanagan Valley sunshine meets innovation, we
              are bringing you the only charger you&apos;ll ever need. Forget
              about juggling multiple chargers for your devices—this is the{" "}
              <strong>one charger</strong> to rule them all!
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 mt-12">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-3xl bg-white shadow-md p-8">
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  Literally
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-500">
                  Feature 1
                </h3>
                <p className="text-gray-600 mb-4">
                  No more messy cords! Our charger is so neat and tidy that even
                  the squirrels in Kelowna’s parks will be jealous.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="rounded-3xl bg-white shadow-md p-8">
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  One
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-500">
                  Feature 2
                </h3>
                <p className="text-gray-600 mb-4">
                  Made with love right here in Kelowna! Our charger will give
                  your devices the warm embrace they deserve—just like a sunny
                  day at the beach!
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8 ">
              <div className="rounded-3xl bg-white shadow-md p-8 ">
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  Charger
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-500">
                  Feature 3
                </h3>
                <p className="text-gray-600 mb-4">
                  This charger is so versatile, it can even charge your dreams!
                  Okay, maybe not, but it’s perfect for all your devices—
                  laptops, phones, and even your Kelowna vibes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
