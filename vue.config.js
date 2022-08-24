const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  runtimeCompiler:true,
  productionSourceMap:false,
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Luminous1011 · Blog"
      return args
    })
  },
  devServer:{
    port:9001,
    host:"localhost",
    open:true,
    proxy:{

    }
  }
})
