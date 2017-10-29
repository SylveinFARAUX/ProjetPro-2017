const path = require('path');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './client/js/Main.js',
  output: {
    filename: 'wwae.js',
    path: path.resolve(__dirname, 'client/build/js')
  }
};
