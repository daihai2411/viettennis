/** @type {import('next').NextConfig} */

const { nextui } = require("@nextui-org/react");

const nextConfig = {
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};

module.exports = nextConfig;
