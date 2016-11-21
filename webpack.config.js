var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  resolve: {
    root: [
      path.resolve(__dirname, './src')
    ],
    extensions: [ '', '.js', '.json', '.jsx' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/
      }
    ]
  }
};
