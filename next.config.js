/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "geo"],
    defaultLocale: "geo",
    localeDetection: false,
  },
};

module.exports = nextConfig;
