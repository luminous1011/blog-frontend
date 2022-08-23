<template>
  <div class="about">
    <Title>关于</Title>
    <Meta class="item_meta" :meta="meta" />
    <p>
      前端开发工程师 ｜ 后端开发工程师 ｜ 全栈开发工程师
      <br />
      目前就职于上海，热爱着且永远热爱自己，该博客用于记录生活，会是一个不错的宝藏网址。
    </p>
    <a href="https://github.com/luminous1011">
      <img src="https://ghchart.rshah.org/419c58/luminous1011" alt="" id="githubChart">
    </a>
  </div>
</template>
<script lang="ts" setup>
import Meta from "@/components/meta/Meta.vue";
import Title from "@/components/title/Title.vue";

const meta = { date: "2022-07-20", comments: 8, view: 122 };
</script>

<style lang="less">
.about {
  padding: 60px 25px 20px;
  p {
    margin: 20px 0;
    line-height: 2;
    vertical-align: baseline;
  }
  #githubChart{
    width: 97%;
    cursor: pointer;
    margin-left: 7px;
    padding: 5px;
    border: 4px dotted #3ccc64;
  }
}
</style>
