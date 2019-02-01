const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  mode: "development",
  entry: "./index.html",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
   },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          }
        ]
      },
    ],
  },

    plugins: [
        new CopyWebpackPlugin([
            {from: path.resolve(__dirname, "index.html"),to: path.resolve(__dirname, "./dist")}
        ]),
      new CopyWebpackPlugin([
        {from: path.resolve(__dirname, "style.css"),to: path.resolve(__dirname, "./dist")}
      ]),
    ],

  context: __dirname,

  target: "web",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  node: {
    fs: 'empty'
  }
};