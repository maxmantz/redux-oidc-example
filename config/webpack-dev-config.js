/**
 * Created by Maxe on 24/10/2016.
 */
var webpack = require('webpack');
var createWebpackConfig = require('./create-webpack.config');

module.exports = createWebpackConfig({
    entry: ['webpack-hot-middleware/client'],
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});