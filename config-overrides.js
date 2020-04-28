const path = require('path')
const { override, fixBabelImports, addLessLoader, addWebpackAlias, useEslintRc } = require('customize-cra')

module.exports = override(
  useEslintRc(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
)