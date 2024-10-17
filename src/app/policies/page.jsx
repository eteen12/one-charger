import Link from "next/link";
export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-4">
        Policies for Literally One Charger
      </h1>
      <p className="mb-4">Last updated: 2024-10-16</p>

      {/* Terms and Conditions */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Terms and Conditions</h2>
      <p className="mb-4">
        Welcome to Literally One Charger! By accessing and using my website, you
        agree to comply with and be bound by the following terms and conditions.
        If you do not agree with these terms, please do not use the website.
      </p>

      <h3 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h3>
      <p className="mb-4">
        By using this website, I confirm that I have read, understood, and agree
        to these Terms and Conditions. I reserve the right to change these terms
        at any time, and your continued use of the site will signify your
        acceptance of any changes.
      </p>

      <h3 className="text-xl font-semibold mb-2">2. Use of the Website</h3>
      <p className="mb-4">
        You agree to use the website for lawful purposes and in a manner that
        does not infringe the rights of, restrict, or inhibit anyone else's use
        and enjoyment of the website.
      </p>

      <h3 className="text-xl font-semibold mb-2">3. Intellectual Property</h3>
      <p className="mb-4">
        I dont care if you use my images, but you are not allowed to use my
        content, word for word. You can use it as a reference, but you must
        change it up a bit.
      </p>

      <h3 className="text-xl font-semibold mb-2">4. Product Information</h3>
      <p className="mb-4">
        I strive to ensure that all product information on this site is accurate
        and up-to-date. However, I cannot guarantee the accuracy of product
        descriptions or other content on the site. Prices and availability are
        subject to change without notice.
      </p>

      <h3 className="text-xl font-semibold mb-2">5. Limitation of Liability</h3>
      <p className="mb-4">
        In no event shall I be liable for any direct, indirect, incidental,
        special, consequential, or punitive damages arising from your access to
        or use of the website or any products purchased from it.
      </p>

      <h3 className="text-xl font-semibold mb-2">6. Governing Law</h3>
      <p className="mb-4">
        These terms shall be governed by and construed in accordance with the
        laws of BC, Canada.
      </p>

      <h3 className="text-xl font-semibold mb-2">7. Contact Information</h3>
      <p className="mb-4">
        For any questions or concerns regarding these terms, please contact me
        here:{" "}
        <Link a href="/contact" className="text-blue-500 underline">
          Contact page
        </Link>{" "}
      </p>

      {/* Privacy Policy */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy Policy</h2>
      <p className="mb-4">
        This Privacy Policy outlines how I collect, use, and protect your
        personal information when you visit my website, literallyonecharger.ca.
      </p>

      <h3 className="text-xl font-semibold mb-2">1. Information Collection</h3>
      <p className="mb-4">
        I may collect personal information from you when you visit my site, fill
        out a form, or interact with my services. The types of personal
        information I may collect include:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">2. Use of Information</h3>
      <p className="mb-4">
        The information I collect may be used in the following ways:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>To personalize user experience</li>
        <li>
          To email you if you signed up for a newsletter, or an update on your
          order
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">3. Data Protection</h3>
      <p className="mb-4">
        I implement a variety of security measures to maintain the safety of
        your personal information. However, please remember that no method of
        transmission over the internet or method of electronic storage is 100%
        secure.
      </p>

      <h3 className="text-xl font-semibold mb-2">4. Sharing of Information</h3>
      <p className="mb-4">
        I do not sell, trade, or otherwise transfer your personal information to
        outside parties unless I provide users with advance notice. This does
        not include website hosting partners and other parties who assist me in
        operating my website, conducting my business, or servicing you, so long
        as those parties agree to keep this information confidential. TL;DR I
        dont sell your info. I dont care enough to do that.
      </p>

      <h3 className="text-xl font-semibold mb-2">5. Third-Party Services</h3>
      <p className="mb-4">
        Occasionally, at my discretion, I may include or offer third-party
        products or services on my website. These third-party sites have
        separate and independent privacy policies. Therefore, I have no
        responsibility or liability for the content and activities of these
        linked sites.
      </p>

      <h3 className="text-xl font-semibold mb-2">6. Cookies</h3>
      <p className="mb-4">
        I may use cookies to enhance the user experience. You can choose to have
        your computer warn you each time a cookie is being sent or turn off all
        cookies through your browser settings. In this site I didnt use any
        cookies, but I might in the future.
      </p>

      <h3 className="text-xl font-semibold mb-2">7. Contact Information</h3>
      <p className="mb-4">
        If you have any questions about this Privacy Policy or your personal
        information, please contact me at{" "}
        <Link a href="/contact" className="text-blue-500 underline">
          Contact page
        </Link>{" "}
      </p>
    </div>
  );
}
