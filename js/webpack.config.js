const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: __dirname + "/src/index.jsx",
  output: {
    path: __dirname + "/../static/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "sass-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "bundle.css"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
};
module.exports = config;
