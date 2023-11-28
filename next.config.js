/** @type {import('next').NextConfig} */

const { nextui } = require("@nextui-org/react");

const nextConfig = {
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "seland-dev.s3.ap-southeast-1.amazonaws.com",
      "viettennis.net",
    ],
  },
};

module.exports = nextConfig;
