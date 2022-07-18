const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap:false,
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Luminous1011 · Blog"
      return args
    })
  }
})
