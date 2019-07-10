const config = require('../app.config')

/**
 * Internal application image files. This rule exceptionally don't emit its files,
 * because they are handled by copy and image-minify webpack plugins.
 */
module.exports = {
  test: /\.(png|jpe?g|gif|svg|cur)$/,
  include: config.paths.images,
  use: [{
    loader: 'file-loader',
    options: {
      context: config.paths.images,
      publicPath: config.paths.relative,
      name: config.outputs.image.filename,
      emitFile: false,
    },
  }],
}