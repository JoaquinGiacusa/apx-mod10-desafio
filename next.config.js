const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
});

module.exports = nextConfig;
