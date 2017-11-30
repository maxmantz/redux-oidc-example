var fs = require("fs");
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    app: ["./src/index.js"],
    //polyfills: ["whatwg-fetch", "babel-polyfill"],
    silentRenew: ["./silent_renew/index.js"]
  },
  context: path.resolve(__dirname, "."),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js"
  },
  stats: "errors-only",
  plugins: [
    // new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["app"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./silent_renew/silent_renew.html",
      chunks: ["silentRenew"],
      filename: "silent_renew.html"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "app",
      chunks: ["commons"]
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "silentRenew",
      chunks: ["commons"]
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["env", "react"]
        }
      }
    ]
  },
  devServer: {
    https: true,
    hot: false,
    port: 8080,
    host: "localhost",
    stats: "errors-only",
    historyApiFallback: true
    // proxy: {
    //   "/callback": { target: "http://localhost:9090", secure: true }
    // }
  }
};
