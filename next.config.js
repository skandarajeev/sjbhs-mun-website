/** @type {import('next').NextConfig} */
const nextConfig = {
  // When you are ready to build a static export uncomment this
  // output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // basePath: process.env.NODE_ENV === "production" ? "/sjbhsmun" : "",
  // assetPrefix:
  //   process.env.NODE_ENV === "production"
  //     ? "http://localhost:3000/sjbhsmun/"
  //     : "http://localhost:3000/",
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
