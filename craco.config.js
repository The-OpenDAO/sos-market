const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          './src/styles/base/_colors.scss',
          './src/styles/utils/_mixins.scss'
        ]
      }
    }
  ]
};
