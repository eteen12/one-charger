import localFont from "next/font/local";
import "./globals.css";
import NavBarClient from "./components/client/navBarClient";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Literally One Charger | Ethan Breitkreutz",
  description:
    "Specializing in a phone chargers and accessories for Kelowna. Offering a affordable, high-quality, single cable.",
  keywords:
    "phone chargers, Kelowna, custom chargers, mobile accessories, affordable, quality, tech solutions",
  author: "Ethan Breitkreutz",
  charset: "UTF-8",
  og: {
    title: "Literally One Charger",
    description:
      "Literally One Charger is a place to buy a phone charger in kelowna and canada. Offering a affordable, high-quality, single cable.",
    url: "https://www.LiterallyOneCharger.ca",
    image: "https://www.LiterallyOneCharger.ca/one.png", // Update the image URL if necessary
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Literally One Charger",
    description:
      "Literally One Charger is a place to buy a phone charger in kelowna and canada. Offering a affordable, high-quality, single cable.",
    image: "https://www.LiterallyOneCharger.ca/one.png",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Literally One Charger",
    url: "https://www.LiterallyOneCharger.ca",
    description:
      "Literally One Charger is a place to buy a phone charger in kelowna and canada. Offering a affordable, high-quality, single cable.",
    image: "https://www.LiterallyOneCharger.com/oa.png", // Update the image URL if necessary
    sameAs: [
      "https://www.facebook.com/EthanBreitkreutz", // Update these links as necessary
      "https://www.instagram.com/ethan_breitkreutz/",
      "https://www.linkedin.com/in/ethan-breitkreutz",
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
          rel="icon"
          type="image/png"
          href="/favicon/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="A Charger" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="A Charger." />
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBarClient />
        {children}

      </body>
    </html>
  );
}
