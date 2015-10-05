var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var webpackConfig = {
  resolve: {
    extensions: ['', '.js'],
  },
  entry: [
    './client.js',
  ],
  output: {
    path: path.resolve('./build/'),
    publicPath: '/public/',
    filename: 'main.min.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          require.resolve('babel-loader'),
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader'),
      },
    ],
  },
  node: {
    setImmediate: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BROWSER: JSON.stringify(true),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('main.css', {
      allChunks: true
    }),
  ],
  devtool: 'source-map',
};


module.exports = webpackConfig;

