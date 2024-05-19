import {WebpackPluginInstance, ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import {BuildOptions} from "./types/config";

export const buildPlugins = ({paths, isDev}: BuildOptions): WebpackPluginInstance[] => ([
  new ProgressPlugin(),
  new HtmlWebpackPlugin({ template: paths.html }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css'
  }),
  new DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
  }),
  isDev && new ReactRefreshWebpackPlugin(),
  isDev && new HotModuleReplacementPlugin()
].filter(Boolean));
