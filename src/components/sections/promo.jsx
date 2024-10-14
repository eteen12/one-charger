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
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                  Well, want a charger?
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  You proabably dont need a charger, but if you do, I'll send
                  you one.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent darkBg px-8 py-3 font-medium text-white hover:bg-stone-900"
                  >
                    buy a charger now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-72 w-full md:absolute md:right-0 md:top-0 md:h-full md:w-1/2">
          <img
            alt=""
            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-02-hero-half-width.jpg"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
