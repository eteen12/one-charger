import { Mohave, Raleway } from "next/font/google";
import "./globals.css";
import NavBarClient from "../components/client/navBarClient";
import Footer from "../components/sections/footer.jsx";
import { CartProvider } from "@/context/cart";

const mohave = Mohave({
  subsets: ["latin"],
  variable: "--font-mohave",
  weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Literally One Charger | Teleta Development",
  description:
    "Specializing in a phone charger for Kelowna, Canada, and British Columbia. Offering a affordable, high-quality, single cable.",
  keywords:
    "phone chargers, Kelowna, custom chargers, mobile accessories, affordable, quality, tech solutions",
  author: "Teleta Development",
  charset: "UTF-8",
  og: {
    title: "Literally One Charger",
    description:
      "Literally One Charger is a place to buy a phone charger in kelowna and canada. Offering a affordable, high-quality, single cable.",
    url: "https://www.LiterallyOneCharger.ca",
    image: "https://www.LiterallyOneCharger.ca/hero/heroMobile.png", // Update the image URL if necessary
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Literally One Charger",
    description:
      "Literally One Charger is a place to buy a phone charger in kelowna and canada. Offering a affordable, high-quality, single cable.",
    image: "https://www.LiterallyOneCharger.ca/hero/heroMobile.png",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Literally One Charger",
    url: "https://www.LiterallyOneCharger.ca",
    description:
      "Literally One Charger is a place to buy a phone charger in kelowna and canada. Offering a affordable, high-quality, single cable.",
    image: "https://www.LiterallyOneCharger.ca/hero/heroMobile.png", // Update the image URL if necessary
    sameAs: [
      "https://www.facebook.com/TeletaDevelopment",
      "https://www.instagram.com/Teleta_Development/",
      "https://www.linkedin.com/in/ethan-breitkreutz",
      "https://www.youtube.com/@TeletaDevelopment",
      "https://github.com/eteen12",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://www.LiterallyOneCharger.ca/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        {/* Add Open Graph and Twitter meta tags */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
        {/* Add Schema.org markup for Google+ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.schema) }}
        />
      </head>
      <body className={`${mohave.variable} ${raleway.variable} antialiased`}>
        <CartProvider>
          <NavBarClient className="z-50" />
          <div className="md:pt-16">{children}</div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
