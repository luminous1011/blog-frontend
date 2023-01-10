<template>
  <div class="post-wrapper">
    <header
      class="bg-blue header-bg"
      :style="`background-image: url(${paragraph.cover})`"
    >
      <div
        class="header-op"
        :style="`background-image: url(${paragraph.cover})`"
      ></div>
      <div class="header-cover">
        <div class="header-cover-wrapper">
          <div class="thumb-title">{{ paragraph.title }}</div>
          <div class="thumb-meta">
            <Meta class="thumb-meta" :meta="meta" />
          </div>
          <div>1</div>
        </div>
      </div>
    </header>
    <main class="index_page index-page post-wrapper-main">
      <section v-for="(item, index) in paragraph.message" :key="index">
        <div v-if="item.type === 'html'" v-html="item.paragraph"></div>
        <Code v-else :code="item.paragraph"></Code>
      </section>
    </main>
    <footer>
      <Comment />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Comment from "@/components/comment/Comment.vue";
import Title from "@/components/title/Title.vue";
import Meta from "@/components/meta/Meta.vue";
import Code from "@/components/code/Code.vue";
import { useRouter } from "vue-router";

import Paragraph from "@/mock/post";

const $router = useRouter();

/**
 * @type object[]
 */
const temp = Paragraph.filter(
  (item) => item.articleId === Number($router.currentRoute.value.params.id)
);
/**
 * @type objcet
 */
const paragraph = temp[0];

const meta = { date: "2022-07-20", comments: 8, view: 122 };
</script>

<style lang="less">
.post-wrapper-main {
  h1 {
    margin: 20px 10px 20px 0;
    padding-left: 9px;
    border-left: 6px solid #ea5055;
    font-weight: 600;
    line-height: 1.4;
    color: #222;
  }
  h1 {
    font-size: 1.4em;
    color: #222;
  }
  p {
    font-size: 16px;
    line-height: 2;
    word-wrap: break-word;
    word-break: break-word;
  }
  p a {
    margin: 0px 5px;
    color: #4c94dd;
    border-bottom: 1px dotted #ccc;
    position: relative;
  }
  .code-inner {
    font-family: Menlo, Bitstream Vera Sans Mono, DejaVu Sans Mono, Monaco,
      Consolas, monospace;
    font-family: Consolas, "Microsoft YaHei", Monaco, Andale Mono, Ubuntu Mono,
      monospace;
    word-break: break-all;
    font-size: 16px;
    color: black;
    padding: 4px 7px 4px 7px;
    margin: 2px 4px;
    border-radius: 5px;
    background: linear-gradient(to right, #ffc3aa, #ff8d8d);
    color: #000;
    -webkit-transition-duration: 0.15s;
    transition-duration: 0.15s;
  }
  img {
    position: relative;
    display: block;
    overflow: hidden;
    // max-width: 100%;
    width: 100%;
    height: auto;
    margin: 0 auto 10px;
    box-shadow: 0 0px 3px rgba(31, 35, 37, 0.25);
    -webkit-box-shadow: 0 0px 10px rgba(31, 35, 37, 0.25);
  }
}

main.index-page {
  padding: 30px 25px 20px;
  box-shadow: 0 0 55px 0 rgba(0, 0, 0, 0.03);
}
.post-wrapper {
  max-width: unset;
  .header-bg {
    height: 255px;
  }
  header {
    position: relative;
    width: 100%;
    margin-top: -70px;
    .header-op {
      position: absolute;
      width: 100%;
      width: 100%;
      height: 255px;
      background-position: center;
      background-size: cover;
      -webkit-filter: blur(4px);
      -moz-filter: blur(4px);
      filter: blur(4px);
      background-position-y: -133px;
    }
    .header-cover {
      position: relative;
      width: 100%;
      height: 255px;
      background-color: rgba(0, 0, 0, 0.5);
      -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    }
    .header-cover-wrapper {
      position: relative;
      top: 77px;
      max-width: 700px;
      margin: 0 auto;
      padding: 30px 25px 20px;
      -webkit-animation: fade-in 0.5s;
      animation: fade-in;
      animation-duration: 0.5s;
      color: #fff;
    }
  }
  .thumb-title {
    font-size: 21px;
  }
  .thumb-meta {
    color: #fff;
    font-size: 14px;
  }
}
</style>
