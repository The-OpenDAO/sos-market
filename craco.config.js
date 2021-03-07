const cracoPluginStyleResourcesLoader = require('craco-plugin-style-resources-loader');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: cracoPluginStyleResourcesLoader,
      options: {
        hoistUseStatements: true,
        patterns: [
          path.join(__dirname, './src/styles/abstracts/_colors.scss'),
          path.join(__dirname, './src/styles/abstracts/_mixins.scss'),
          path.join(__dirname, './src/styles/themes/_default.scss')
        ],
        styleType: 'scss'
      }
    }
  ]
};
