var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');

var config = require('./webpack.config');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  contentBase: './src',
  historyApiFallback: true,

  quiet: false,
  noInfo: true,
  lazy: false,
  stats: { colors: true }
});

server.listen(8000, "localhost", function() {});
