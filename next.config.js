/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    baseCollectionsDomain: process.env.NEXT_PUBLIC_BASE_COLLECTIONS_DOMAIN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.seadn.io",
        port: "",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "**/*",
      },
    ],
  },
};

module.exports = nextConfig;
