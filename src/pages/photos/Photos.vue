<template>
  <div
    id="grid"
    class="clearfix"
    data-masonry='{ "columnWidth": 0, "itemSelector": ".grid-item" }'
  >
    <div class="grid-sizer"></div>
    <div class="grid-item">
      <div class="image_info">
        <h1><center>🍃</center></h1>
        <p>
          不是每个人都能成为摄影师，但好的摄影作品可以出自于任何人。
          <br />
          我永远期待镜头中无法预期的下一刻。
        </p>
        <p>
          <router-link to="/">首页</router-link>
          &nbsp;·&nbsp;
          <router-link to="/essaypoetry">随笔</router-link>
          &nbsp;·&nbsp;
          <router-link to="/about">关于</router-link>
        </p>
      </div>
    </div>
    <div
      class="grid-item"
      v-for="(item, index) in data"
      :key="index"
      @click="handleTarget(item.blankSrc)"
    >
      <div :class="{pointer:item.blankSrc}">
        <div >
          <img
            class="lazy"
            @load="load"
            src="https://rawchen.com/loading.gif"
            :data-original="item.src"
          />
        </div>
      </div>
      <div class="image_info">
        {{ photoFormatTimestamp(item.shotTime) }} {{ item.des }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useScreenResize, load } from "./actions";
import { onMounted } from "vue";
import { photoFormatTimestamp } from "@/utils/time";
import { data } from "./config";

onMounted(async () => {
  // addEventListener  resize
  useScreenResize();
  
  //设置延迟加载图片
  setTimeout(
    () =>
      $("img.lazy").lazyload({
        effect: "fadeIn",
      }),
    1000
  );
});

function handleTarget(targetUrl?: string) {
  targetUrl && window.open(targetUrl, "_blank");
}
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
