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
import { defineAsyncComponent, onMounted, watch } from "vue";
// import img from "@/assets/2.jpg";
import { getEssayList, insertEssay } from "@/service/informalEssay";
import UseGetEssayList from "./useGetEssayList";

const Meta = defineAsyncComponent(() => import("@/components/meta/Meta.vue"));
const Title = defineAsyncComponent(
  () => import("@/components/title/Title.vue")
);
const Pagination = defineAsyncComponent(
  () => import("@/components/pagination/Pagination.vue")
);

const meta = { date: "2022-07-20", comments: 18, view: 188 };
const { getEssayLists, pagination, essayList } = UseGetEssayList();

onMounted(async () => {
  await getEssayLists(pagination.page);
  watch(pagination, async () => {
    await getEssayLists(pagination.page);
  });
});

// insertEssay(`<b class="red">/ 君埋泉下泥销骨，我寄人间雪满头 /</b> 

// <b>1.</b> 我不主动找你，不是因为你不重要了，而是我知道我不重要了。
// ————《余味》

// <b>2.</b> 世间所有的相遇都是久别重逢。而你没有如期归来，这正是离别的意义。
// ————《不知归期的人》

// <b>3.</b> 见面沟通真的太重要了，对着屏幕什么话都说得出，见面就不一样了，见面会心软、会看到泪光、会得到拥抱。
// ————《空白格》

// <b>4.</b> 原来世上最苦之事，他如乌云，你如弯月，乌云遇皎月，云散月不知。
// ————《乌云遇皎月》

// <b>5.</b> 你承诺过的月亮还是没有出现，而我只是衣单天寒地，替你多爱了一回人间。
// ———— 张子选

// <b class="red">6.</b>   其实我很早就知道我们不合适，
//      但我还是拒绝了所有人，陪你走过一段没有结果的路，
//      虽然时间不长，但毕生难忘，
//      想想真是心酸，
//      <b>留住你和放下你，我都做不到。</b>
// ———— <b>宫崎骏</b>
// `,'知乎摘录')
</script>

<style lang="less">
@import "./index.less";

.red{
  color: #ea5055;
}
</style>
