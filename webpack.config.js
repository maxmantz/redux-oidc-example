var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['whatwg-fetch', 'babel-polyfill', './src/index.js'],
    silentRenew: ['./silent_renew/index.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['app'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './silent_renew/silent_renew.html',
      chunks: ['silentRenew'],
      filename: 'silent_renew.html',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      chunks: ['commons'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'silentRenew',
      chunks: ['commons'],
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  babelQuery: {
    presets: ['react-hmre'],
  },
}
