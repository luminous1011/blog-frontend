/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'jquery-bridget'
declare module 'uuid'
declare module 'aplayer/dist/APlayer.min.js'