const sassResourcesLoader = require('craco-sass-resources-loader');

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: [
          './src/styles/abstracts/_colors.scss',
          './src/styles/abstracts/_mixins.scss',
          './src/styles/themes/_default.scss'
        ]
      }
    }
  ]
};
