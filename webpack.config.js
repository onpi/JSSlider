const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/index.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    // watchContentBase: true,
    compress: true,
    port: 8000,
    open: true,
  },
  module: {
    rules: [
      // {
      //   test: /\.vue/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'vue-loader',
      //     }
      //   ]
      // },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { 'targets': '> 0.25%, not dead' }],
              ],
            }
          }
        ]
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            }
          },
          {
            loader: 'sass-loader',
          }
        ],
      },
      {
        test: /\.(png|jpg|jpeg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'images/[name].[ext]',
              publicPath: '/',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    // new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/style.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
}
