var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: "./app/components/App.js",
    vendor: ["react", "react-dom"]
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor", // (the commons chunk name)
      filename: "vendor.js",
      minChunks: Infinity
    })
  ],
  output: { path: path.join(__dirname, '/dist/client/'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
