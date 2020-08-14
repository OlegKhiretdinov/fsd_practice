const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const templateFolder = './src/pages/';
const htmlTemplates = fs.readdirSync(templateFolder)
  .map((item) => new HtmlWebpackPlugin({
      template: `${templateFolder}${item}`,
      filename: `${path.parse(item).name}.html`,
      inject: true,
    })
  );

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
      images: path.resolve(__dirname, 'src/img/'),
      'node_modules': path.resolve(__dirname, 'node_modules/')
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),

    ...htmlTemplates,

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
      test: /\.(png|jpe?g|gif|svg)$/,
      exclude: /\/src\/blocks\/fonts\//,
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
      include: /\/src\/blocks\/fonts\//,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'font/',
        },
      },],
    },
    ],
  },
};