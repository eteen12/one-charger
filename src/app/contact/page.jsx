import { FaEnvelope } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>
            <h2 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl mohaveHeader">
              So... Wanna talk?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 ralewayRegular">
              Feel free to contact me with any questions or feedback you might
              have. Let me know what you think of the site!
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 ">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <FaEnvelope aria-hidden="true" className="h-7 w-6 " />
                </dt>
                <dd>
                  <a
                    href="ethan@literallyonecharger.ca"
                    className="hover:text-gray-900 ralewayRegular"
                  >
                    ethan@literallyonecharger.ca
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action={process.env.REACT_APP_FORMSPREE_URL}
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg ralewayBold">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    placeholder="John"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-stone-800 placeholder:text-gray-400 focus:outline-none focus:ring-teal-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    placeholder="Doe"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-stone-800 placeholder:text-gray-400 focus:outline-none focus:ring-teal-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="hotdog53@gmail.com....."
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-stone-800 placeholder:text-gray-400 focus:outline-none focus:ring-teal-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    placeholder="911......"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-stone-800 placeholder:text-gray-400 focus:outline-none focus:ring-teal-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-2 ring-inset ring-stone-800 placeholder:text-gray-400 focus:outline-none focus:ring-teal-300 sm:text-sm sm:leading-6"
                    placeholder="Hey ethan, your website is terrible!........lorem ipsum dolor sit amet and whatnot......"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md blueBg px-3.5 py-2.5 text-center text-sm md:text-base ralewayBold tracking-tighter"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
