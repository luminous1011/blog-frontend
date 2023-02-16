import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "./bootstrap";
import Antd, { notification } from "ant-design-vue";

import "animate.css/source/animate.css";

// 引入highlight.js
import hljs from "@highlightjs/vue-plugin";
import "highlight.js/lib/common";
import "highlight.js/styles/a11y-dark.css";

import { timestampToTime } from "@/utils/time";

import {
  browserRedirect,
  getExploreName,
  getExploreVersion,
} from "@/utils/utils";
console.error(`当前操作系统：${browserRedirect()}`);
console.error(`当前浏览器：${getExploreName()} ${getExploreVersion()}`);

// 引入 aplayer
// https://github.com/DIYgod/APlayer
// https://aplayer.js.org/#/zh-Hans/
// https://github.com/metowolf/MetingJS

bootstrap({ router, store });
const app = createApp(App);
app.use(store);
app.use(router);
app.use(hljs);
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


//禁止使用F12
window.onkeydown =
  window.onkeyup =
     (event)=> {
      // 判断是否按下F12，F12键码为123
      if (event.keyCode === 123) {
        event.preventDefault(); // 阻止默认事件行为
        notification["warning"]({
          message: "F12被禁用",
          placement: "bottomRight",
        });
        event.returnValue = false;
      }
    };

app.mount("#app");
