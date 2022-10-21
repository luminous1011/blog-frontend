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
    <div class="grid-item" v-for="item,index in data " :key="index" @click="handleTarget(item.targetUrl)">
      <div> 
        <div>
          <img
            class="lazy"
            @load="load"
            src="https://rawchen.com/loading.gif"
            :data-original="item.imgUrl"
          />
        </div>
      </div>
      <div class="image_info">{{item.time}} {{item.event}}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useScreenResize, load } from "./actions";
import { onMounted } from "vue";

useScreenResize();

const data = [
  {imgUrl:'https://photo.tuchong.com/27380778/f/1285305025.jpg',time:'2022.10.18',event:'the model 3 performance ',targetUrl:'https://tuchong.com/27380778/117796336/'},
  {imgUrl:'https://photo.tuchong.com/27380778/f/1038102939.jpg',time:'2022.10.01',event:'迪士尼王子回家记',targetUrl:'https://tuchong.com/27380778/117243795/'},
  {imgUrl:'https://photo.tuchong.com/27380778/f/1009136084.jpg',time:'2022.10.01',event:'迪士尼王子回家记',targetUrl:'https://tuchong.com/27380778/117243795/#image1009136084'},
  {imgUrl:'https://photo.tuchong.com/27380778/f/939930038.jpg',time:'2022.10.01',event:'迪士尼王子回家记'},
  {imgUrl:'https://photo.tuchong.com/27380778/f/1016738039.jpg',time:'2022.10.01',event:'迪士尼王子回家记'},
  {imgUrl:'https://photo.tuchong.com/27380778/f/980562277.jpg',time:'2022.10.01',event:'迪士尼王子回家记'},
  {imgUrl:'https://photo.tuchong.com/27380778/f/833761922.jpg',time:'2022.10.01',event:'迪士尼王子回家记'},
  {imgUrl:'https://photo.tuchong.com/27380778/f/1281045229.jpg',time:'2022.09.18',event:'一组清凉☁️'},
  {imgUrl:'https://photo.tuchong.com/27380778/f/1258303931.jpg',time:'2022.09.18',event:'一组清凉☁️'},
  {imgUrl:'https://photo.tuchong.com/27380778/f/1231630923.jpg',time:'2022.09.18',event:'一组清凉☁️'},
  {imgUrl:'https://photo.tuchong.com/27380778/f/1046688358.jpg',time:'2022.09.18',event:'一只叫Amy的流氓🐱🐱'},
]

function handleTarget(targetUrl:string){
  window.open(targetUrl,'_blank')
}
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
