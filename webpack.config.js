var webpack = require('webpack');
var path = require('path');

var webpackConfig = {
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client.js',
  ],
  output: {
    path: path.resolve('./build'),
    publicPath: '/public/',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          require.resolve('react-hot-loader'),
          require.resolve('babel-loader'),
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader',
      },
    ],
  },
  node: {
    setImmediate: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        BROWSER: JSON.stringify(true),
      },
    }),
  ],
  devtool: 'eval',
};


module.exports = webpackConfig;

