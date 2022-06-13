// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'app'),
  output: {
    filename: './public/bundle.js',
    path: __dirname,
  },
  mode: 'development',
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    modules: [resolve(__dirname, 'src'), 'node-modules'],
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      // use the style-loader/css-loader combos for anything matching the .css extension
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        loader: 'style-loader!css-loader',
      },
    ],
  },
};
// plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
