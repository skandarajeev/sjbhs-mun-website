/** @type {import('next').NextConfig} */
const nextConfig = {
  //when testing through yarn dev, comment the whole thing till webpack
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/sjbhsmun" : "",

  // //uncomment this when not testing export
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "http://localhost:3000/sjbhsmun/"
      : "http:/localhost:3000/",

  // //uncomment this when exporting file for integro
  // // assetPrefix:
  // //   process.env.NODE_ENV === "production"
  // //     ? "https://sjbhs.edu.in/sjbhsmun/"
  // //     : "https://sjbhs.edu.in/",

  distDir: "export/sjbhsmun",
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },

      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
