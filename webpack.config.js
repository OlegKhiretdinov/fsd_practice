const path = require('path');
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/ui-form-element.pug',
      filename: 'ui-form.html',
      inject: true,
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
      test: /\.s[ac]ss$/,
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
      test: /\.(ttf|woff)$/,
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