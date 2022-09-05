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
import { onMounted } from "vue";
import JQueryBridget from "jquery-bridget";
import Masonry from "masonry-layout";
JQueryBridget("masonry", Masonry, $);

onMounted(() => {
  $("img.lazy").lazyload();
});
const load = () => {
  const $grid = $("#grid").masonry({
    itemSelector: ".grid-item",
    percentPosition: false,
    columnWidth: ".grid-sizer",
  });
  $grid.masonry("layout");
  setTimeout(() => $grid.masonry(), 100);
};
// onMounted(() => {
//   const images = document.querySelectorAll("#grid img");
//   const callback = (entries: any) => {
//     entries.forEach((entry) => {
//       // 判断是否在可视区域内
//       if (entry.isIntersecting) {
//         const image = entry.target;
//         const data_src = image.getAttribute("data-original");
//         if(data_src){
//         image.setAttribute("src", data_src);
//         }
//         observable.unobserve(image); // 解除观察
//         console.error(1);

//       }
//     });
//   };
//  const observable = new IntersectionObserver(callback)
//  images.forEach(element => {
//   observable.observe(element) // 开始观察一个图片
//  });
// });
</script>

<style  lang="less" scoped>
#grid {
  background: #000;
  width: 100%;
  max-width: unset;
  margin: 5px auto;
  padding-top: 30px;
}

/* ---- .grid-item ---- */

.grid-sizer,
.grid-item {
  width: calc(25% - 20px);
  /* width: 33.333%; */
  margin: 2px 5px 5px;
  border-radius: 3px;
  transition: linear 0.3s all;
  background: #333;
}

.grid-item {
  float: left;
}

.grid-item img {
  display: block;
  max-width: 100%;
}
.image_info {
  position: relative;
  padding: 11px 10px;
  text-align: center;
  word-wrap: break-word;
  font-size: 14px;
  color: #999;
  transition: all linear .3s;
  &:hover{
    background: #fff;
    color: #333;
  }
}
</style>