export default function Cta1() {
  return (
    <div className="blueBg">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-32 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          change your life forever.
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#"
            className="rounded-md darkBg px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            buy now
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            contact me <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
