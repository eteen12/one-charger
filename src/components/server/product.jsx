import ProductImage from "/public/productView/productImage.png";
const product = {
  id: 1,
  name: "Literally one Charger",
  href: "#",
  price: 7,
  description:
    "Want a single charger that can charge any device? This is the one for you. It's small, light, and can charge anything. That is type C of course. IF you need a lighting cable, well, maybe I'll make a website soon.",
  imageSrc: ProductImage,
  imageAlt:
    "Literally one charger on a white background with a USB-C connector.",
  breadcrumbs: [
    { id: 1, name: "Shop", href: "/shop" },
  ],
  amounts: [
    {
      name: "A Charger",
      description: "Literally one charger.",
      quantity: 1,
    },
    {
      name: "2 Chargers",
      description: "Is there really anything to say?",
      quantity: 2,
    },
  ],
};

export default product;
