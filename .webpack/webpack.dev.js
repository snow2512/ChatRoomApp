const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin")
const chalk = require('chalk')
const port = 2512
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'errors-only',
  devServer: {
    static: './dist',
    port
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      // compilationSuccessInfo : {
      //   messages: [chalk.blueBright(`Project running at http://locahost:${port}`)]
      // },
      clearConsole: true
    }),
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false,
    }),
  ]
});