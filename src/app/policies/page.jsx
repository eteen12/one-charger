import Link from "next/link";

export default function Page() {
  // Obfuscating email
  const email = "eteensmash" + "@" + "gmail.com";

  return (
    <div className="p-8 bg-purple-500 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 mt-10 flex justify-center text-black">
        Policies
      </h1>

      <section className="mb-8 bg-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-black">
          Privacy Policy 4 YOU
        </h2>
        <p className="mb-2 text-black">
          <strong>Effective Date:</strong> 2024-10-07
        </p>
        <p className="mb-4 text-black">
          Your privacy is important; let me explain why and what I collect.
        </p>

        <h3 className="font-semibold mb-1 text-black">
          Information I Collect:
        </h3>
        <p className="mb-2 text-black">
          I collect any information you add when submitting forms or signing up
          for things like my newsletter.
        </p>

        <h3 className="font-semibold mb-1 text-black">
          How I Use Your Information:
        </h3>
        <p className="mb-2 text-black">
          The only reason I use your information is to contact you through
          email, my newsletter, or for questions you submitted through a form.
        </p>

        <h3 className="font-semibold mb-1 text-black">Your Rights:</h3>
        <p className="mb-2 text-black">
          You have the right to access and correct your personal information.
          You can request to have your email removed from my records at any
          time. Just email me at{" "}
          <Link
            href={`mailto:${email}`}
            className="text-blue-500 hover:underline"
          >
            {email}
          </Link>
        </p>

        <h3 className="font-semibold mb-1 text-black">
          Changes to This Policy:
        </h3>
        <p className="mb-2 text-black">
          I may update this Privacy Policy occasionally. I will notify you of
          any significant changes by posting the new policy on my website.
        </p>

        <h3 className="font-semibold mb-1 text-black">Contact Me:</h3>
        <p className="text-black">
          If you have any questions about this Privacy Policy, please contact me
          at{" "}
          <Link
            href={`mailto:${email}`}
            className="text-blue-500 hover:underline"
          >
            {email}
          </Link>
          .
        </p>
      </section>

      <section className="bg-white p-4 rounded shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-black">
          Terms of Service for Me
        </h2>
        <p className="mb-2 text-black">
          <strong>Effective Date:</strong> 2024-10-01
        </p>
        <p className="mb-4 text-black">
          Welcome! These Terms of Service govern your use of my website and
          services.
        </p>

        <h3 className="font-semibold mb-1 text-black">Acceptance of Terms:</h3>
        <p className="mb-2 text-black">
          By using my services, you agree to these Terms. If you do not agree,
          please refrain from using my services.
        </p>

        <h3 className="font-semibold mb-1 text-black">Services Provided:</h3>
        <p className="mb-2 text-black">
          I provide web development services, including website design and
          maintenance.
        </p>

        <h3 className="font-semibold mb-1 text-black">
          User Responsibilities:
        </h3>
        <p className="mb-2 text-black">
          You agree to provide accurate information when signing up for my
          services. You agree not to misuse my services or violate any
          applicable laws.
        </p>

        <h3 className="font-semibold mb-1 text-black">
          Changes to These Terms:
        </h3>
        <p className="mb-2 text-black">
          I will update these Terms of Service as needed. I will notify you of
          any significant changes by posting the new terms on my website.
        </p>

        <h3 className="font-semibold mb-1 text-black">Contact Me:</h3>
        <p className="text-black">
          If you have any questions about these Terms, please contact me at{" "}
          <Link
            href={`mailto:${email}`}
            className="text-blue-500 hover:underline"
          >
            {email}
          </Link>
        </p>
      </section>

      <section className="bg-white p-4 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-black">
          Thanks For Checking Out the Site!
        </h2>
        <p className="text-black">
          blah blah blah blah blah blah ETHAN BREITKREUTZ!!!!!!
        </p>
      </section>
    </div>
  );
}
