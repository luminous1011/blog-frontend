import { createApp,createRenderer } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "./bootstrap";
import Antd, { notification } from "ant-design-vue";

import "animate.css/source/animate.css";

// 引入highlight.js
import hljs from 'highlight.js/lib/core';
// import hljs from "@highlightjs/vue-plugin";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import javascript from 'highlight.js/lib/languages/javascript';
import "highlight.js/lib/common";
import 'highlight.js/styles/github.css'
// import "highlight.js/styles/atom-one-dark.css";

import { timestampToTime } from "@/utils/time";

import {
  browserRedirect,
  getExploreName,
  getExploreVersion,
} from "@/utils/utils";

// import VMdPreview from '@kangc/v-md-editor/lib/preview'
// import '@kangc/v-md-editor/lib/style/preview.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';

// import '@kangc/v-md-editor/lib/theme/style/github.css';
// VMdPreview.use(githubTheme, {
//   Hljs: hljs,
// });
console.error(`当前操作系统：${browserRedirect()}`);
console.error(`当前浏览器：${getExploreName()} ${getExploreVersion()}`);
hljs.registerLanguage('javascript', javascript);
// 引入 aplayer
// https://github.com/DIYgod/APlayer
// https://aplayer.js.org/#/zh-Hans/
// https://github.com/metowolf/MetingJS

bootstrap({ router, store });
const app = createApp(App);
app.use(store);
app.use(router);
app.use(hljsVuePlugin);
// app.use(VMdPreview);
// app.use(Pagination);
// app.use(Space);
// app.use(BackTop);
// app.use(Input);
app.use(Antd);

app.config.globalProperties.$filters = {
  // yyyy-MM-dd hh:mm:ss
  timestampToTime(value: number) {
    return timestampToTime(value);
  },
};



app.mount("#app");
