<template>
  <fieldset class="field">
    <legend>统计信息</legend>
    <div class="archives-count">
      <div class="archives-item">
        <code>{{archives.posts}}+</code>
        文章
      </div>
      <div class="archives-item">
         <code>{{archives.tags}}+</code>
        标签
      </div>
      <div class="archives-item">
         <code>{{archives.commits}}+</code>
        评论
      </div>
      <div class="archives-item">
         <code>{{archives.views}}+</code>
        浏览量
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
import { defineProps, toRefs, PropType } from "vue";
interface Iarchives {
  tags: number;
  commits: number;
  post: number;
  views: number;
}

const props = defineProps({
  archives: Object as PropType<Iarchives>,
});

const { archives = {} } = toRefs(props);
</script>

<style lang="less">
fieldset > legend {
  background-color: #eb5055;
  color: #fff;
  border-radius: 0.2em;
  padding: 0.2em 0.5em;
  font-size: 0.9em;
}
fieldset {
  margin: 10px 20px 0px 20px;
  border: 0.06em dashed #d5d5d5;
  border-radius: 0.3em;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
  background-color: #f3f3f3;
}
.archives-count {
  width: 100%;
  text-align: center;
  color: #666;
  display: flex;
  justify-content: space-around;
}
.archives-count .archives-item {
  width: 100%;
  padding: 0.4em 0 0.6em;
  border-radius: 0.3em;
  &:hover{
    background: #e8e8e8;
  }
}
.archives-count code {
  display: block;
  font-size: 2em;
  color: #707070;
  background: transparent !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 7px 4px 7px;
  margin: 2px 4px;
  border-radius: 5px;
}
</style>