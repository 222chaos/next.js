/**
 * @type {import('@rspack/cli').Configuration}
 *
 */
// test
module.exports = {
  context: __dirname,
  entry: {
    main: "./src/main.jsx",
  },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
};
