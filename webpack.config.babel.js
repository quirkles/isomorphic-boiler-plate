/* eslint-disable */
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import AssetsPlugin from 'assets-webpack-plugin';
import webpackDevConfig from './webpack.dev.config.babel';

process.noDeprecation = true;

let webpackConfig = {
  entry: {
    bundle: './src/app/client.js',
    vendor: [
      "react",
      "react-router",
      "react-dom"
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: (process.env.NODE_ENV === 'development') ? '[name].js' : '[name]_[chunkhash].js',
    publicPath: `/static/`
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new AssetsPlugin({filename: 'bundleInfo.json'}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname
      }
    })
  ],
  externals: {
    newrelic: true
  }
};

webpackConfig = merge(webpackConfig, webpackDevConfig);

module.exports = webpackConfig;