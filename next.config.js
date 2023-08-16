/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? "/sjbhsmun" : "",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "http://localhost:3000/sjbhsmun/"
      : "http://localhost:3000/",
};

module.exports = nextConfig;
