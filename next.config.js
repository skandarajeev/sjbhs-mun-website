/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/sjbhsmun",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "http://localhost:3000/sjbhsmun/"
      : undefined,
};

module.exports = nextConfig;
