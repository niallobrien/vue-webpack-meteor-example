var webpack = require('webpack');
var path = require('path');

module.exports = {
  externals: {
    // Make sure we use Meteor package for Vue
    'vue': 'Vue'
  },
  devServer: {
    // You can change this to your server IP address to access it remotely
    host: 'localhost'
  },
  resolve: {
    root: path.join(__dirname, '/client/'),
    extensions: ['', '.js', '.vue', '.json', '.css', '.scss']
  }
};