// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const config = require('./webpack.base')('development');

module.exports = {
  ...config,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    open: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...config.plugins,
  ],
  output: {
    ...config.output,
    filename: '[name].[hash].js',
  },
};
