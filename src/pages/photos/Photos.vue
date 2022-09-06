<template>
  <div
    id="grid"
    class="clearfix"
    data-masonry='{ "columnWidth": 0, "itemSelector": ".grid-item" }'
  >
    <div class="grid-sizer"></div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://cdn.rawchen.com/photos/2022/06/2917656022.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://cdn.rawchen.com/photos/2022/06/2359280684.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://cdn.rawchen.com/photos/2022/06/2359280684.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://cdn.rawchen.com/photos/2022/06/4075466420.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://cdn.rawchen.com/photos/2022/06/3288434216.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://cdn.rawchen.com/photos/2022/05/541156482.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://cdn.rawchen.com/photos/2022/05/333659843.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://cdn.rawchen.com/photos/2022/05/2602089809.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://cdn.rawchen.com/photos/2022/05/3904283063.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://cdn.rawchen.com/photos/2022/05/1415095300.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <img
        class="lazy"
        @load="load"
        src="https://rawchen.com/loading.gif"
        data-original="https://cdn.rawchen.com/photos/2022/05/653533658.jpg"
      />
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useScreenResize, load } from "./actions";
import { onMounted } from "vue";

useScreenResize();

onMounted(() => {
  //设置延迟加载图片
  setTimeout(
    () =>
      $("img.lazy").lazyload({
        effect: "fadeIn",
      }),
    2000
  );
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
