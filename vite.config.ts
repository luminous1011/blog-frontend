import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

const isProd = process.env.NODE_ENV === 'production'
const productionGzipExtensions = ['js', 'css']

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 别名
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()]
})
