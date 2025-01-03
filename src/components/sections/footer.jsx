import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import Link from "next/link";

const navigation = {
  solutions: [
    { name: "Web Development", href: "https://ethanbdev.com" },
    { name: "Website SEO", href: "https://ethanbdev.com" },
  ],
  support: [{ name: "Contact", href: "/contact" }],
  company: [
    { name: "Ethan Breitkreutz", href: "https://ethanbdev.com" },
    { name: "Stoic Quotes", href: "https://www.StoicQuotes.ca" },
  ],
  legal: [
    { name: "Privacy policy", href: "/policies" },
    { name: "Terms and Conditions", href: "/policies" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/ethan_breitkreutz/",
      icon: <FaInstagram aria-hidden="true" className="h-6 w-6" />,
    },

    {
      name: "GitHub",
      href: "https://github.com/eteen12",
      icon: <FaGithub aria-hidden="true" className="h-6 w-6" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ethan-breitkreutz-43399b322/",
      icon: <FaLinkedin aria-hidden="true" className="h-6 w-6" />,
    },
  ],
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="darkBg">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <h2
              className="tracking-tighter mohave text-4xl md:text-5xl text-white"
              style={{ "--font-weight": "900" }}
            >
              ONE
            </h2>
            <p className="text-sm leading-6 text-gray-300 md:text-base max-w-[450px] ralewayBold">
              Checkout my other projects on GitHub. If they arent privated... If
              your interested in my work, checkout{" "}
              <a
                href="https://TeletaDevelopment.com"
                target="_blank"
                className="blueText hover:underline"
              >
                TeletaDevelopment.com
              </a>
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-white hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white md:text-base ralewayBold">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white md:text-base ralewayRegular"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white md:text-base ralewayBold ">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white md:text-base ralewayRegular"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white md:text-base ralewayBold">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white md:text-base ralewayRegular"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white md:text-base ralewayBold">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4 ">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white md:text-base ralewayRegular"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-400 md:text-base text-center">
            &copy; 2024{" "}
            <a
              href="https://TeletaDevelopment.com"
              target="_blank"
              className="blueText hover:underline"
            >
              Teleta Development
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
