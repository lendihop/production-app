import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

import { BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const babelLoader = {
    test: /\.([jt]sx?)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
        presets: ['@babel/preset-env']
      }
    }
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: new RegExp('\\.module\\.'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, sassLoader];
};
