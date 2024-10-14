import Image from "next/image";
import VisualImage from "/public/visual/visualContentImage.png";

export default function Visuals() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-none text-center">
          <h2 className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl lg:text-9xl mohaveHeader text-shadow">
            LIKE NO OTHER.
          </h2>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            alt="Photo of 3 chargers lined up in a triangle shape"
            src={VisualImage}
            width={2865}
            height={2398}
            className="mb-[-12%] "
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-50 pt-[15%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
