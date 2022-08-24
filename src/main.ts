import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "@/bootstrap";

//引入highlight.js
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljs from '@highlightjs/vue-plugin'


bootstrap({router,store})
const app = createApp(App);
app.use(store);
app.use(router);
app.use(hljs)

app.mount("#app");
