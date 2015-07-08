import {DefinePlugin, HotModuleReplacementPlugin} from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer-core'
import mqpacker from 'css-mqpacker'
import path from 'path'

import {useIf, prepareArray, mergeArrays, mergeObjects} from '../utilities'
import config from '../config'
import base from './base'

export default mergeObjects(base, {
  entry: prepareArray([
    useIf(config.hotReload, `webpack-dev-server/client?`),
    useIf(config.hotReload, 'webpack/hot/dev-server'),
    path.join(config.sourceDirectory, 'frontend')
  ]),

  output: {
    path: config.destinationPublicDirectory,
    filename: 'frontend.js',
    publicPath: '/',
    library: 'frontend'
  },

  module: mergeObjects(base.module, {
    loaders: mergeArrays(
      [
        {
          test: /\.js$/,
          include: [config.sourceDirectory],
          loaders: ['react-hot-loader']
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader!less-loader?sourceMap')
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader')
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loaders: ['url?limit=10000']
        }
      ],
      base.module.loaders
    )
  }),

  postcss: () => ([
    autoprefixer,
    mqpacker
  ]),

  plugins: mergeArrays(
    prepareArray([
      new DefinePlugin({
        'process.env.BACKEND_ADDRESS': JSON.stringify(process.env.BACKEND_ADDRESS || '')
      }),
      new ExtractTextPlugin('frontend.css'),
      useIf(config.hotReload, new HotModuleReplacementPlugin())
    ]),
    base.plugins
  ),

  devServer: {
    contentBase: config.destinationPublicDirectory,
    filename: 'frontend.js',
    publicPath: '/',
    hot: config.hotReload,
    proxy: {
      '*': `http://localhost:${process.env.PORT}`
    }
  }
})
