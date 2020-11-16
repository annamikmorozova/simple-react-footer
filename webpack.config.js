"use strict";

const path = require("path");
let webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/SimpleReactFooter.js",
  output: {
    path: path.resolve("lib"),
    filename: "SimpleReactFooter.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ],
  },
  resolve: {
    alias: {
      "react": path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom")
    }
  },
  externals: {  
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
};