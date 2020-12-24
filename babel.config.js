module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
        useBuiltIns: "usage",

        // https://babeljs.io/docs/en/babel-preset-env#corejs
        corejs: 3,
        modules: false,
      },
    ],
    [
      "@babel/preset-react",
      {
        // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#manual-babel-setup
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: ["@emotion"],
};
