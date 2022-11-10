import { Configuration, HotModuleReplacementPlugin } from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";

const srcPath = path.resolve(__dirname, "src");
const buildPath = path.resolve(__dirname, "build");
const publicPath = path.resolve(__dirname, "public");

const configuration: Configuration & {
  devServer: DevServerConfiguration;
} = {
  mode: "development",
  entry: path.resolve(srcPath, "index.tsx"),
  output: {
    filename: "bundle.[contenthash].js",
    path: buildPath,
  },
  resolve: {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        exclude: /node_modules/,
        use: "asset-loader",
      },
      {
        test: /\.(css|sass)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(publicPath, "index.html"),
    }),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};

export default configuration;
