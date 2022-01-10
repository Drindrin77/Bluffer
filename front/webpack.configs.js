"use strict";

const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
  },

  // Supported file loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: "file-loader" },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },

  // File extensions to support resolving
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
