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
                $filters.timestampToTime(item.updateTime)
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
import { defineAsyncComponent, onMounted, reactive, watch } from "vue";
import img from "@/assets/2.jpg";
import { getEssayList, insertEssay } from "@/service/informalEssay";

const Meta = defineAsyncComponent(() => import("@/components/meta/Meta.vue"));
const Title = defineAsyncComponent(
  () => import("@/components/title/Title.vue")
);
const Pagination = defineAsyncComponent(
  () => import("@/components/pagination/Pagination.vue")
);
// import Meta from "@/components/meta/Meta.vue";
// import Title from "@/components/title/Title.vue";
// import Pagination from '@/components/pagination/Pagination.vue'

interface IEssay {
  infoId: number;
  text: string;
  source: string;
  createTime: number;
  updateTime: number;
  img?: string;
}

interface IPagination {
  page: number;
  pageSize: number;
  total: number;
}
const essayList = reactive<IEssay[]>([]);

const meta = { date: "2022-07-20", comments: 18, view: 188 };

const pagination = reactive<IPagination>({
  page: 1,
  pageSize: 10,
  total: 0,
});
onMounted(async () => {
  await getEssayLists(pagination.page);
  watch(pagination, async () => {
    await getEssayLists(pagination.page);
  });
});

async function getEssayLists(page: number) {
  const res = await getEssayList(page, 10);
  const { list = [], pageNum, pageSize, total } = res?.data?.data ?? {};
  pagination.page = pageNum;
  pagination.pageSize = pageSize;
  pagination.total = total;
  essayList.splice(0,essayList.length)
  list.forEach((item: IEssay) => {
    essayList.push(item);
  });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

// insertEssay(`测试数据20`,'测试数据') 
</script>

<style lang="less">
@import "./index.less";
</style>
