import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// const isProd = process.env.NODE_ENV === 'production'
const productionGzipExtensions = ['js', 'css']

// 代码打包之后取出console.log压缩代码
// const TerserPlugin = require('terser-webpack-plugin')

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:8081/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  resolve: {
    // 别名
    alias: {
      '@': path.join(__dirname, 'src'),
    },
    
  },
  plugins: [
    vue(),
  ]
})
