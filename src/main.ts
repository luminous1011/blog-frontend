import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


//引入highlight.js
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljs from '@highlightjs/vue-plugin'

const app = createApp(App);
app.use(store);
app.use(router);
app.use(hljs)

app.mount("#app");
// createApp(App).use(store).use(router).mount("#app");
