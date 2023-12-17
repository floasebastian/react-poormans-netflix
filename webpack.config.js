const path = require("path");

module.exports = {
  mode: "development",
  entry: ['babel-polyfill', __dirname + "/src/index.js"],
  output: {
    path: __dirname + "/",
    filename: "index.js",
  },
  module: {
    rules: 
    [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [],
        },
      },
      {
        test: /\.(sass|less|css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  },
  devServer: {
    liveReload: true,
    port: 8001,
    historyApiFallback: true,
  },
};
