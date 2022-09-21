import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "@/bootstrap";
import Antd from 'ant-design-vue'

import 'animate.css/source/animate.css'

// 引入highlight.js
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljs from '@highlightjs/vue-plugin'

// 引入 aplayer
// https://github.com/DIYgod/APlayer
// https://aplayer.js.org/#/zh-Hans/
// https://github.com/metowolf/MetingJS




bootstrap({router,store})
const app = createApp(App);
app.use(store);
app.use(router);
app.use(hljs)
app.use(Antd)

app.mount("#app");
