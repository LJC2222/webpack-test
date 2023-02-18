const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Development",
    }),
  ],
  devtool: "inline-source-map",
};
