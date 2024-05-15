import {WebpackPluginInstance, ProgressPlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildPlugins = ({paths}: BuildOptions): WebpackPluginInstance[] => ([
  new ProgressPlugin(),
  new HtmlWebpackPlugin({ template: paths.html }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  }),
]);
