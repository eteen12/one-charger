/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.literallyonecharger.ca",
          },
        ],
        destination: "https://literallyonecharger.ca/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
