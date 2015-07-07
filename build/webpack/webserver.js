import path from 'path'

import {mergeObjects, mergeArrays} from '../utilities'
import config from '../config'
import base from './base'

export default mergeObjects(base, {
  entry: path.join(config.sourceDirectory, 'commands', 'webserver'),

  output: {
    path: path.join(config.destinationDirectory),
    filename: 'webserver.js'
  },

  module: mergeObjects(base.module, {
    loaders: mergeArrays(
      [
        {
          test: /\.less$/,
          loaders: ['null']
        },
        {
          test: /\.css$/,
          loaders: ['null']
        }
      ],
      base.module.loaders
    )
  }),

  target: 'node',
  node: {
    console: false,
    process: false,
    global: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },

  externals: [config.nodeModulesExternals]
})
