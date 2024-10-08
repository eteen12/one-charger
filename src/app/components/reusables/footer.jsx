import EmailButton from "./emailButton";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="relative z-10 container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Newsletter Section */}
          <div>
            <h3
              className="text-2xl font-semibold mb-4 league-spartan"
              style={{ "--font-weight": "600" }}
            >
              Subscribe to the newsletter to receive an update on when we
              launch.
            </h3>
            <div className="relative right-1.5 overflow-visible">
              <EmailButton borderRadius="footer-border" />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-8">
              <Link
                href="https://www.facebook.com/TeletaDevelopment"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Teleta Development on Facebook"
                title="Teleta Development - Facebook Page"
              >
                <FaFacebookF size={24} className="hover:text-blue-600" />
              </Link>
              <Link
                href="https://www.instagram.com/teleta_development/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Teleta Development on Instagram"
                title="Teleta Development - Instagram Page"
              >
                <FaInstagram size={24} className="hover:text-pink-500" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/teleta-development"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Teleta Development on Linkedin"
                title="Teleta Development - Linkedin Page"
              >
                <FaLinkedin size={24} className="hover:text-blue-700" />
              </Link>
            </div>
          </div>

          {/* Menu Section */}
          <div className="">
            <h4 className="text-lg font-semibold mb-4 teletaYellow">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-purple-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://teletadevelopment.com"
                  className="hover:text-purple-600"
                >
                  Business website
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/eteen12"
                  className="hover:text-purple-600"
                >
                  My github
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 teletaYellow">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/policies" className="hover:text-purple-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-purple-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-center items-center border-t border-white py-2">
        <p className="text-white">
          &copy; {new Date().getFullYear()}
          <Link
            href="https://www.teletadevelopment.com"
            className="hover:text-purple-600 ml-1"
          >
            Teleta Development
          </Link>
          <Link
            href="https://www.linkedin.com/in/ethan-breitkreutz-43399b322/"
            className="hover:text-purple-600 ml-1"
          >
            {" "}
            - Ethan Breitkreutz
          </Link>
        </p>
      </div>
    </footer>
  );
}
