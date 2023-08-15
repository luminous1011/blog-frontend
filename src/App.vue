<template>
  <div :class="['index-page', bgTheme]">
    <header>
      <AdminHeader :class="[headerTheme]" />
    </header>
    <main>
      <router-view class="main_content clearfix index_page main_page" />
    </main>
    <footer>
      <AdminFooter  v-if="footerVisible" />
    </footer>
    <TabsView/>
  </div>
</template>

<script lang="ts" setup>
import AdminHeader from "@/components/header";
import AdminFooter from "@/components/footer";
import TabsView from "@/components/tabs";

import { computed } from "vue";
import { useStore } from "vuex";



const store = useStore();
const headerTheme = computed(() => store.state.theme);
const bgTheme = computed(() => store.state.bgColor);
const footerVisible = computed(() => store.state.footerVisible);
</script>

<style lang="less">
@import "ant-design-vue/dist/antd.css";
@import "./theme/index.less";
@import "../src/font/css/font-awesome.min.css";
@import "./font/font.less";
/** 页面布局*/
.index-page {
  padding: 70px 0 0;
  &.cus-bg-dark {
    background: #000;
  }
}

.index_page {
  max-width: 100%;
  margin: 0;
}

.main_page {
  position: relative;
  -webkit-animation: fade-in 0.5s;
  animation: fade-in;
  animation-duration: 0.5s;
}

.index_page {
  max-width: 970px;
  margin: 0 auto;
}

.container {
  padding: 60px 25px 20px;
}

@media (max-width: 700px) {
  .container {
    padding: 30px 20px 20px;
  }
}

//页面切换动画
@keyframes fade-in {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

//进度条颜色
#nprogress .bar {
  background: #3ccc64 !important;
}
</style>
