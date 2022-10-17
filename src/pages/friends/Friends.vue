<template>
  <div>
    <div class="container friends">
      <header>
        <Title>友链</Title>
        <Meta class="item_meta" :meta="meta" />
      </header>
      <main>
        <h2>申请友链样式：</h2>
        <blockquote>
          <p>
            Name：Luminous1011
            <br />
            Addr：<a :href="BLOG_HOME" target="_blank">{{ BLOG_HOME }}</a>
            <br />
            Logo：<a :href="BLOG_FAVICON" target="_blank">{{ BLOG_FAVICON }}</a>
          </p>
        </blockquote>
        <p>
          欢迎来互换友链，也可以在这个页面下方留言都行。
          <br />
          我会记着,感谢曾经给予我帮助的人。
        </p>
      </main>
      <footer></footer>
    </div>
    <Comment />
  </div>
</template>

<script lang="ts" setup>
import Meta from "@/components/meta/Meta.vue";
import Title from "@/components/title/Title.vue";
import Comment from "@/components/comment/Comment.vue";
import { BLOG_HOME, BLOG_FAVICON } from "@/utils/utils";

const meta = { date: "2022-07-20", comments: 18, view: 188 };
</script>

<style lang="less">
.friends {
  h2 {
    margin: 20px 0;
    font-size: 1.3em;
    font-weight: 650;
    &::before {
      border-radius: 50%;
      background-color: #ea5055;
      content: "";
      width: 8px;
      display: inline-block;
      height: 8px;
      vertical-align: middle;
      margin-bottom: 0.18em;
      margin-right: 8px;
    }
  }
  blockquote {
    padding: 8px 20px;
    background: linear-gradient(to right, #dceaff, #ededed);
    border-left: 4px solid #70a6ff;
    border-radius: 0 5px 5px 0;
    margin-bottom: 10px;
    &::before {
      background: #70a6ff;
      border-radius: 50%;
      color: #fff;
      content: "\0021";
      font-family: Dosis, "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
      font-size: 16px;
      height: 21px;
      line-height: 21px;
      margin-left: -33px;
      margin-top: 5px;
      position: absolute;
      text-align: center;
      width: 21px;
    }
  }
  p {
    font-size: 16px;
    line-height: 2;
    word-wrap: break-word;
    word-break: break-word;
  }
  a {
    margin: 0px 5px;
    color: #4c94dd;
    border-bottom: 1px dotted #ccc;
    position: relative;
    &::after {
      background: currentColor;
      content: "";
      height: 2px;
      left: 50%;
      position: absolute;
      top: 100%;
      transform: translateX(-50%);
      transition: width 0.2s ease;
      width: 0;
    }
    &:hover::after {
      width: 100%;
    }
  }
}
</style>
