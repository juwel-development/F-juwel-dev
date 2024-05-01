/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
// const CopyPlugin = require('copy-webpack-plugin');
require('dotenv').config();

const CircularDependencyPlugin = require('circular-dependency-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const path = require('path');

const isProduction = process.argv.indexOf('prod') > -1;

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    loader: path.resolve(__dirname + '/src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: isProduction ? '[name].[contenthash].js' : '[name].js',
    chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].js',
    publicPath: '/',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: isProduction ? false : 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        test: [/\.sass$/, /\.scss$/, /\.less$/, /\.css$/],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          mangle: true,
        },
      }),
    ],
    //		sideEffects: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [path.resolve(__dirname + '/src'), 'node_modules'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CircularDependencyPlugin({
      allowAsyncCycles: false,
      exclude: /node_modules/,
    }),
    new HtmlWebpackPlugin({
      title: 'Jens-Uwe Lössl',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    //		new CopyPlugin({
    //			patterns: [{from: 'res', to: 'res'}]
    //		}),
    new webpack.DefinePlugin({
      ENV: JSON.stringify({
        API_KEY: process.env.API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN,
        DATABASE_URL: process.env.DATABASE_URL,
        PROJECT_ID: process.env.PROJECT_ID,
        STORAGE_BUCKET: process.env.STORAGE_BUCKET,
        MESSAGE_SENDING_ID: process.env.MESSAGE_SENDING_ID,
        APP_ID: process.env.APP_ID,
        MEASUREMENT_ID: process.env.MEASUREMENT_ID,
        USE_EMULATOR: process.env.USE_EMULATOR,
        LOG_LEVEL: process.env.LOG_LEVEL,
        ENVIRONMENT: isProduction ? 'production' : 'development',
        LOG_ROCKET_APP_ID: process.env.LOG_ROCKET_APP_ID,
        USE_IN_MEMORY_REPOSITORY: process.env.USE_IN_MEMORY_REPOSITORY,
      }),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.CI === 'true' ? 'static' : 'server',
      analyzerHost: '0.0.0.0',
      openAnalyzer: false,
    }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: isProduction ? 30000 : 0 }),
    //		new WorkboxPlugin.InjectManifest({
    //			swSrc: './src/sw.ts',
    //		})
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
  },
};
