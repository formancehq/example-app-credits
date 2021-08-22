 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/ui/index.jsx',
  output: {
    path: path.resolve(__dirname + '/assets/dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/ui/index.html',
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {from: 'assets/img', to: 'img'},
    //   ]
    // })
  ],
  devServer: {
    historyApiFallback: true
  },
  watchOptions: {
    ignored: /node_modules/
  }
};