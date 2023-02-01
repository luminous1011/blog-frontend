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
              <p v-html="item.text">
              </p>
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
      <Pagination />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted, reactive } from "vue";
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
const essayList = reactive<IEssay[]>([]);

const meta = { date: "2022-07-20", comments: 18, view: 188 };

onMounted(async () => {
  const res = await getEssayList(1,10);
  res?.data?.data.forEach((item: IEssay) => {
    essayList.push(item);
  });
});

// insertEssay(`<strong>1、正确的爱情观</strong>
// 感情一开始，你要考虑的是喜不喜欢这个人，而相处久了，就要考虑一下喜欢不喜欢当下的自己
// 如果自己变得暴躁了、卑微了、连你自己都看不上自己了，就证明这段关系其实并不适合你
// 两个人在一起的意义是共同成长、共同升值，而不是让你慢慢长成一张被生活欺负的脸

// <strong>2、爱情里的温柔</strong>
// 我和丈夫受教育的背景不同，知识量相差悬殊，他知道的东西比我太多了
// 每次我惊叹：你太厉害了，连这个都知道
// 他说：我只是比你早一点知道而已，现在你不也知道了
// 我好喜欢他这点。知识和信息密度远大于你的人，愿意俯下身主动和你交流、尊重你、鼓励你、引导你，这便是温柔

// ——摘录一些近期阅读直触心底的好文片段，经历的感情不算丰富，但是真实的感觉到自己还是那个对爱情憧憬着向往的少年仍然是一件令人感觉到开心的事。`,'知乎摘录')
</script>

<style lang="less">
@import "./index.less";
</style>
