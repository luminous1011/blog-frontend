import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const isProd = process.env.NODE_ENV === 'production'
const productionGzipExtensions = ['js', 'css']



// https://vitejs.dev/config/
export default defineConfig(({mode,command})=>({
  server:{
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:8888/',
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
  build:{
    target:'modules',
    minify: "terser", 
    terserOptions:{
      compress:{
        drop_console: true, 
        drop_debugger: command === "build" && loadEnv(mode, __dirname).VITE_API_ENV === "prod" 
      }
    },
  },
  plugins: [
    vue(),
  ]
}))
