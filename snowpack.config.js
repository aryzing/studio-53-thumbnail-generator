// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/dist",
    public: "/",
  },
  plugins: ["@snowpack/plugin-babel", "@snowpack/plugin-react-refresh"],
  install: [
    "react/jsx-runtime",
    "@emotion/styled/base",
    "core-js/modules/es.array.is-array.js",
  ],
  installOptions: {
    sourceMap: true,
  },
  buildOptions: {
    sourceMaps: true,
    out: "dist",
  },
  devOptions: {
    open: "none",
  },
};
