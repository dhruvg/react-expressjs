const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '../client'),
  devtool: 'source-map',
  entry: [
    'babel-regenerator-runtime',
    './src/index.jsx',
    './assets/style/main.scss',
  ],
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: './js/index.js',
    publicPath: '/',
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
          }
        }]
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin('css/main.css'),
    new CopyWebpackPlugin([
      {
        from: './assets/images/static',
        to: 'images',
        force: true
      },
    ]),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
