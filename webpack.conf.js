var webpack = require('webpack');
var path = require('path');

module.exports = {
  devServer: {
    // You can change this to your server IP address to access it remotely
    host: 'localhost'
  },
  resolve: {
    root: path.join(__dirname, '/client/'),
    extensions: ['', '.js', '.vue', '.json', '.css', '.scss']
  }
};