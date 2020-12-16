const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin');

const {
  NODE_ENV = 'development',
  DEV_SERVER_PORT = 6000,
} = process.env;

module.exports = {
  entry: './src/app.js',
  mode: NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
      },
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: `${__dirname}/src/index.html`,
    }),
  ],
  ...(NODE_ENV === 'development') && {
    devServer: {
      hot: true,
      contentBase: `${__dirname}/dist`,
      compress: true,
      port: DEV_SERVER_PORT,
    },
  },
};
