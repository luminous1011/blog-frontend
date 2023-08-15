<template>
  <div class="essayPoetry container">
    <header>
      <Title>随笔</Title>
      <Meta class="item_meta" :meta="meta" />
    </header>
    <main>
      <ul>
        <li v-for="item in essayList" :key="item.infoId">
          <div class="comment">
            <div class="comment_img" v-if="item.url">
              <p>
                <img :src="item.url" alt="" />
              </p>
            </div>
            <div class="comment_content" v-if="item.text">
              <p v-text="item.text"></p>
            </div>
            <div class="comment_footer">
              <span class="author">
                <i class="fa fa-paper-plane-o" style="margin-right: 4px"></i>
                来自{{ item.source }}
              </span>
              <span class="time">{{
                timestampToTime(item.updateTime,'s')
              }}</span>
            </div>
          </div>
        </li>
      </ul>
    </main>
    <footer>
      <Pagination :pagination="pagination" />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted, watch } from "vue";
import UseGetEssayList from "./useGetEssayList";
import {timestampToTime} from '@/utils/time'
const Meta = defineAsyncComponent(() => import("@/components/meta"));
const Title = defineAsyncComponent(
  () => import("@/components/title")
);
const Pagination = defineAsyncComponent(
  () => import("@/components/pagination")
);

const meta = { date: "2022-07-20", comments: 18, view: 188 };
const { getEssayLists, pagination, essayList } = UseGetEssayList();

onMounted(async () => {
  await getEssayLists(pagination.page);
  watch(pagination, async () => {
    await getEssayLists(pagination.page);
  });
});


</script>

<style lang="less">
@import "./index.less";

</style>
