const path = require('path')
const { override, addBabelPlugin, addWebpackAlias } = require('customize-cra')

module.exports = override(
  addBabelPlugin(['babel-plugin-transform-typescript-metadata']),
  addBabelPlugin(['@babel/plugin-proposal-decorators', { legacy: true }]),
  addBabelPlugin(['@babel/plugin-proposal-class-properties', { loose: true }]),
  addWebpackAlias({
    '@modules': path.resolve(__dirname, '..', 'src', 'modules'),
    '@config': path.resolve(__dirname, '..', 'src', 'config'),
    '@core': path.resolve(__dirname, '..', 'src', 'core'),
  }),
)
