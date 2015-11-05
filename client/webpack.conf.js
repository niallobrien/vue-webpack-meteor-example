var webpack = require('webpack');

var babelSettings = { stage: 0 };

module.exports = {
  entry: './main.js',
  module: {
    loaders: [
      { test: /\.vue?$/, loader: 'vue', exclude: /node_modules/ },
      { test: /\.(png|jpg|gif)$/, loader: 'file?name=[name].[ext]?[hash]' }
    ]
  },
  devtool: 'inline-source-map'
};