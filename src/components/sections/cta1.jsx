import Link from "next/link";

export default function Cta1() {
  return (
    <div className="blueBg">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20 md:py-24 lg:px-8">
        <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl mohaveHeader">
          Change your life forever.
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            href="/shop"
            className="rounded-md darkBg px-5 py-2.5 text-sm font-semibold text-white shadow-sm ralewayBold md:text-base"
          >
            buy now
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 ralewayBold md:text-base"
          >
            contact me <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
