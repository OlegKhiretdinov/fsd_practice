const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'index.js': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: "[name]"
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/img/')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/color-type.pug',
      filename: 'color-type.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/ui-form-element.pug',
      filename: 'ui-form.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/cards.pug',
      filename: 'cards.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/headers-footers.pug',
      filename: 'headers-footers.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/landing.pug',
      filename: 'landing.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/registration.pug',
      filename: 'registration.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/sign-in.pug',
      filename: 'sign-in.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/search-room.pug',
      filename: 'search-room.html',
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/room-details.pug',
      filename: 'room-details.html',
      inject: true,
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    // new CleanWebpackPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    stats: 'errors-only',
    contentBase: path.join(__dirname, './dist/')
  },
  module: {
    rules: [{
      test: /\.(s[ac]ss|css)$/,
      use: [MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          }
        },
      ],
    },
    {
      test: /\.pug$/,
      loader: 'pug-loader',
    },
    {
      test: /\.(png|jpe?g|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img',
          },
        },
      ],
    },
    {
      test: /\.(ttf|woff|eot)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'font/',
        },
      },],
    },
    {
      test: /\.svg$/,
      use: [{
        loader: 'file-loader',
        options: {
          regExp: /fonts\/([a-z0-9]+)\/[a-z0-9]+\.svg$/,
          name: '[name].[ext]',
          outputPath: 'svg',
        },
      },],
    },
    ],
  },
};