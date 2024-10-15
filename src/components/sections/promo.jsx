import Image from "next/image";
import Link from "next/link";
import PromoImage from "/public/promo/promoImage.jpg";

export default function Promos() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute hidden h-full w-1/2 blueBg md:block"
        />
        <div className="relative blueBg md:bg-transparent">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:grid md:grid-cols-2 md:px-8">
            <div className="mx-auto max-w-2xl py-24 md:max-w-none md:py-64">
              <div className="md:pr-16">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl mohaveHeader">
                  Well, want a charger?
                </h1>
                <p className="mt-4 text-xl ralewayRegular">
                  You probably don't need a charger, but if you do, I'll send you
                  one.
                </p>
                <div className="mt-6">
                  <Link
                    href="/shop"
                    className="inline-block rounded-md border border-transparent darkBg px-8 py-3 font-medium text-white hover:bg-stone-900 ralewayBold"
                  >
                    get a charger now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-72 w-full md:absolute md:right-0 md:top-0 md:h-full md:w-1/2">
          <Image
            alt="Ethan Breitkreutz, developer of literally one charger, holding a life size charger."
            src={PromoImage}
            loading="lazy"
            width={4032}
            height={3024}
            className="h-full w-full object-cover"
            srcSet="
            /public/promo/promoImage-320w.jpg 320w,
            /public/promo/promoImage-480w.jpg 480w,
            /public/promo/promoImage-800w.jpg 800w,
            /public/promo/promoImage-1200w.jpg 1200w,
            /public/promo/promoImage-1600w.jpg 1600w,
            /public/promo/promoImage-2400w.jpg 2400w,
            /public/promo/promoImage-3200w.jpg 3200w
          "
            sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, (max-width: 600px) 480px, (max-width: 1200px) 800px, 1600px"
          />
        </div>
      </div>
    </div>
  );
}
