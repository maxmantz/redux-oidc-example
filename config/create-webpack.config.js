var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entry = ['whatwg-fetch', 'babel-polyfill', './src/index.js'];

module.exports = function(options) {
  return {
    devtool: options.devtool,
    entry: {
      app: options.entry ? options.entry.concat(entry) : entry,
      silentRenew: [path.join(process.cwd(), './silent_renew/index.js')]
    },
    output: {
      path: path.join(process.cwd(), './dist'),
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
      publicPath: '/'
    },
    plugins: options.plugins.concat([
      new webpack.optimize.DedupePlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: ['app'],
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: './silent_renew/silent_renew.html',
        chunks: ['silentRenew'],
        filename: 'silent_renew.html'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'app',
        chunks: ['commons']
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'silentRenew',
        chunks: ['commons']
      }),
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
      })
    ]),
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
};

