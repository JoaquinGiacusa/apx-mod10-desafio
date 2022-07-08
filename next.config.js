const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["dl.airtable.com"],
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
