<template>
  <div class="music">
    <header>
      <Title>音乐</Title>
      <Meta class="item_meta" :meta="meta" />
    </header>
    <main>
        <p>每日提神醒脑</p>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Meta from "@/components/meta/Meta.vue";
import Title from "@/components/title/Title.vue";


const meta = { date: "2022-07-20", comments: 18, view: 188 };


</script>

<style lang="less">
@import "./index.less";
</style>