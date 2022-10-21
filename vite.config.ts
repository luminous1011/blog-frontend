import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// const isProd = process.env.NODE_ENV === 'production'
const productionGzipExtensions = ['js', 'css']

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 别名
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  plugins: [vue()]
})
