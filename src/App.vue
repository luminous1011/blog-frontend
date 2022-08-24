<template>
  <div class="index-page">
    <header>
      <AdminHeader />
    </header>
    <main>
      <router-view class="main_content clearfix index_page main_page"/>
    </main>
    <footer></footer>
  </div>
</template>

<script lang="ts" setup >
import AdminHeader from "@/components/header/Header.vue";
</script>

<style lang="less">
@import "./theme/index.less";
@import "../src/font/css/font-awesome.min.css";
@import "./font/font.less";
.index-page {
  padding: 70px 0 0;
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
.index_page{
  max-width: 970px;
  margin: 0 auto;
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
