/** @type {import('next').NextConfig} */

const { nextui } = require("@nextui-org/react");

const nextConfig = {
  plugins: [
    {
      locales: ["vi", "en"],
      defaultLocale: "vi",
      trailingSlash: true,
      localeDetection: false,
    },
    nextui({
      addCommonColors: true,
    }),
  ],
};

module.exports = nextConfig;
