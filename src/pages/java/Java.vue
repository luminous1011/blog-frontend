<template>
  <div class="container article-content bg-white">
    <div class="content">
      <header>
        <Field :archives="archives" />
      </header>
      <main>
        <div class="common-title">分类 : JAVA</div>
      </main>
      <footer></footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Field from "@/components/field/Field.vue";

const archives = { posts: 132, tags: 366, commits: 2288, views: 27988 };
</script>

<style lang="less">
.article-content {
  max-width: unset;
  min-height: calc(100vh - 70px);
  .content {
    max-width: 940px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .common-title {
    font-size: 14px;
    position: relative;
    margin: 10px auto;
    padding: 0 30px;
    color: #5f5f5f;
    &::before {
      position: absolute;
      top: 0;
      left: 15px;
      content: "#";
      color: #eb5055;
    }
  }
}
</style>
