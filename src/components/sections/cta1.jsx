import Link from "next/link";

export default function Cta1() {
  return (
    <div className="blueBg">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20 md:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mohaveHeader">
          change your life forever.
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            href="/shop"
            className="rounded-md darkBg px-5 py-2.5 text-sm font-semibold text-white shadow-sm raleway md:text-base"
            style={{ "--font-weight": "500" }}
          >
            buy now
          </Link>
          <a
            href="/contact"
            className="text-sm font-semibold leading-6 raleway md:text-base"
            style={{ "--font-weight": "500" }}
          >
            contact me <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
