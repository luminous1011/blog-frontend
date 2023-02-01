import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "./bootstrap";
import { Pagination, Space, BackTop } from "ant-design-vue";

import "animate.css/source/animate.css";

// 引入highlight.js
import hljs from "@highlightjs/vue-plugin";
import "highlight.js/lib/common";
import "highlight.js/styles/a11y-dark.css";

import { timestampToTime } from "@/utils/time";

// 引入 aplayer
// https://github.com/DIYgod/APlayer
// https://aplayer.js.org/#/zh-Hans/
// https://github.com/metowolf/MetingJS

bootstrap({ router, store });
const app = createApp(App);
app.use(store);
app.use(router);
app.use(hljs);
app.use(Pagination);
app.use(Space);
app.use(BackTop);


app.config.globalProperties.$filters ={
    timestampToTime(value:number){
        return timestampToTime(value)
    }
}

app.mount("#app");
