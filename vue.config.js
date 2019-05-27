const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // baseUrl: './',
  publicPath: process.env.NODE_ENV === 'production'
    ? "././"
    : './'
  
  // assetsDir: './'
}