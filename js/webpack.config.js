const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  }
};
module.exports = config;
