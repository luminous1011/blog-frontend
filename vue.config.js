const { defineConfig } = require("@vue/cli-service");
const CompressionPlugin = require("compression-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = defineConfig({
  runtimeCompiler: true,
  productionSourceMap: false,
  transpileDependencies: true,
  chainWebpack: (config) => {
    console.error(config);
    config.plugin("html").tap((args) => {
      args[0].title = "Luminous1011 · Blog";
      return args;
    });
  },
  devServer: {
    port: 9001,
    host: "localhost",
    open: true,
    proxy: {},
  },
  configureWebpack: {
    plugins:[new CompressionPlugin({
        test: /\.(js|css|less)$/, // 匹配文件名
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false // 不删除源文件
      })
      // new BundleAnalyzerPlugin()
    ],
    // externals:{
    //   // 'vue':'Vue',
    //   // 'ant-design-vue':'ant-design-vue',
    //   // 'vue-router':'vue-router',
    //   // 'vuex':'vuex'
    // }
    // const conf = {};
    // conf.plugin('compressionPlugin').use(new CompressionPlugin({
    //   test: /\.(js|css|less)$/, // 匹配文件名
    //   threshold: 10240, // 对超过10k的数据压缩
    //   deleteOriginalAssets: false // 不删除源文件
    // }))
    
    // if (process.env.NODE_ENV === "production") {
    //   conf.externals = {
    //     axios: "axios",
    //     lodash: "_",
    //     vue: "Vue",
    //     vuex: "Vuex",
    //     "vue-router": "VueRouter",
    //     "element-ui": "ELEMENT",
    //   };
    // }
    // return conf;
  }
});
