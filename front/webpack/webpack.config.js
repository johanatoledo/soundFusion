const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node", // Importante para aplicaciones backend con Node.js
  entry: "./src/index.js", // Tu archivo de entrada
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  externals: [nodeExternals()], // Ignora los módulos de node_modules
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
