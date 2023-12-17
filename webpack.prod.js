const path = require("path");

module.exports = {
  entry: __dirname + "/src/orange.js",
  output: {
    path: __dirname + "/",
    filename: "index.js",
  },
  devServer: {
    liveReload: true,
    port: 8001,
  },
};
