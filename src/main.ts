import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import guards from './router/guard'

//引入highlight.js
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljs from '@highlightjs/vue-plugin'

const {beforeEach,afterEach} = guards
beforeEach.forEach(guard=>{
    if(guard && typeof guard==="function"){
        router.beforeEach(async(to,from,next)=>guard(to,from,next))
    }
})
afterEach.forEach(guard=>{
    if(guard && typeof guard==="function"){
        router.afterEach(async()=>guard())
    }
})

const app = createApp(App);
app.use(store);
app.use(router);
app.use(hljs)

app.mount("#app");
// createApp(App).use(store).use(router).mount("#app");
