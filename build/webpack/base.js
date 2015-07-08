import {DefinePlugin, ProvidePlugin, optimize} from 'webpack'

import {useIf, prepareArray} from '../utilities'
import config from '../config'

export default {
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [config.sourceDirectory],
        loaders: ['babel']
      },
      {
        test: /\.(png)$/,
        loaders: ['file']
      }
    ]
  },

  debug: config.development,

  devtool: 'source-map',

  plugins: prepareArray([
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),

    new ProvidePlugin({
      'React': 'react'
    }),

    useIf(config.production, new optimize.UglifyJsPlugin())
  ])
}
