<template>
  <div
    id="grid"
    class="clearfix"
    data-masonry='{ "columnWidth": 0, "itemSelector": ".grid-item" }'
  >
    <div class="grid-sizer"></div>
    <div class="grid-item">
      <div class="image_info">
        <h1><center>Luminous1011's plog</center></h1>
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
    <div class="grid-item">
      <div>
        <div>
          <img
            class="lazy"
            @load="load"
            src="https://rawchen.com/loading.gif"
            data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
          />
        </div>
      </div>
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
        />
      </div>
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
        />
      </div>
      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
        />
      </div>

      <div class="image_info">2022.06.22 中国电信信息园区</div>
    </div>
    <div class="grid-item">
      <div>
        <img
          class="lazy"
          @load="load"
          src="https://rawchen.com/loading.gif"
          data-original="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg"
        />
      </div>
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
