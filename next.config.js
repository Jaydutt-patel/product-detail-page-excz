/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "static-cse.canva.com",
      "m.media-amazon.com",
      "thesagacity.s3.ap-south-1.amazonaws.com",
      "outoforder.in",
    ],
  },
};

module.exports = nextConfig;
