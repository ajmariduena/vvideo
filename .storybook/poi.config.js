const path = require('path')
const updateWebpackConfig = require('storybook-readme/env/vue/updateWebpackConfig')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {

  webpack (config) {
    return updateWebpackConfig(config)
  },

  extendWebpack (config) {
    config.module.rule('markdown')
      .test(/\.md$/)
      .use('html').loader(require.resolve('html-loader')).end()
      .use('markdown').loader(require.resolve('markdown-loader'))
  },

  // Entry is relative to process.cwd()
  entry: [
    '.storybook/config.js',
    '.storybook/addons.js'
  ],

  dist: '.storybook/dist',

  presets: [
    require('poi-preset-storybook')(),
    require('poi-preset-resolve-alias')({
      '@': resolve('src/components'),
      '~': resolve('')
    })
  ]
}
