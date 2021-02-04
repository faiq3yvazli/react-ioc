const { override, addBabelPlugin } = require('customize-cra')

module.exports = override(
  addBabelPlugin(['babel-plugin-transform-typescript-metadata']),
  addBabelPlugin(['@babel/plugin-proposal-decorators', { legacy: true }]),
  addBabelPlugin(['@babel/plugin-proposal-class-properties', { loose: true }]),
)
