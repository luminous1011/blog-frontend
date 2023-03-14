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
            <div class="comment_img" v-if="item.img">
              <p>
                <img src="../../assets/2.jpg" alt="" />
              </p>
            </div>
            <div class="comment_content" v-if="item.text">
              <p v-html="item.text"></p>
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
// import img from "@/assets/2.jpg";
import { getEssayList, insertEssay } from "@/service/informalEssay";
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

// insertEssay(`<b class="red">君埋泉下泥销骨，我寄人间雪满头 </b> 
// `,'知乎摘录')
</script>

<style lang="less">
@import "./index.less";

</style>
