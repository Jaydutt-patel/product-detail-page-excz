/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "outoforder.in",
      "static.nike.com",
      "m.media-amazon.com",
      "static-cse.canva.com",
      "assets.myntassets.com",
      "thesagacity.s3.ap-south-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
