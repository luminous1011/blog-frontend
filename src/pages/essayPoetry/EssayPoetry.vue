<template>
  <div class="essayPoetry container">
    <header>
      <Title>随笔</Title>
      <Meta class="item_meta" :meta="meta" />
    </header>
    <main>
      <ul>
        <li v-for="item in arr" :key="item.createdTime">
          <div class="comment">
            <div class="comment_img" v-if="item.img">
                <p>
                <img src="../../assets/2.jpg" alt="">
                </p>
            </div>
            <div class="comment_content" v-if="item.content">
              <p>
                {{item.content}}
              </p>
            </div>
            <div class="comment_footer">
              <span class="author">
                <i class="fa fa-paper-plane-o" style="margin-right: 4px"></i>
                来自生活
              </span>
              <span class="time">{{item.createdTime}}</span>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Meta from "@/components/meta/Meta.vue";
import Title from "@/components/title/Title.vue";
import img from '@/assets/2.jpg'


const meta = { date: "2022-07-20", comments: 18, view: 188 };
const arr = [
    {content:"你呀一定要学会耐住所有寂寞，然后惊艳所有人",createdTime:'2022-06-18 04:00'},
    {content:"最近睡的晚，食三餐，睡五个小时的觉，听楼下的蛐蛐儿叫，原来志摩的诗里，夏虫永不沉默。",createdTime:'2022-06-18 04:00'},
    {img,createdTime:'2022-06-18 00:00'},
]

</script>

<style lang="less">
@import "./index.less";
</style>