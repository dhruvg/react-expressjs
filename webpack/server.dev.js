const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: path.join(__dirname, '../server'),
  devtool: 'source-map',
  entry: [
    'webpack/hot/poll?1000',
    './src/index.js',
  ],
  watch: true,
  target: 'node',
  output: {
    path: path.join(__dirname, '../server/bin'),
    filename: './server.js',
  },
  externals: [nodeExternals({ whitelist: [ "webpack/hot/poll?1000" ] })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              emitFile: false,
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
